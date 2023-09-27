class BaseResponse extends Error {
  public statusCode: number

  constructor(message: string, statusCode = 500) {
    super(message)
    this.message = message
    this.statusCode = statusCode
    Object.setPrototypeOf(this, BaseResponse.prototype)
  }
}

class NotFound extends BaseResponse {
  constructor(message: string) {
    super(message, 404)
    Object.setPrototypeOf(this, NotFound.prototype)
  }
}

class Forbidden extends BaseResponse {
  constructor(message: string) {
    super(message, 403)
    Object.setPrototypeOf(this, Forbidden.prototype)
  }
}

class BadRequest extends BaseResponse {
  constructor(message: string) {
    super(message, 400)
    Object.setPrototypeOf(this, BadRequest.prototype)
  }
}

class UnprocessableEntity extends BaseResponse {
  constructor(message: string) {
    super(message, 422)
    Object.setPrototypeOf(this, UnprocessableEntity.prototype)
  }
}

class Unauthorized extends BaseResponse {
  constructor(message: string) {
    super(message, 401)
    Object.setPrototypeOf(this, Unauthorized.prototype)
  }
}

const ResponseError = {
  BaseResponse,
  BadRequest,
  NotFound,
  Forbidden,
  Unauthorized,
  UnprocessableEntity,
}

export default ResponseError
