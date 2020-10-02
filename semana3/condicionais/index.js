// 1
// O código testa se a divisão do número inserido pelo usuário pelo número 2 é exata ou não
// Caso o número inserido pelo usuário seja par, a resposta será "Passou no teste". Caso seja ímpar, a resposta será "Não passou no teste"

// 2
// a) Informa o preço da fruta digitada pelo usuário
// b) 2.25
// c) 5

// 3
// a) Atribuindo o valor digitado pelo a uma variável do tipo número
// b) Se digitar 10, aparecerá a mensagem "Esse número passou no teste". Se digitar -10, esta mensagem não aparecerá.
// c) Sim, pois a variável foi iniciada dentro do escopo do if e chamada fora dele.

// 4
// let idade = Number(prompt("Qual é a sua idade?"))

// if (idade>=18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você NÃO pode dirigir")
// }

// 5
// let turno = prompt("Digite a letra inicial do seu turno: M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turno==='M') {
//     console.log("Bom Dia!")
// }
// if (turno==='V') {
//     console.log("Boa Tarde!")
// }
// if (turno==='N') {
//     console.log("Boa Noite!")
// }

// 6
// let turno = prompt("Digite a letra inicial do seu turno: M (matutino) ou V (Vespertino) ou N (Noturno)")
// turno=turno.toLowerCase()

// switch (turno) {
//     case 'm':
//         console.log("Bom Dia!")
//         break
//     case 'v':
//         console.log("Boa Tarde!")
//         break
//     case 'n':
//         console.log("Boa Noite!")
//         break
// }

// 7
// let generoDoFilme = prompt("Qual é o gênero do filme?").toLowerCase()
// let precoDoIngresso = Number(prompt("Qual é o preço do ingresso?"))

// if (generoDoFilme==='fantasia' && precoDoIngresso<=15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// Desafio
// 1
// let generoDoFilme = prompt("Qual é o gênero do filme?").toLowerCase()
// let precoDoIngresso = Number(prompt("Qual é o preço do ingresso?"))

// if (generoDoFilme==='fantasia' && precoDoIngresso<=15) {
//     console.log("Bom filme!")
//     let snack = prompt("Qual snack você quer comprar?")
//     console.log("... com "+snack)
// } else {
//     console.log("Escolha outro filme :(")
// }

// 2
const nomeCompleto = prompt("Qual é o seu nome completo?")
let tipoDeJogo = prompt("Digite IN para jogo Internacional ou DO para jogo Doméstico").toLowerCase()
let etapaDoJogo = prompt("Digite SF para Semi-final ou DT para Decisão de Terceiro Lugar ou FI para Final").toLowerCase()
let categoria = Number(prompt("Digite a categoria entre 1 e 4"))
let quantidade = Number(prompt("Digite a quantidade de ingressos"))

const valores = [1320,880,550,220,660,440,330,170,1980,1320,880,330]

let dolar = 4.10
let valorIngresso
let valorTotal
let moeda
let codigoIngresso

switch (etapaDoJogo) {
    case 'sf':
        etapaDoJogo='Semi-final'
        codigoIngresso=-1
        break;
    case 'dt':
        etapaDoJogo='Decisão de Terceiro Lugar'
        codigoIngresso=3
        break;
    case 'fi':
        etapaDoJogo='Final'
        codigoIngresso=7
        break;
    default:
        break;
}

valorIngresso=valores[codigoIngresso+categoria]

switch (tipoDeJogo) {
    case 'in':
        moeda='US$'
        tipoDeJogo='Internacional'
        valorIngresso/=dolar
        valorTotal=valorIngresso*quantidade
        break;
    case 'do':
        moeda='R$'
        tipoDeJogo='Doméstico'
        valorTotal=valorIngresso*quantidade
        break;
    default:
        break;
}

console.log("---Dados da compra---")
console.log("Nome do cliente: "+nomeCompleto)
console.log("Tipo do jogo: "+tipoDeJogo)
console.log("Etapa do jogo: "+etapaDoJogo)
console.log("Categoria: "+categoria)
console.log("Quantidade: "+quantidade+" ingressos")
console.log("---Valores---")
console.log("Valor do ingresso: "+moeda+valorIngresso)
console.log("Valor total: "+moeda+valorTotal)