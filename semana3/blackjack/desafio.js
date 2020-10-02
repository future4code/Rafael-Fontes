/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")

let usuario=0
let computador=0
let cartasUsuario=[]
let cartasComputador=[]
let novaCarta

if(confirm("Quer iniciar uma nova rodada?")) {
   let carta1 = comprarCarta();
   let carta2 = comprarCarta();
   let carta3 = comprarCarta();
   let carta4 = comprarCarta();
   
   usuario=carta1.valor+carta2.valor
   computador=carta3.valor+carta4.valor
      
   if (usuario===22){ // Verifica se as duas cartas do usuário são A e sorteia novas se necessário
      while (usuario===22) {
         carta1 = comprarCarta();
         carta2 = comprarCarta();
         usuario=carta1.valor+carta2.valor
      }
   }
   if (computador===22) { // Verifica se as duas cartas do computador são A e sorteia novas se necessário
      while (computador===22) {
         carta3 = comprarCarta();
         carta4 = comprarCarta();
         computador=carta3.valor+carta4.valor
      }
   }

   cartasUsuario.push(carta1.texto,carta2.texto)  
   cartasComputador.push(carta3.texto,carta4.texto)
   
   while (usuario<=21){ //Pergunta ao usuário se deseja comprar nova carta enquanto sua pontuação não exceder 21
      if (confirm(
      "Suas cartas são "+ cartasUsuario +". A carta revelada do computador é "+ carta3.texto +"." +
      "\n"+  // \n faz pular a linha
      "Deseja comprar mais uma carta?"
       )) {
         novaCarta=comprarCarta()
         cartasUsuario.push(novaCarta.texto)
         usuario += novaCarta.valor
      } else {
         break
      }
   }

   if (usuario<=21){ // Computador compra novas cartas somente se usuario não excedeu 21 pontos
      while(computador<=21 && computador<=usuario){ // Computador compra nova carta se possuir pontuação menor ou igual ao usuário e não exceder 21 pontos
         novaCarta=comprarCarta()
         cartasComputador.push(novaCarta.texto)
         computador += novaCarta.valor
      }
   }

   console.log("Usuário - cartas: "+cartasUsuario+" - pontuação "+usuario)
   console.log("Computador - cartas: "+cartasComputador+" - pontuação "+computador)

   if (usuario===computador || (usuario>21 && computador>21)) {
      console.log("Empate!")
   }
   if (computador>21 && usuario<=21){
      console.log("O usuário ganhou!")
   }
   if (usuario>21 && computador<=21) {
      console.log("O computador ganhou!")
   }
   if (usuario>computador && usuario<=21) {
      console.log("O usuário ganhou!")
   }
   if (computador>usuario && computador<=21) {
      console.log("O computador ganhou!")
   }

} else {
   console.log("O jogo acabou")
}
