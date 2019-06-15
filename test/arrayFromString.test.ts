import Helpers from '../src/index'

test('simple string', () => {
  expect(Helpers.arrayFromString('1,2,3')).toStrictEqual(['1', '2', '3'])
  expect(Helpers.arrayFromString('1,,3')).toStrictEqual(['1', '', '3'])
  expect(Helpers.arrayFromString('1,,3', {cleanEmpty: true})).toStrictEqual(['1', '3'])
})

test('empty string', () => {
  expect(Helpers.arrayFromString('')).toStrictEqual([])
})
