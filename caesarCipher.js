function caesar(string, cipher) {
    let codedWord = ""
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u'
        , 'v', 'w', 'x', 'y', 'z']
    let key = cipher

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (string[i] === ' ') {
                codedWord += ' '
                break
            }
            if (string[i] === alphabet[j]) {
                if ((j + key) > alphabet.length - 1) {
                    codedWord += alphabet[(j + key) - alphabet.length]
                    break;
                }
                codedWord += alphabet[j + key]
                break;
            }
        }
    }
    return codedWord
}

module.exports = caesar