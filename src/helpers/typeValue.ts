import isEmpty from "./isEmpty"

export default (type: any, val: any): any => {
  const typeOf = typeof val

  if (type === Object && val instanceof Array) return Object()
  if (!isEmpty(val) && val instanceof type) {
    return val
  } else {
    switch (type) {
      case Object:
        return Object()
      case Array:
        return []
      case String:
        return typeOf === 'string' ? val : String()
      case Number:
        return typeOf === 'number' ? val : Number()
      case Boolean:
        return typeOf === 'boolean' ? val : Boolean()
      case Function:
        return function () {
        }
    }
    return
  }
}
