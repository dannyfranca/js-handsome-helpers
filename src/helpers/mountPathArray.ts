import { compact } from 'lodash'

export default function (str: string): string[] {
  return compact(str.split('/'))
}
