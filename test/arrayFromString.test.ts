import Helpers from '../src/index'

test('simple string', () => {
  expect(Helpers.arrayFromString('1,2,3')).toStrictEqual(['1', '2', '3'])
})

test('empty string', () => {
  expect(Helpers.arrayFromString('')).toStrictEqual([])
})
