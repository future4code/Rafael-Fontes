const operation = process.argv[2]

const number1 = Number(process.argv[3])

const number2 = Number(process.argv[4])

if (operation === 'add') {
    console.log("Resposta: ",number1+number2) 
}

if (operation === 'sub') {
    console.log("Resposta: ",number1-number2) 
}

if (operation === 'mult') {
    console.log("Resposta: ",number1*number2) 
}

if (operation === 'div') {
    console.log("Resposta: ",number1/number2) 
}
