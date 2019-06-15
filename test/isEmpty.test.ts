import Helpers from '../src/index'

test('undefined true', () => {
  expect(Helpers.isEmpty()).toBe(true)
  expect(Helpers.isEmpty(undefined)).toBe(true)
  expect(Helpers.isEmpty(null)).toBe(true)
})

test('string true', () => {
  expect(Helpers.isEmpty('')).toBe(true)
})

test('string false', () => {
  expect(Helpers.isEmpty('s')).toBe(false)
})

test('array true', () => {
  expect(Helpers.isEmpty([])).toBe(true)
})

test('array false', () => {
  expect(Helpers.isEmpty([0])).toBe(false)
  expect(Helpers.isEmpty([])).toBe(true)
})

test('object true', () => {
  expect(Helpers.isEmpty({})).toBe(true)
  expect(Helpers.isEmpty([])).toBe(true)
})

test('object false', () => {
  expect(Helpers.isEmpty({key: ''})).toBe(false)
})

test('number true', () => {
  expect(Helpers.isEmpty(0)).toBe(true)
  expect(Helpers.isEmpty(NaN)).toBe(true)
  expect(Helpers.isEmpty(Infinity)).toBe(true)
})

test('object false', () => {
  expect(Helpers.isEmpty(-1)).toBe(false)
})
