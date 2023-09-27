const createError = require('http-errors')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const splitDirname = __dirname.split('/')
const rootDirname = __dirname
  .split('/')
  .slice(0, splitDirname.length - 1)
  .join('/')

import express, { NextFunction, Request, Response } from 'express'
import indexRouter from 'routes'
import withState from 'helpers/withState'
import ExpressErrorSequelize from 'middlewares/ExpressErrorSequelize'

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/v1', express.static(path.join(rootDirname, '/public')))

app.use((req: Request, res, next) => {
  new withState(req)
  next()
})

app.use('/v1', indexRouter)

async function handleRollbackTransaction(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await req.rollbackTransactions()
  } catch (e) {}
  next(err)
}

app.use('/v1', handleRollbackTransaction)
app.use('/v1', ExpressErrorSequelize)

//version 2
app.use('/v2', handleRollbackTransaction)
app.use('/v2', ExpressErrorSequelize)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('lewat sini \n\n\n\n\n\n\n')

  next(createError(404))
})

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  if (err.status) {
    res.locals.message = err?.message?.split('\r')?.[0] || err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    // render the error page
    res.status(err.status || 500)
    res.render('error')
    return
  }
  console.log(err.stack)
  return res.status(500).json({
    message: err.message,
    error: 'Unhandled error!',
  })
})

// Optional fallthrough error handler
app.use(function onError(
  err: Error,
  req: Request,
  res: any,
  next: NextFunction
) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500
  res.end(res.sentry + '\n')
})

module.exports = app
