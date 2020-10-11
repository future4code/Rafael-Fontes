// INTERPRETAÇÃO DE CÓDIGO

// 1. A função recebe um valor de 100 e multiplica pela cotação perguntada ao usuário. Retorna este valor para a variável meuDinheiro e a imprime no console.

// 2. A função recebe valores numéricos e calcula a rentabilidade conforme o tipo de investimento informado. Retorna estes valores calculados e os imprime no console. Como o tipo de investimento do segundo montante não existe no switch, a função vai retornar undefined.

// 3. Percorre o array numeros e acrescenta os números pares no array1 e os números ímpares no array2. Depois imoprime o tamanho de cada array no console.

// 4. Seleciona o maior e o menor número da array e os imprime no console.


// LÓGICA DE PROGRAMAÇÃO

// 1. 
// const pessoas = [
//     {nome: "Fulano", idade: 25, corfav: "amarelo"},
//     {nome: "Beltrano", idade: 33, corfav: "roxo"},
//     {nome: "Sicrano", idade: 47, corfav: "verde"}
// ]

// const nomes = (pessoa, idx, array) => { //Retorna o valor de nome do objeto
//     return pessoa.nome
// }
// const listaDeNomes = pessoas.map(nomes) //Mapeia a array de objetos e cria nova array somente com nomes


// const filtroCor = (pessoa) => { //Verifica se a cor favorita é amarelo e retorna true em caso afirmativo
//     if (pessoa.corfav === "amarelo") {
//         return true
//     }
// }
// const somenteAmarelo = pessoas.filter(filtroCor) //Mapeia a array de objetos, filtra somente as pessoas com a cor favorita da função acima e cria nova array


// pessoas.forEach((pessoa) => { //Altera para amarelo a cor favorita de todas as pessoas
//     pessoa.corfav = "amarelo"
// })


// 2. a)F b)F c)T d)T e)T

// 3. O código não faz a tarefa desejada. Irá ficar preso em um loop infinito pois não há um incremento no índice i. Além disso a condição do while deve ser apenas menor que a quantidade desejada.

// const quantidadePares = Number(prompt("Digite a quantidade"))
// for (i=0;i<quantidadePares;i++) {
//     console.log(i*2)3
// }

// 4. 
// const lado1 = Number(prompt("Digite o valor do lado 1"))
// const lado2 = Number(prompt("Digite o valor do lado 2"))
// const lado3 = Number(prompt("Digite o valor do lado 3"))

// function tipoTriangulo (a,b,c) {
//     if (a===b && b===c) {
//         return "Equilátero"
//     } else if (a===c || a===b || b===c) {
//         return "Isóceles"
//     } else {
//         return "Escaleno"
//     }
// }

// console.log(tipoTriangulo(lado1,lado2,lado3))

// 5
// const num1 = Number(prompt("Digite um número"))
// const num2 = Number(prompt("Digite outro número"))

// function compararNumeros(num1,num2) {
//     let diferenca
//     if(num1>num2){
//         console.log(`O número ${num1} é maior que ${num2}`)
//         diferenca=num1-num2
//         console.log("A diferença entre os números é",diferenca)
//     } else if (num2>num1) {
//         console.log(`O número ${num2} é maior que ${num1}`)
//         diferenca=num2-num1
//         console.log("A diferença entre os números é",diferenca)
//     } else {
//         console.log(`O número ${num1} é igual a ${num2}`)
//         console.log("A diferença entre os números é ZERO")
//     }
//     if (num1%num2 === 0){
//         console.log(`Os números ${num1} e ${num2} são divisíveis entre si`)
//     } else {
//         console.log(`Os números ${num1} e ${num2} NÃO são divisíveis entre si`)
//     }

// }

// compararNumeros(num1,num2)


// FUNÇÕES

// 1

// function segundosMaiorMenor (array) {
//     let maiorNum = array[0]
//     let menorNum = array[0]

//     for (let numero of array) {
//         if (numero > maiorNum) {
//             maiorNum = numero
//         }
//         if (numero < menorNum) {
//             menorNum = numero
//         }
//     }

//     const numerosFiltrado = array.filter((numero) => {
//         return (numero !== menorNum && numero !== maiorNum)
//     })

//     maiorNum = numeros[0]
//     menorNum = numeros[0]

//     for (let numero of numerosFiltrado) {
//         if (numero > maiorNum) {
//             maiorNum = numero
//         }
//         if (numero < menorNum) {
//             menorNum = numero
//         }
//     }
    
//     console.log(maiorNum)
//     console.log(menorNum)
// }

// const numeros = [25, 12, 55, 64, 121, 44, 11, 283, 31, 183, 1.1, -10, 1590]

// segundosMaiorMenor(numeros)

// 2
// let alerta = () => {
//     alert("Hello Labenu")
// }

// alerta()


// OBJETOS

// 1
// Arrays e objetos são variáveis que armazenam uma série de informações. A diferença é que objetos permitem guardar essas informações de forma categorizada.

// 2
// function criaRetangulo (lado1,lado2) {
//     console.log("A largura é", lado1)
//     console.log("A altura é", lado2)
//     console.log("O perímetro é",2*(lado1+lado2))
//     console.log("A área é",lado1*lado2)
// }

// l1=Number(prompt("Digite o valor do lado 1"))
// l2=Number(prompt("Digite o valor do lado 2"))

// const calcRetangulo = criaRetangulo(l1,l2)

// 3
// const filmesFavorito = {
//     nome: "Um Sonho de Liberdade",
//     ano: 1995,
//     diretor: "Frank Darabont",
//     ator1: "Tim Robbins",
//     ator2: "Morgan Freeman"
// }

// console.log(`Venha assistir ao filme ${filmesFavorito.nome}, de ${filmesFavorito.ano}, dirigido por ${filmesFavorito.diretor} e estrelado por ${filmesFavorito.ator1} e ${filmesFavorito.ator2}.`)

// 4
// function anonimizarPessoa(pessoa) {
//     const anonimo = {
//         ...pessoa,
//         nome: "ANÔNIMO"
//     }
//     console.log(anonimo)
// }

// const fulano = {
//     nome: "Fulano de Tal",
//     idade: 23,
//     email: "fulano@gmail.com",
//     endereco: "Rua Que Sobe e Desce, s/n"
// }

// console.log(fulano)
// anonimizarPessoa(fulano)


// FUNÇÕES DE ARRAY

// 1
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// // a
// const soAdultos = pessoas.filter((pessoa) => {
//     if (pessoa.idade>=20){
//         return pessoas
//     }
// })

// // b
// const soCriancas = pessoas.filter((pessoa) => {
//     if (pessoa.idade<20){
//         return pessoas
//     }
// })
 
// console.log(soAdultos)
// console.log(soCriancas)

// 2
// const array = [1, 2, 3, 4, 5, 6]

// // a
// const arrayX2 = []
// for (i=0; i<array.length; i++) {
//     arrayX2[i]=array[i]*2
// }
// console.log(arrayX2)

// // // b
// const arrayX3 = []
// for (i=0;i<array.length; i++) {
//     arrayX3[i]=array[i]*3
//     arrayX3[i]=`"${arrayX3[i]}"`
// }
// console.log(arrayX3)

// // // c
// const arrayParidade = []
// for (i=0;i<array.length;i++) {
//     if (array[i]%2===0) {
//         arrayParidade[i]=`"${array[i]} é par"`
//     } else {
//         arrayParidade[i]=`"${array[i]} é ímpar"`
//     }
// }
// console.log(arrayParidade)

// // 3
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// // a
// const permitidas = pessoas.filter((pessoa) => {
//     if (pessoa.altura>1.5 && (pessoa.idade>14 && pessoa.idade<60)) {
//         return true
//     }
// })
// console.log(permitidas)

// // b
// const naoPermitidas = pessoas.filter((pessoa) => {
//     if (pessoa.altura<=1.5 || (pessoa.idade<=14 || pessoa.idade>=60)) {
//         return true
//     }
// })
// console.log(naoPermitidas)

// 4
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const canceladas = consultas.filter ((consulta) => {
//     if (consulta.cancelada) {
//         return consulta
//     }
// })

// const confirmadas = consultas.filter ((consulta) => {
//     if (consulta.cancelada===false) {
//         return consulta
//     }
// })

// let emailCanceladas = []
// let emailConfirmadas = []
// let pronome
// let lembrar
// for (i=0; i<canceladas.length;i++) {
//     if (canceladas[i].genero==="masculino"){
//         pronome="Sr."
//         lembrar="lembrá-lo"
//     } else {
//         pronome="Sra."
//         lembrar="lembrá-la"
//     }
//     emailCanceladas.push(`Olá, ${pronome} ${canceladas[i].nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${canceladas[i].dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
// }

// for (i=0; i<confirmadas.length;i++) {
//     if (confirmadas[i].genero==="masculino"){
//         pronome="Sr."
//         lembrar="lembrá-lo"
//     } else {
//         pronome="Sra."
//         lembrar="lembrá-la"
//     }
//     emailConfirmadas.push(`Olá, ${pronome} ${confirmadas[i].nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${confirmadas[i].dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
// }

// console.log(emailConfirmadas)
// console.log(emailCanceladas)

// 5
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// const novosSaldos = (conta) => {
//     switch (conta.cliente) {
//         case "João":
//             conta.saldoTotal=400
//             break;
//         case "Paula":
//             conta.saldoTotal=6260
//             break;
//         case "Pedro":
//             conta.saldoTotal=-3340
//             break;
//         case "Luciano":
//             conta.saldoTotal=-1900
//             break;
//         case "Artur":
//             conta.saldoTotal=1300
//             break;
//         case "Soter":
//             conta.saldoTotal=1200
//             break;
//     }

// }
