import Helpers from '../src/index'
import proxyHelpers from '../src/proxyHelpers'

test('getHelpers', () => {
  expect(proxyHelpers.$getHelpers()).toStrictEqual(Helpers)
})
