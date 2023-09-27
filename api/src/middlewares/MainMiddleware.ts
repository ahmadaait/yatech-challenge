import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import models from 'models'
import { NextFunction, Request, Response } from 'express'

const { User } = models

function EnsureTokenUser(req: Request, res: Response, next: NextFunction) {
  var token =
    req.headers.token ||
    req.body.token ||
    req.query.token ||
    req.headers.authorization

  //remove bearer word if exist
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length)
  }

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(
      token,
      'abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      // @ts-ignore
      async function (err: JsonWebTokenError, decoded: any) {
        try {
          if (err) {
            console.log(err)
            if (err.name === 'TokenExpiredError') {
              return res.status(401).json({ message: 'Token expired.' })
            } else {
              return res
                .status(401)
                .json({ message: 'Failed to authenticate token.' })
            }
          }

          if (decoded && decoded.user) {
            let dbUser = await User.scope('withPassword').findOne({
              include: [],
              where: {
                id: decoded.user.id,
              },
            })
            if (!dbUser) {
              return res.status(403).json({
                message:
                  'Illegal Access, User tidak ditemukan. Silahkan login kembali.',
              })
            } else if (isPasswordChanged(decoded, dbUser)) {
              return res.status(403).json({
                message: 'Password telah diubah, silahkan login kembali.',
              })
            }

            let newDecodedUser = refreshUser(decoded, dbUser)
            if (newDecodedUser) {
              let resultDecoded = newDecodedUser
              const payload = { user: resultDecoded.user } // untuk generate jwt
              let newToken = jwt.sign(
                payload,
                'abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
                { expiresIn: '7d' }
              )
              if (newToken !== null) {
                return res
                  .status(400)
                  .json({ message: 'Role expired.', token: newToken })
              }
            }
            req.user = dbUser
          }

          // if everything is good, save to request for use in other routes
          req.body.tokenDecoded = decoded
          req.headers.tokenDecoded = decoded
          next()
        } catch (e) {
          next(e)
        }
      }
    )
  } else {
    return res.status(401).send({ message: 'No token provided.' })
  }
}

function isPasswordChanged(decoded: any, dbUser: any) {
  let reqUser = decoded.user
  if (reqUser && dbUser) {
    let curUser = dbUser.dataValues
    if (reqUser.password !== curUser.password) {
      return true
    }
  }
  return false
}

function refreshUser(decoded: any, dbUser: any) {
  let reqUser = decoded.user
  if (reqUser && dbUser) {
    let curUser = dbUser.dataValues
    if (reqUser.email !== curUser.email || reqUser.name !== curUser.name) {
      decoded.user.email = curUser.email
      decoded.user.name = curUser.name
      return decoded
    }
  }
  return null
}

function EnsureSuperAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.user.name !== 'superadmin') {
    return res.status(400).json({
      message: 'Hanya Super Admin yang bisa mengakses url ini!',
    })
  }

  next()
}

const MainMiddleware = {
  EnsureTokenUser,
  EnsureSuperAdmin,
}

export default MainMiddleware
