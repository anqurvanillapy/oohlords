import * as b from './booleans'

const isTrue = a => a(42)(69) === 42

test('TRUE type', () => {
  expect(isTrue(b.TRUE)).toBeTruthy()
})

test('FALSE type', () => {
  expect(isTrue(b.FALSE)).toBeFalsy()
})

test('AND operator truth table', () => {
  expect(isTrue(b.AND(b.FALSE)(b.FALSE))).toBeFalsy()
  expect(isTrue(b.AND(b.TRUE)(b.FALSE))).toBeFalsy()
  expect(isTrue(b.AND(b.FALSE)(b.TRUE))).toBeFalsy()
  expect(isTrue(b.AND(b.TRUE)(b.TRUE))).toBeTruthy()
})

test('OR operator truth table', () => {
  expect(isTrue(b.OR(b.FALSE)(b.FALSE))).toBeFalsy()
  expect(isTrue(b.OR(b.TRUE)(b.FALSE))).toBeTruthy()
  expect(isTrue(b.OR(b.FALSE)(b.TRUE))).toBeTruthy()
  expect(isTrue(b.OR(b.TRUE)(b.TRUE))).toBeTruthy()
})

test('NOT operator', () => {
  expect(isTrue(b.NOT(b.FALSE))).toBeTruthy()
  expect(isTrue(b.NOT(b.TRUE))).toBeFalsy()
})

test('XOR operator truth table', () => {
  expect(isTrue(b.XOR(b.FALSE)(b.FALSE))).toBeFalsy()
  expect(isTrue(b.XOR(b.TRUE)(b.FALSE))).toBeTruthy()
  expect(isTrue(b.XOR(b.FALSE)(b.TRUE))).toBeTruthy()
  expect(isTrue(b.XOR(b.TRUE)(b.TRUE))).toBeFalsy()
})

test('IF predicate', () => {
  expect(isTrue(b.IF(b.FALSE)(b.TRUE)(b.FALSE))).toBeFalsy()
  expect(isTrue(b.IF(b.TRUE)(b.TRUE)(b.FALSE))).toBeTruthy()
})
