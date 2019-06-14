import Helpers from '../src/index'

test('empty string', () => {
  expect(Helpers.stripTags('')).toBe('')
})

test('not tagged string', () => {
  expect(Helpers.stripTags('foo bar')).toBe('foo bar')
})

test('tagged string', () => {
  expect(Helpers.stripTags('<h1>foo</h1>')).toBe('foo')
  expect(Helpers.stripTags('<h1>foo')).toBe('foo')
  expect(Helpers.stripTags('<h1/>foo')).toBe('foo')
  expect(Helpers.stripTags('<h></h>')).toBe('')
  expect(Helpers.stripTags('<h><h>')).toBe('')
})
