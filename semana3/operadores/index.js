// Interpretação

// 1
// a.  false
// b.  false
// c.  true
// e.  boolean

// 2
// a.  undefined
// b.  null
// c.  11
// d.  3
// e.  3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
// f.  10


// Escrita

// 1
let idadeUsuario
let idadeAmigo
idadeUsuario = prompt ("Qual é a sua idade?")
idadeAmigo = prompt("Qual é a idade do seu amigo(a)?")
let comparativo
comparativo = Number(idadeUsuario) > Number(idadeAmigo)
console.log ("Sua idade é maior do que a do seu melhor amigo?", comparativo)
let diferenca
diferenca = Number(idadeUsuario) - Number(idadeAmigo)
console.log (diferenca)

// 2 (Se inserido um número par, o resto é sempre 0. Se o número for ímpar, o resto vai ser sempre 1)
let numero
numero = prompt("Insira um número par")
let divisao
divisao = Number(numero)%2
console.log(divisao)

// 3
let listaDeTarefas
listaDeTarefas=[0,1,2]
listaDeTarefas[0] = prompt("Digite uma tarefa a ser realizada hoje")
listaDeTarefas[1] = prompt("Digite uma tarefa a ser realizada hoje")
listaDeTarefas[2] = prompt("Digite uma tarefa a ser realizada hoje")
console.log(listaDeTarefas)
let indice
indice = prompt("Digite o indíce da tarefa realizada")
listaDeTarefas.splice(indice,1)
console.log(listaDeTarefas)

// 4
let nomeDoUsuario
let emailDoUsuario
nomeDoUsuario = prompt("Qual é o seu nome?")
emailDoUsuario = prompt("Qual é o seu e-mail?")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!")
