import arrayFromString from './helpers/arrayFromString'
import isEmpty from './helpers/isEmpty'
import mountPath from './helpers/mountPath'
import mountPathArray from './helpers/mountPathArray'
import optionsFromString from './helpers/optionsFromString'
import sleep from './helpers/sleep'
import stripTags from './helpers/stripTags'
import typeValue from './helpers/typeValue'
import helpers from "./types/helpers"

const Helpers: helpers = {
  arrayFromString,
  isEmpty,
  mountPath,
  mountPathArray,
  optionsFromString,
  sleep,
  stripTags,
  typeValue
}

const proxyFunctions: helpers = {
  $getHelpers(): helpers {
    return {...Helpers}
  },
  $add(name: string, helper: Function): typeof proxy {
    if (!name) throw new Error('function must have a name')
    if (String(name).startsWith('$')) throw new Error('function name cannot start with $')
    Helpers[name] = helper
    return proxy
  },
  $merge(helpers: helpers): typeof proxy {
    for (const prop in helpers) {
      proxyFunctions.$add(prop, helpers[prop])
    }
    return proxy
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
const proxy = new Proxy(Helpers, proxyHandler)

export const onlyHelpers = Helpers
export default proxy
