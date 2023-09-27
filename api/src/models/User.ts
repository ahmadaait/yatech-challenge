import { Model, Optional } from 'sequelize'
import { Associate } from 'types/sequelize'

import SequelizeAttributes from 'utils/SequelizeAttributes'
import db from './_instance'

export interface UserAttributes {
  id: number
  name: string
  email: string
  password: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

const User: typeof Model &
  (new () => UserInstance) &
  Associate = db.sequelize.define<UserInstance>(
  'Users',
  {
    ...SequelizeAttributes.current.Users,
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['password'],
      },
    },
    scopes: {
      email: {
        attributes: ['id', 'email'],
      },
      withPassword: {},
    },
  }
)

User.associate = (models: any) => {}

export default User
