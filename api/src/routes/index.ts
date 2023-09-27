import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', function (req: express.Request, res: express.Response) {
  res.render('index', { title: 'Express' })
})

export default router

require('controllers/Auth/controller')
require('controllers/User/controller')
require('controllers/Book/controller')
