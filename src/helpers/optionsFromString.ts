import typeOptions from '../types/options'
import typeSeparators from '../types/optionStringSeparators'

export default function (str: string, seps: typeSeparators): typeSeparators {
  const options: typeOptions = {}
  const optSeps = {
    index: '|',
    value: ':',
    ...seps
  }
  str.split(optSeps.index).forEach((val: string) => {
    const split = val.split(optSeps.value)
    if (split[0]) {
      if (typeof split[1] === 'undefined') {
        options[split[0]] = true
      } else {
        options[split[0]] = split[1]
      }
    }
  })
  return options
}
