import Helpers from '../src/index'

test('empty paths', () => {
  expect(Helpers.mountPathArray('/')).toStrictEqual([])
  expect(Helpers.mountPathArray('')).toStrictEqual([])
})

test('filled paths', () => {
  expect(Helpers.mountPathArray('path')).toStrictEqual(['path'])
  expect(Helpers.mountPathArray('path/')).toStrictEqual(['path'])
  expect(Helpers.mountPathArray('/path')).toStrictEqual(['path'])
  expect(Helpers.mountPathArray('/path/')).toStrictEqual(['path'])
  expect(Helpers.mountPathArray('path/to')).toStrictEqual(['path', 'to'])
  expect(Helpers.mountPathArray('path/to/')).toStrictEqual(['path', 'to'])
})
