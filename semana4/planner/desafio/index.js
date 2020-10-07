function adicionarTarefa() {
    
    let tarefa = document.getElementById("tarefa")
    
    let diaEscolhido = document.getElementById("dias-semana")
    
    const novaTarefa = document.getElementById(diaEscolhido.value)
    novaTarefa.innerHTML += `<p onclick='removerTarefa()' id='nova-tarefa'>${tarefa.value}</p>`

    if (tarefa.value==="") {
        alert("Digite uma tarefa válida")
    }

    tarefa.value = ""  
}

function removerTarefa() {
    
    let tarefa = document.getElementById("nova-tarefa")
    tarefa.style.textDecoration="line-through"
    console.log(tarefa)
}

function limparTarefas() {
    
    let diaDaSemana = ["domingo","segunda","terca","quarta","quinta","sexta","sabado"]
    for (i=0;i<=diaDaSemana.length;i++)
    document.getElementById(diaDaSemana[i]).innerHTML=""

}

