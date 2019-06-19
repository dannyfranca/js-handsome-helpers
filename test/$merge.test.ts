import proxyHelpers from '../src/proxyHelpers'

test('merge functions', () => {
  expect(function () {
    proxyHelpers.$merge({
      customHelper(attr: string) {
        return attr + 'ok'
      },
      customHelper2(attr: string) {
        return attr + 'ok2'
      }
    })
    return [
      proxyHelpers.customHelper('string_'),
      proxyHelpers.customHelper2('string_')
    ]
  }()).toStrictEqual([
    'string_ok',
    'string_ok2'
  ])
})
