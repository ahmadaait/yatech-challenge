import { Model, Optional } from 'sequelize'
import { Associate } from 'types/sequelize'

import SequelizeAttributes from 'utils/SequelizeAttributes'
import db from './_instance'

export interface BookAttributes {
  id: number
  code: string
  title: string
  description: string
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

export interface BookInstance
  extends Model<BookAttributes, BookCreationAttributes>,
    BookAttributes {}

const Book: typeof Model &
  (new () => BookInstance) &
  Associate = db.sequelize.define<BookInstance>('Books', {
  ...SequelizeAttributes.current.Books,
})

Book.associate = (models: any) => {}

export default Book
