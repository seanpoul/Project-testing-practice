const capitalize = require('../capitalize')

describe('capitalize', () => {
    test('return first letter capitalized', () => {
        expect(capitalize("aa")).toBe('Aa');
    });
    test('return first letter capitalized', () => {
        expect(capitalize("two words")).toBe('Two words')
    });
});