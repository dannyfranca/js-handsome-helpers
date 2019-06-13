import {resolve, basename} from 'path'
import glob from 'glob'

const exp: any = {}
glob.sync('/*.js', {root: resolve(__dirname, 'helpers')}).forEach(function (path) {
  const namedExport = basename(path).replace('.js', '')
  exp[namedExport] = require(path).default
})

export default exp
