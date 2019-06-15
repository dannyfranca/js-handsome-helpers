import Helpers from '../src/index'
import {Function} from "@babel/types";

test('strings', () => {
  expect(Helpers.typeValue('asd', String)).toBe('asd')
  expect(Helpers.typeValue('', String)).toBe('')
  expect(Helpers.typeValue(1, String)).toBe('1')
  expect(Helpers.typeValue({}, String)).toBe('')
  expect(Helpers.typeValue([1, 3], String)).toBe('')
})

test('number', () => {
  expect(Helpers.typeValue(10, Number)).toStrictEqual(10)
  expect(Helpers.typeValue('10', Number)).toStrictEqual(10)
  expect(Helpers.typeValue('', Number)).toStrictEqual(0)
  expect(Helpers.typeValue({}, Number)).toStrictEqual(0)
  expect(Helpers.typeValue([], Number)).toStrictEqual(0)
  expect(Helpers.typeValue([3, 4], Number)).toStrictEqual(0)
})

test('boolean', () => {
  expect(Helpers.typeValue(true, Boolean)).toBe(true)
  expect(Helpers.typeValue(false, Boolean)).toBe(false)
  expect(Helpers.typeValue(0, Boolean)).toBe(false)
  expect(Helpers.typeValue(10, Boolean)).toBe(true)
  expect(Helpers.typeValue('0', Boolean)).toBe(true)
  expect(Helpers.typeValue([], Boolean)).toBe(true)
  expect(Helpers.typeValue({}, Boolean)).toBe(true)
})

test('arrays', () => {
  expect(Helpers.typeValue([1, 2], Array)).toStrictEqual([1, 2])
  expect(Helpers.typeValue({x: 'foo', y: 'bar'}, Array)).toStrictEqual(['foo', 'bar'])
  expect(Helpers.typeValue('', Array)).toStrictEqual([])
  expect(Helpers.typeValue(1, Array)).toStrictEqual([])
  expect(Helpers.typeValue({}, Array)).toStrictEqual([])
})

test('objects', () => {
  expect(Helpers.typeValue({foo: 'bar'}, Object)).toStrictEqual({foo: 'bar'})
  expect(Helpers.typeValue([1, 3], Object)).toStrictEqual({0: 1, 1: 3})
  expect(Helpers.typeValue('', Object)).toStrictEqual({})
  expect(Helpers.typeValue([], Object)).toStrictEqual({})
})

test('function', () => {
  expect(Helpers.typeValue({foo: 'bar'}, Function)()).toBe(undefined)
})

test('any', () => {
  expect(Helpers.typeValue({foo: 'bar'}, Promise)).toBe(undefined)
})
