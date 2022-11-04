function analyzeArray(array) {
    let object = {}
    let sum = 0
    let max = Math.max(...array)
    let min = Math.min(...array)

    sum = array.reduce((prev, curr) => prev + curr, 0)
    let average = sum / (array.length)

    let length = array.length

    object.average = average
    object.min = min
    object.max = max
    object.length = length

    return object
}

module.exports = analyzeArray