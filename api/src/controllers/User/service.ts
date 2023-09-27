import { Request } from 'express'
import User, { UserAttributes } from 'models/User'
import ResponseError from 'modules/ResponseError'
import PluginSqlizeQuery from 'modules/SqlizeQuery/PluginSqlizeQuery'
import { Includeable } from 'sequelize'
//@ts-ignore
import twinBcrypt from 'twin-bcrypt'

class UserService {
  static async register(req: Request) {
    const { name, email, password } = req.body
    if (!name || !email || !password)
      throw new ResponseError.BadRequest(
        'name, email dan password tidak boleh kosong'
      )
    const hashPassword = await twinBcrypt.hashSync(password)
    const user = await User.create(<UserAttributes>{
      email,
      name,
      password: hashPassword,
    })
    return user
  }

  static async getPaginate(req: Request) {
    let { pageSize, page, filtered } = req.query
    page = page ? page : '1'
    pageSize = pageSize ? pageSize : '10'

    req.query = {
      ...req.query,
      page,
      pageSize,
    }

    const rawInclude: Includeable[] = []

    const query = PluginSqlizeQuery.generate(
      req,
      User,
      PluginSqlizeQuery.makeIncludeQueryable(filtered, rawInclude)
    )

    const data = await User.findAll({
      include: query.include,
      where: query.where,
      order: query.order,
      offset: query.offset,
      limit: query.limit,
    })

    const total = await User.count({
      include: query.includeCount,
      where: query.where,
    })

    return {
      data,
      total,
      page: Number(page),
      pageSize: Number(pageSize),
      totalPages: Math.ceil(total / query.limit),
    }
  }

  static async getOne(id: string) {
    const user = await User.findByPk(id)
    if (!user) throw new ResponseError.NotFound('user tidak ditemukan')
    return user
  }
}

export default UserService
