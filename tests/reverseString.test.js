const reverseString = require('../reverseString')

describe('reverseString', () => {
    test('return string reversed', () => {
        expect(reverseString("hello")).toBe('olleh')
    });
    test('return string reversed', () => {
        expect(reverseString("The dog")).toBe('god ehT')
    });
})