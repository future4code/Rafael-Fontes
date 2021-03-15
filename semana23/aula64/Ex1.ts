const checkOneEdit = (inputA: string, inputB: string): boolean => {

    if ((inputA.length-inputB.length)>1 || (inputB.length-inputA.length)>1) {
        return false
    } else {
        if (inputA.includes(inputB) || inputB.includes(inputA)) {
            return true
        } else {
            let charDiff = 0
            for (let i=0; i<inputA.length; i++) {
                if (inputA[i]!=inputB[i]) {
                    charDiff++
                }
            }
            if (charDiff <=1) {
                return true
            } else {
                return false
            }

        }
    }
}

console.log("1",checkOneEdit('banan', 'banana'))
console.log("2",checkOneEdit('bananak', 'banana'))
console.log("3",checkOneEdit('panana', 'banana'))
console.log("4",checkOneEdit('bananaaa', 'banana'))
console.log("5",checkOneEdit('amoraa', 'banana'))
