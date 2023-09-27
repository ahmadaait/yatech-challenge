import { FindOptions, Model, ModelCtor } from 'sequelize'

class SequelizeChecker {
  static async throwIfNotExist<M extends Model>(
    model: ModelCtor<M>,
    id: any,
    message: string,
    options?: FindOptions
  ): Promise<M> {
    const curOptions = {
      where: {
        id,
      },
      ...(options || {}),
    }

    const data = await model.findOne({
      ...curOptions,
    })
    if (!data) {
      throw new Error(message)
    }
    return data
  }

  static async throwIfExist<M extends Model>(
    model: ModelCtor<M>,
    id: any,
    message: string,
    options: FindOptions<M>
  ): Promise<null> {
    const curOptions = {
      where: {
        id,
      },
      ...(options || {}),
    }
    const data = await model.findOne({
      ...curOptions,
    })
    if (data) {
      throw new Error(message)
    }
    return null
  }
}
export default SequelizeChecker
