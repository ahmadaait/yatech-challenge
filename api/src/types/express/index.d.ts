import withState from 'helpers/withState'
import { UserInstance } from 'models/User'

declare global {
  namespace Express {
    interface Request extends withState {
      state: object
      _transaction: any
      tokenPublicDecoded: any
      user: UserInstance
    }
  }
}
