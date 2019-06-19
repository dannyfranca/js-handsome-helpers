import proxyHelpers from '../src/proxyHelpers'

test('add function', () => {
  expect(function () {
    proxyHelpers.$add('customHelper', function (attr: string) {
      return attr + 'ok'
    })
    return proxyHelpers.customHelper('string_')
  }()).toBe('string_ok')

  // empty name error
  expect(function () {
    try {
      proxyHelpers.$add('', function (attr: string) {
        return attr + 'ok'
      })
    } catch (e) {
      throw e
    }
  }).toThrow(Error)

  // name starting with $ error
  expect(function () {
    try {
      proxyHelpers.$add('$customHelper', function (attr: string) {
        return attr + 'ok'
      })
    } catch (e) {
      throw e
    }
  }).toThrow(Error)
})

test('add directly function', () => {
  expect(function () {
    proxyHelpers.customHelper = function (attr: string) {
      return attr + 'ok'
    }
    return proxyHelpers.customHelper('string_')
  }()).toBe('string_ok')

  // error
  expect(function () {
    try {
      proxyHelpers.$customHelper = function (attr: string) {
        return attr + 'ok'
      }
    } catch (e) {
      throw e
    }
  }).toThrow(Error)
})

test('add not function', () => {
  expect(function () {
    proxyHelpers.$add('customHelper', Promise.resolve('string'))
    return proxyHelpers.customHelper('string_')
  }).toThrow(Error)
})
