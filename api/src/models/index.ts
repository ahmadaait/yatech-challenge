import Book from 'models/Book'
import User from 'models/User'

const models = {
  User,
  Book,
}

export default models

export type MyModels = typeof models

Object.entries(models).map(([, model]) => {
  if (model?.associate) {
    model.associate(models)
  }
})
