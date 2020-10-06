function adicionarTarefa() {
    
    let tarefa = document.getElementById("tarefa")
        
    let diaEscolhido = document.getElementById("dias-semana")
    
    const novaTarefa = document.getElementById(diaEscolhido.value)
    novaTarefa.innerHTML += `<p>${tarefa.value}</p>`

    tarefa.value = ""

}



