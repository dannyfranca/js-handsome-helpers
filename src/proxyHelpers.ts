import Helpers from './index'
import helpers from "./types/helpers"

const proxyFunctions: helpers = {
  $getHelpers(): helpers {
    return {...Helpers}
  },
  $add(name: string, helper: Function): typeof proxyHelpers {
    if (!name) throw new Error('function must have a name')
    if (String(name).startsWith('$')) throw new Error('function name cannot start with $')
    Helpers[name] = helper
    return proxyHelpers
  },
  $merge(helpers: helpers): typeof proxyHelpers {
    for (const prop in helpers) {
      proxyFunctions.$add(prop, helpers[prop])
    }
    return proxyHelpers
  }
}
const proxyHandler: ProxyHandler<helpers> = {
  get(target, prop: string): Function {
    let attr: Function
    if (prop.startsWith('$')) attr = proxyFunctions[prop]
    else attr = target[prop]
    if (typeof attr === 'function') {
      return (...args: any[]) => attr(...args)
    }
    return attr
  },
  set(obj, prop: string, value: Function) {
    if (prop.startsWith('$')) {
      throw new Error('function name cannot start with $')
    }
    return true
  }
}

export const proxyHelpers = new Proxy(Helpers, proxyHandler)
export default proxyHelpers
