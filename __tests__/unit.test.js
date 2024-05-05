// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Test isPhoneNumber

test('isPhoneNumber - max numbers', () => {
	expect(isPhoneNumber("999-999-9999")).toBe(true);
});

test('isPhoneNumber - with parenthesis', () => {
	expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('isPhoneNumber - containing letter', () => {
	expect(isPhoneNumber("123-abc-4567")).toBe(false);
});

test('isPhoneNumber - 9 numbers', () => {
	expect(isPhoneNumber("123-456-789")).toBe(false);
});

// Test isEmail

test('isEmail - example email', () => {
	expect(isEmail("user@example.com")).toBe(true);
});

test('isEmail - long email', () => {
	expect(isEmail("thisismyusername@thisismydomain.com")).toBe(true);
});

test('isEmail - no user', () => {
	expect(isEmail("@email.com")).toBe(false);
});

test('isEmail - invalid domain', () => {
	expect(isEmail("user@pancakes")).toBe(false);
});

// Test isStrongPassword

test('isStrongPassword - very strong', () => {
	expect(isStrongPassword("T_TN_toyqw87da")).toBe(true);
});

test('isStrongPassword - strong', () => {
	expect(isStrongPassword("T34t9as")).toBe(true);
});

test('isStrongPassword - no numbers', () => {
	expect(isStrongPassword("thisismypasswordverycool")).toBe(false);
});

test('isStrongPassword - small', () => {
	expect(isStrongPassword("abc")).toBe(false);
});

// Test isDate

test('isDate on random date', () => {
	expect(isDate("12/04/1945")).toBe(true);
});

test('isDate on date + other stuff', () => {
	expect(isDate("12/04/1945 hello")).toBe(false);
});

test('isDate on max numbers', () => {
	expect(isDate("99/99/9999")).toBe(true);
});

test('isDate on dashes', () => {
	expect(isDate("00-00-0000")).toBe(false);
});

// Test isHexColor

test('isHexColor on white', () => {
	expect(isHexColor("#FFF")).toBe(true);
});

test('isHexColor on black', () => {
	expect(isHexColor("#000000")).toBe(true);
});

test('isHexColor on color with alpha', () => {
	expect(isHexColor("#FF00FFAA")).toBe(false);
});

test('isHexColor on white with other stuff', () => {
	expect(isHexColor("#FFF ok")).toBe(false);
});