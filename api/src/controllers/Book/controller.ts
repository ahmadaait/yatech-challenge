import { NextFunction, Request, Response } from 'express'
import asyncHandler from 'helpers/asyncHandler'
import MainMiddleware from 'middlewares/MainMiddleware'
import routes from 'routes'
import BookService from './service'

routes.get(
  '/books',
  MainMiddleware.EnsureTokenUser,
  asyncHandler(async function getPaginate(req: Request, res: Response) {
    const data = await BookService.getPaginate(req)
    return res.status(200).json(data)
  })
)

routes.get(
  '/books/:id',
  MainMiddleware.EnsureTokenUser,
  asyncHandler(async function getOne(req: Request, res: Response) {
    const { id } = req.params
    const data = await BookService.getOne(id)
    return res.status(200).json(data)
  })
)

routes.post(
  '/books',
  MainMiddleware.EnsureTokenUser,
  asyncHandler(async function create(req: Request, res: Response) {
    const data = await BookService.create(req)
    return res.status(201).json(data)
  })
)

routes.put(
  '/books/:id',
  MainMiddleware.EnsureTokenUser,
  asyncHandler(async function update(req: Request, res: Response) {
    const { id } = req.params
    const data = await BookService.update(id, req)
    return res.status(201).json(data)
  })
)

routes.delete(
  '/books/:id',
  MainMiddleware.EnsureTokenUser,
  asyncHandler(async function destroy(req: Request, res: Response) {
    const { id } = req.params
    await BookService.delete(id)
    return res.status(200).json({
      message: 'success',
    })
  })
)
