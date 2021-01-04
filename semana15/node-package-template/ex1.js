const yourName = process.argv[2]

const yourAge = Number(process.argv[3])

const newAge = yourAge + 7

console.log(`Olá, ${yourName}! Você tem ${yourAge} anos.`)

console.log(`Olá, ${yourName}! Você tem ${yourAge} anos. Em sete anos você terá ${newAge}`)