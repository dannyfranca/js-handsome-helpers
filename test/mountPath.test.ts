import Helpers from '../src/index'

test('empty paths', () => {
  expect(Helpers.mountPath('')).toBe('')
  expect(Helpers.mountPath('/')).toBe('')
})

test('filled paths', () => {
  expect(Helpers.mountPath('/path')).toBe('/path')
  expect(Helpers.mountPath('/path/', '/')).toBe('/path')
  expect(Helpers.mountPath('/path', 'to')).toBe('/path/to')
  expect(Helpers.mountPath('/path/', 'to')).toBe('/path/to')
  expect(Helpers.mountPath('/path/', '/to')).toBe('/path/to')
})
