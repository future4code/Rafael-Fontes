// 1
// a.
// 10
// 50
// b. Uma variável receberia os valores retornados da função. Nada apareceria no console.

// 2
// a.
// "Darvas"
// "Caio"
// b.
// "Amanda"
// "Caio"

// 3
// Seleciona os números pares de uma array, eleva estes números ao quadrado e cria uma nova array com os resultados das operações matemáticas
// Nome sugerido: paresAoQuadrado

// 4
// a.
// function retornarFrase() {
//     return "Eu sou Rafael, tenho 42 anos, moro em São Paulo e sou estudante."
// }
// console.log(retornarFrase())

// b.
// function criarFrase(nome,idade,cidade,estudo) {
//     let estudante
//     if (estudo===true){
//         estudante="sou estudante"    
//     } else {
//         estudante="não sou estudante"    
//     }
//     return "Eu sou "+nome+" , tenho "+idade+" anos, moro em "+cidade+" e "+estudante+"."
// }

// const minhaFrase=criarFrase("Rafael",42,"São Paulo",true)
// console.log(minhaFrase)

// 5
// a
// let somarDoisNumeros = (a,b) => {
//     return a+b
// }

// num1=Number(prompt("Digite um número"))
// num2=Number(prompt("Digite outro número"))
// const resultado=somarDoisNumeros(num1,num2)
// console.log(resultado)

// b
// let compararNumeros = (a,b) => {
//     if (a>=b) {
//         return true
//     } else {
//         return false
//     }
// }

// num1=Number(prompt("Digite um número"))
// num2=Number(prompt("Digite outro número"))
// const resultado=compararNumeros(num1,num2)
// console.log(resultado)

// c
// let repetirFrase = (frase) => {
//     for (i=1;i<=10;i++) {
//         console.log(i,frase)
//     }
// }

// const frase=repetirFrase("Minha frase repetida")

// 6
// a
let medirArray = (arrayDeNumeros) => {
    return arrayDeNumeros.length
}

// b
let verificarParidade = (num) => {
    if (num%2===0){
        return true
    } else {
        return false
    }
}

// c
let contarPares = (arrayDeNumeros) => {
    let quantidadePares=0
    for(i=0;i<=arrayDeNumeros.length;i++) {
        if (arrayDeNumeros[i]%2===0){
            quantidadePares+=1
        }
    }
    return quantidadePares
}

// d
let contarPares2 = (arrayDeNumeros) => {
    let quantidadePares=0
    for(i=0;i<=arrayDeNumeros.length;i++) {
        if (verificarParidade(arrayDeNumeros[i])===true){
            quantidadePares+=1
        }
    }
    return quantidadePares
}

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let resultadoA = medirArray(array)
console.log(resultadoA)
let resultadoB = verificarParidade(array[0])
console.log(resultadoB)
let resultadoC = contarPares(array)
console.log(resultadoC)
let resultadoD = contarPares2(array)
console.log(resultadoD)
