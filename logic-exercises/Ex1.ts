const missingNum = (array:number[]) => {

    const sortedArray = array.sort()
    let lastNumber = sortedArray[0]
    for (let i=1; i<sortedArray.length; i++) {
        if (sortedArray[i]!==lastNumber+1){
            return ("The missing number is " + (lastNumber + 1))
        } else {
            lastNumber = sortedArray[i]
        }
    }
    return "There is no missing number"
}

console.log(missingNum([3,4,7,5,9,8]))