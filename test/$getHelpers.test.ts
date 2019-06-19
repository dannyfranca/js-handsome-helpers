import Helpers from '../src/index'
import {onlyHelpers} from '../src/index'

test('getHelpers', () => {
  expect(Helpers.$getHelpers()).toStrictEqual(onlyHelpers)
})
