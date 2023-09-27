import { isString } from 'lodash'

function parseIfString(data: any): object | any {
  if (isString(data)) {
    return JSON.parse(data)
  }
  return data
}

const Objects = {
  parseIfString,
}

export default Objects
