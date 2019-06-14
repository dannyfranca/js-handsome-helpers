export default (val: any): boolean => {
  switch (typeof val) {
    case 'undefined':
      return true
    case 'object':
      if (val instanceof Object) {
        return Object.keys(val).length === 0
      } else if (val instanceof Array) {
        return val.length === 0
      } else {
        return true
      }
    case 'string':
      return val === ''
    case 'number':
      return isNaN(val) || !isFinite(val) || val == 0
    default:
      return false
  }
}
