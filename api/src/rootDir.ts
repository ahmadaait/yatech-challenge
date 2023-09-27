const splitDirname = __dirname.split('/')
const rootDirname = __dirname
  .split('/')
  .slice(0, splitDirname.length - 1)
  .join('/')

export default rootDirname
