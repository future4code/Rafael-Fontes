const zipString = (input: string): string => {
    let zipInput = []
    let lastChar = input[0]
    let charsCount = 0

    for (let char of input) {
        if (char !== lastChar) {
           zipInput.push(lastChar + charsCount)
           lastChar = char
           charsCount = 1
        } else {
           charsCount++
        }
    }
    zipInput.push(lastChar + charsCount)

    let zippedString = ""
    for (let i=0;i<zipInput.length;i++) {
        zippedString = zippedString + zipInput[i]
    }

    if (zippedString.length > input.length) {
        return input
    } else {
        return zippedString
    }
}

console.log("1",zipString('aabbb')) // a2b3
console.log("2",zipString('aabcccccaaa')) // a2b1c5a3
console.log("3",zipString('accurate')) // accurate
console.log("4",zipString('escola')) // escola
console.log("5",zipString('accuraaaaaaaaaate')) // a1c2u1r1a10t1e1