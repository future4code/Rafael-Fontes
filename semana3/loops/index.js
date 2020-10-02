// 1
// console.log(valor)=5

// 2
// a. Imprime todos os itens maiores que 18.
// b. Para acessar o índice usando o for...of é necessário utilizar outra variável incremental como suporte.

// 3
// a
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of array){
//     console.log(numero)
// }

// b
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of array){
//     numero /= 10
//     console.log(numero)
// }

// c
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray=[]

// for (let numero of array){
//     if ((numero%2) === 0) {
//         novoArray.push(numero)
//     }
// }
// console.log(novoArray)

// d
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayFrases = []
// let i=0
// for (let numero of array){
//     arrayFrases.push("O elemento de índice "+i+" é "+numero)
//     i++
// }
// console.log(arrayFrases)

// e
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let valorMin = array[0]
// let valorMax = array[0]
// for (let numero of array){
//     if (numero>valorMax) {
//         valorMax=numero
//     }
//     if (numero<valorMin) {
//         valorMin=numero
//     }
// }
// console.log("O maior número é "+valorMax+" e o menor é "+valorMin)

// Desafios
// 1
// 0000

// 2
// let numeroPensado = Number(prompt("Digite um número pensado"))
// console.log ("Vamos jogar!")
// let acerto=0
// for (let tentativas=1; acerto<1; tentativas++) {
//     let numeroChutado = Number(prompt("Qual é o número pensado?"))
//     if (numeroPensado>numeroChutado) {
//         console.log("O número chutado foi: "+numeroChutado)
//         console.log("Errrrrrrou, é maior")
//     }
//     if (numeroPensado<numeroChutado) {
//         console.log("O número chutado foi: "+numeroChutado)
//         console.log("Errrrrrrou, é menor")
//     }
//     if (numeroPensado===numeroChutado) {
//         console.log("O número chutado foi: "+numeroChutado)
//         console.log("Acertou")
//         console.log("O número de tentativas foi: "+tentativas)
//         acerto=1
//     }
// }

// 3 A alteração foi relativamente simples, a única mudança foi gerar o número aleatoriamente
let numeroPensado = Math.floor((Math.random() * 100) + 1)
console.log ("Vamos jogar!")
let acerto=0
for (let tentativas=1; acerto<1; tentativas++) {
    let numeroChutado = Number(prompt("Qual é o número pensado?"))
    if (numeroPensado>numeroChutado) {
        console.log("O número chutado foi: "+numeroChutado)
        console.log("Errrrrrrou, é maior")
    }
    if (numeroPensado<numeroChutado) {
        console.log("O número chutado foi: "+numeroChutado)
        console.log("Errrrrrrou, é menor")
    }
    if (numeroPensado===numeroChutado) {
        console.log("O número chutado foi: "+numeroChutado)
        console.log("Acertou")
        console.log("O número de tentativas foi: "+tentativas)
        acerto=1
    }
}


