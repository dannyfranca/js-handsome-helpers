import {resolve, basename} from 'path'
import glob from 'glob'

glob.sync('/*.ts', {root: resolve('./helpers')}).forEach(function (path) {
  const namedExport = basename(path).replace('.ts', '')
  exports[namedExport] = require(path).default
})
