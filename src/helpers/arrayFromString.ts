import {compact} from 'lodash'

interface options {
  sep?: string,
  cleanEmpty?: boolean
}

export default function (str: string, sep: options = {}): string[] {
  let arr = String(str).split(sep.sep || ',')
  if (sep.cleanEmpty) arr = compact(arr)
  else if (arr[arr.length - 1] == "") arr.pop()
  return arr
}
