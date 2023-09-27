function isNullOrEmpty(data: any, checkWhiteSpace: boolean = false): boolean {
  return (
    data === undefined ||
    data === null ||
    data === '' ||
    (!checkWhiteSpace && data === 'null') ||
    (checkWhiteSpace && isOnlyWhiteSpace(data))
  )
}

function isOnlyWhiteSpace(data: string): boolean {
  return data.toString().replace(/ /g, '') === ''
}

function generateAlphaNumeric(lengthPw: number = 10): string {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < lengthPw; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

const Strings = {
  isNullOrEmpty,
  generateAlphaNumeric,
}

export default Strings
