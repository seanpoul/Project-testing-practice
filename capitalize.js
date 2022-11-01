function capitalize(string) {
    let capital = string[0].toUpperCase()
    for (let i = 1; i < string.length; i++) {
        capital += string[i]
    }
    return capital
}