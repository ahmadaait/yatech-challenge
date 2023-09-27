import { NextFunction, Request, Response } from 'express'
import asyncHandler from 'helpers/asyncHandler'
import ResponseError from 'modules/ResponseError'
import routes from 'routes'
import UserService from './service'

routes.post(
  '/auth/register',
  // @ts-ignore
  asyncHandler(async function create(req: Request, res: Response) {
    const user = await UserService.register(req)
    return res.status(200).json({
      message: 'success',
      data: user,
    })
  })
)

routes.get(
  '/users',
  // @ts-ignore
  asyncHandler(async function getPaginate(req: Request, res: Response) {
    const data = await UserService.getPaginate(req)
    return res.status(200).json(data)
  })
)

routes.get(
  '/users/:id',
  // @ts-ignore
  asyncHandler(async function getOne(req: Request, res: Response) {
    const { id } = req.params
    const data = await UserService.getOne(id)
    return res.status(200).json(data)
  })
)

routes.put(
  '/users/:id',
  asyncHandler(async function update(req: Request, res: Response) {
    throw new ResponseError.BadRequest('Method not implemented.')
  })
)

routes.delete(
  '/users/:id',
  asyncHandler(async function destroy(req: Request, res: Response) {
    throw new ResponseError.BadRequest('Method not implemented.')
  })
)
