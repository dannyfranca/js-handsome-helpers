import Helpers from '../src/index'

test('empty string', () => {
  expect(Helpers.optionsFromString('')).toStrictEqual({})
})

test('filled string', () => {
  expect(Helpers.optionsFromString('foo')).toStrictEqual({foo: true})
  expect(Helpers.optionsFromString('foo|')).toStrictEqual({foo: true})
  expect(Helpers.optionsFromString('foo:')).toStrictEqual({foo: ''})
  expect(Helpers.optionsFromString('foo:|')).toStrictEqual({foo: ''})
  expect(Helpers.optionsFromString('foo:bar')).toStrictEqual({foo: 'bar'})
  expect(Helpers.optionsFromString('foo:bar|')).toStrictEqual({foo: 'bar'})
})
