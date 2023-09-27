import { Request } from 'express'
import Book from 'models/Book'
import ResponseError from 'modules/ResponseError'
import PluginSqlizeQuery from 'modules/SqlizeQuery/PluginSqlizeQuery'
import { Includeable } from 'sequelize'

class BookService {
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
      Book,
      PluginSqlizeQuery.makeIncludeQueryable(filtered, rawInclude)
    )

    const data = await Book.findAll({
      include: query.include,
      where: query.where,
      order: query.order,
      offset: query.offset,
      limit: query.limit,
    })

    const total = await Book.count({
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
    const book = await Book.findByPk(id)
    if (!book) throw new ResponseError.NotFound('buku tidak ditemukan')
    return book
  }

  static async create(req: Request) {
    const { title } = req.body
    if (!title) throw new ResponseError.UnprocessableEntity('title wajib diisi')

    const code = `BOOK.${(await Book.count()) + 1}`
    const book = await Book.create({ code, ...req.body })
    return book
  }

  static async update(id: string, req: Request) {
    const { title } = req.body
    if (!title) throw new ResponseError.UnprocessableEntity('title wajib diisi')
    const book = await Book.findByPk(id)
    if (!book) throw new ResponseError.NotFound('buku tidak ditemukan')
    await book.update({ code: book.code, ...req.body })
    return book
  }

  static async delete(id: string) {
    const book = await Book.findByPk(id)
    if (!book) throw new ResponseError.NotFound('buku tidak ditemukan')
    await book.destroy()
  }
}

export default BookService
