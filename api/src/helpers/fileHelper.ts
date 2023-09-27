import path from 'path'
var fs = require('fs')

function getListFiles(dir: any, files_: any, subDir: any) {
  files_ = files_ || []
  var files = fs.readdirSync(dir)
  for (var i in files) {
    var name = dir + '/' + files[i]
    if (fs.statSync(name).isDirectory()) {
      if (subDir) {
        getListFiles(name, files_, false)
      }
    } else {
      files_.push(name)
    }
  }
  return files_
}

function deleteFile(directory: string, fileName: string) {
  let filePath = path.resolve(directory) + '/' + fileName
  console.log('Deleting... ' + filePath)
  fs.unlink(filePath, function () {})
}

function readFileSync(templatePath: string) {
  return fs.readFileSync(path.resolve(templatePath), { encoding: 'utf-8' })
}

const helper = {
  getListFiles,
  deleteFile,
  readFileSync,
}

export default helper
