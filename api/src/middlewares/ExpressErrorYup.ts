import { NextFunction, Request, Response } from 'express'
import { ValidationError } from 'yup'

async function ExpressErrorYup(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ValidationError) {
    const error = {
      message: err.errors.join('<br/>') || 'Yup Validation Error !',
      errors:
        err.inner.length > 0
          ? err.inner.reduce((acc: any, curVal: any) => {
              acc[`${curVal.path}`] = curVal.message || curVal.type
              return acc
            }, {})
          : { [`${err.path}`]: err.message || err.type },
    }
    return res.status(422).json(error)
  }

  next(err)
}

export default ExpressErrorYup
