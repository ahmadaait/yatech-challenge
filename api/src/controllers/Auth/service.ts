import User from 'models/User'
// @ts-ignore
import twinBcrypt from 'twin-bcrypt'
import jwt from 'jsonwebtoken'
import { isNull } from 'lodash'
import ResponseError from 'modules/ResponseError'

class AuthService {
  static async login(email: string, password: string) {
    if (!email || !password) {
      throw new ResponseError.BadRequest('email atau password salah')
    }

    let user = await User.scope('withPassword').findOne({
      where: {
        email: email,
      },
    })

    if (!user || !twinBcrypt.compareSync(password, user.password)) {
      throw new Error('email atau password salah')
    }

    const payload = { user } // untuk generate jwt
    var token = jwt.sign(
      payload,
      'abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      { expiresIn: '1d' }
    )

    const refreshToken = jwt.sign(
      {
        uid: user.id,
      },
      'daskhdjhwuey12u39809',
      { expiresIn: '7d' }
    )

    return { access: token, refresh: refreshToken }
  }

  static async generateAccessToken(email: string, refreshToken: any) {
    let user = await User.scope('withPassword').findOne({
      where: {
        email: email,
      },
    })

    const payload = { user } // untuk generate jwt
    var token = jwt.sign(
      payload,
      'abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      { expiresIn: '1d' }
    )

    if (isNull(refreshToken)) {
      refreshToken = jwt.sign(
        {
          uid: user?.id,
        },
        'daskhdjhwuey12u39809',
        { expiresIn: '7d' }
      )
    }

    return { access: token, refresh: refreshToken }
  }
}

export default AuthService
