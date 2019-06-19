import Helpers from '../src/index'

test('add function', () => {
  expect(function () {
    Helpers.$add('customHelper', function (attr: string) {
      return attr + 'ok'
    })
    return Helpers.customHelper('string_')
  }()).toBe('string_ok')

  // empty name error
  expect(function () {
    try {
      Helpers.$add('', function (attr: string) {
        return attr + 'ok'
      })
    } catch (e) {
      throw e
    }
  }).toThrow(Error)

  // name starting with $ error
  expect(function () {
    try {
      Helpers.$add('$customHelper', function (attr: string) {
        return attr + 'ok'
      })
    } catch (e) {
      throw e
    }
  }).toThrow(Error)
})

test('add directly function', () => {
  expect(function () {
    Helpers.customHelper = function (attr: string) {
      return attr + 'ok'
    }
    return Helpers.customHelper('string_')
  }()).toBe('string_ok')

  // error
  expect(function () {
    try {
      Helpers.$customHelper = function (attr: string) {
        return attr + 'ok'
      }
    } catch (e) {
      throw e
    }
  }).toThrow(Error)
})

test('add not function', () => {
  expect(function () {
    Helpers.$add('customHelper', Promise.resolve('string'))
    return Helpers.customHelper('string_')
  }).toThrow(Error)
})
