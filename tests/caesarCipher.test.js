const caesarCipher = require('../caesarCipher')

describe('caesarCipher', () => {
    test('encrypt phrase', () => {
        expect(caesarCipher("encoded words",1)).toBe("fodpefe xpset")
    })
})