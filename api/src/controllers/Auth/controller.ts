import asyncHandler from 'helpers/asyncHandler'
import routes from 'routes'

import { NextFunction, Request, Response } from 'express'
import MainMiddleware from 'middlewares/MainMiddleware'
import AuthService from './service'

routes.post(
  '/auth/login',
  // @ts-ignore
  asyncHandler(async function login(req: Request, res: Response) {
    const { email, password } = req.body
    const token = await AuthService.login(email, password)
    return res.status(200).json({
      message: 'success',
      token: token.access,
      refreshToken: token.refresh,
    })
  })
)

routes.post(
  '/auth/refresh',
  MainMiddleware.EnsureTokenUser,
  // @ts-ignore
  asyncHandler(async function refresh(req: Request, res: Response) {
    const user = req.user
    const token = await AuthService.generateAccessToken(user.email, null)
    return res.status(200).json({
      message: 'success',
      token: token.access,
      refreshToken: token.refresh,
    })
  })
)
