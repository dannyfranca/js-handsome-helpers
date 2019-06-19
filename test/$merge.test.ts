import Helpers from '../src/index'

test('merge functions', () => {
  expect(function () {
    Helpers.$merge({
      customHelper(attr: string) {
        return attr + 'ok'
      },
      customHelper2(attr: string) {
        return attr + 'ok2'
      }
    })
    return [
      Helpers.customHelper('string_'),
      Helpers.customHelper2('string_')
    ]
  }()).toStrictEqual([
    'string_ok',
    'string_ok2'
  ])
})
