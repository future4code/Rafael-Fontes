// Interpretação
// 1
// a = 10
// b = 10

// console.log(b)

// b = 5
// console.log(a, b)

// Resposta
// 10
// 10 5


// 2
// a = 10
// b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

// Resposta
// 10 10 10

// Escrita
// 1
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// O typeof retornou undefined pois as variáveis ainda não foram atribuídas

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// O typeof retornou string para as variáveis pois foram atribuídos valores pelo usuário através do prompt
// Se nenhum valor é preenchido retorna object e null é atribuído à variável

console.log(`Olá ${nome}, você tem ${idade} anos.`)

// 2
let cidade
let cor
let comida
let bebida
let passatempo

cidade = prompt("Qual é a sua cidade?")
cor = prompt("Qual é a sua cor preferida?")
comida = prompt("Qual é a sua comida preferida?")
bebida = prompt("Qual é a sua bebida preferida?")
passatempo = prompt("Qual é o seu passatempo predileto?")

console.log("1. Qual é a sua cidade?")
console.log(`Resposta: ${cidade}`)
console.log("2. Qual é a sua cor preferida?")
console.log(`Resposta: ${cor}`)
console.log("3. Qual é a sua comida preferida?")
console.log(`Resposta: ${comida}`)
console.log("4. Qual é a sua bebida preferida?")
console.log(`Resposta: ${bebida}`)
console.log("5. Qual é o seu passatempo predileto?")
console.log(`Resposta: ${passatempo}`)

// 3
let comidasPreferidas = ["Feijoada","Estrogonofe","Cassoulet","Esfiha","Caqui"]
console.log(comidasPreferidas)
console.log("Essas são minhas comidas preferidas")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

comida = prompt("Qual é a sua comida preferida?")
comidasPreferidas[1] = comida
console.log(comidasPreferidas)

// 4
let arrayPerguntas = ["Vai chover hoje?","Você mora em apartamento?","Você usa terno para trabalhar?"]
let arrayRespostas = [true,true,false]

console.log(arrayPerguntas[0],arrayRespostas[0])
console.log(arrayPerguntas[1],arrayRespostas[1])
console.log(arrayPerguntas[2],arrayRespostas[2])
