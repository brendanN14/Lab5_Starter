// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';


// isPhoneNumber TESTS
test('isPhoneNumber returns true for phone number with area code and dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns true for phone number without area code', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});

test('isPhoneNumber returns false for phone number with dots', () => {
  expect(isPhoneNumber('123.456.7890')).toBe(false);
});

test('isPhoneNumber returns false for letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail tests
test('isEmail returns true for valid email', () => {
  expect(isEmail('student@ucsd.edu')).toBe(true);
});

test('isEmail returns true for another valid email', () => {
  expect(isEmail('brendan@gmail.com')).toBe(true);
});

test('isEmail returns false without at symbol', () => {
  expect(isEmail('student.ucsd.edu')).toBe(false);
});

test('isEmail returns false with domain longer than 3 letters', () => {
  expect(isEmail('student@example.school')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword returns true for valid password with letters and numbers', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('isStrongPassword returns true for valid password with underscore', () => {
  expect(isStrongPassword('Pass_word1')).toBe(true);
});

test('isStrongPassword returns false if it starts with a number', () => {
  expect(isStrongPassword('1Password')).toBe(false);
});

test('isStrongPassword returns false if it has a special character', () => {
  expect(isStrongPassword('Password!')).toBe(false);
});

// isDate test
test('isDate returns true for valid date with two digit month and day', () => {
  expect(isDate('12/25/2026')).toBe(true);
});

test('isDate returns true for valid date with one digit month and day', () => {
  expect(isDate('1/5/2026')).toBe(true);
});

test('isDate returns false for date with dashes', () => {
  expect(isDate('12-25-2026')).toBe(false);
});

test('isDate returns false for year with two digits', () => {
  expect(isDate('12/25/26')).toBe(false);
});

// isHexColor Tests
test('isHexColor returns true for valid six character hex color with hashtag', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('isHexColor returns true for valid three character hex color without hashtag', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('isHexColor returns false for invalid hex letters', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});

test('isHexColor returns false for wrong length', () => {
  expect(isHexColor('#FFFF')).toBe(false);
});