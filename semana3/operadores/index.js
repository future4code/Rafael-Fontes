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
// let idadeUsuario
// let idadeAmigo
// idadeUsuario = prompt ("Qual é a sua idade?")
// idadeAmigo = prompt("Qual é a idade do seu amigo(a)?")
// let comparativo
// comparativo = Number(idadeUsuario) > Number(idadeAmigo)
// console.log ("Sua idade é maior do que a do seu melhor amigo?", comparativo)
// let diferenca
// diferenca = Number(idadeUsuario) - Number(idadeAmigo)
// console.log (diferenca)

// 2 (Se inserido um número par, o resto é sempre 0. Se o número for ímpar, o resto vai ser sempre 1)
// let numero
// numero = prompt("Insira um número par")
// let divisao
// divisao = Number(numero)%2
// console.log(divisao)

// 3
// let listaDeTarefas
// listaDeTarefas=[0,1,2]
// listaDeTarefas[0] = prompt("Digite uma tarefa a ser realizada hoje")
// listaDeTarefas[1] = prompt("Digite uma tarefa a ser realizada hoje")
// listaDeTarefas[2] = prompt("Digite uma tarefa a ser realizada hoje")
// console.log(listaDeTarefas)
// let indice
// indice = prompt("Digite o indíce da tarefa realizada")
// listaDeTarefas.splice(indice,1)
// console.log(listaDeTarefas)

// 4
// let nomeDoUsuario
// let emailDoUsuario
// nomeDoUsuario = prompt("Qual é o seu nome?")
// emailDoUsuario = prompt("Qual é o seu e-mail?")
// console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!")


// Desafios Extras

// 1
// let kelvin
// let gfahren
// let gcelsius
// gfahren=77
// kelvin=(gfahren - 32)*5/9 + 273.15
// console.log("77°F --> " + kelvin + "K")
// gcelsius=80
// gfahren=(gcelsius)*9/5 + 32
// console.log("80°C --> " + gfahren + "°F")
// gcelsius=30
// gfahren=(gcelsius)*9/5 + 32
// kelvin=(gfahren - 32)*5/9 + 273.15
// console.log("30°C --> " + gfahren + "°F")
// console.log("30°C --> " + kelvin + "K")
// gcelsius=prompt("Digite um valor de temperatura em °C")
// gfahren=(gcelsius)*9/5 + 32
// kelvin=(gfahren - 32)*5/9 + 273.15
// console.log(gcelsius + "°C --> " + gfahren + "°F")
// console.log(gcelsius + "°C --> " + kelvin + "K")

// 2
// let consumo
// let valor
// const kWh=0.05
// consumo=280
// valor=consumo*kWh
// console.log("280kWh --> R$"+valor)
// let desconto
// desconto=prompt("Digite o valor da porcentagem de desconto")
// valor*=(1-(Number(desconto)/100))
// console.log("280kWh --> R$"+valor+" Com desconto")

// 3

// a
// let libra
// let quilo
// libra=20
// quilo=libra/2.205
// console.log("20lb equivalem a "+quilo+"kg")

// b
// let quilo
// let onca
// onca=10.5
// quilo=onca/35.274
// console.log("10.5oz equivalem a "+quilo+"kg")

// c
// let milha
// let metro
// milha=100
// metro=milha*1609
// console.log("100mi equivalem a "+metro+"m")

// d
// let pes
// let metro
// pes=50
// metro=pes/3.281
// console.log("50ft equivalem a "+metro+"m")

// e
// let gal
// let litro
// gal=103.56
// litro=gal*3.785
// console.log("103.56gal equivalem a "+litro+" l")

// f
// let xic
// let litro
// xic=450
// litro=xic/3.52
// console.log("450xic equivalem a "+litro+" l")

// g
// let gal
// let litro
// gal=prompt("Digite o valor em galões")
// litro=Number(gal)*3.785
// console.log(gal+" gal equivalem a "+litro+" l")