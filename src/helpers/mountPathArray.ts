import { compact } from 'lodash'

export default function (str: string): string[] {
  return compact(String(str).split('/'))
}
