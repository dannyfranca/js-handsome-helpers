import isEmpty from "./isEmpty"

export default (val: any, type: any): any => {
  const typeOf = typeof val

  if (type === Object && val instanceof Array) return {...val}
  if (type === Array && val instanceof Object) return Object.values(val)
  if (!isEmpty(val) && val instanceof type) {
    return val
  } else {
    switch (type) {
      case Object:
        return Object()
      case Array:
        return []
      case String:
        if (typeOf === 'string') {
          return val
        } else if (typeof val === 'number') {
          return String(val)
        }
        return String()
      case Number:
        if (typeOf === 'number') {
          return val
        }
        const res = Number(val)
        if (isNaN(res)) return Number()
        return res
      case Boolean:
        return typeOf === 'boolean' ? val : Boolean(val)
      case Function:
        return function () {
        }
    }
    return
  }
}
