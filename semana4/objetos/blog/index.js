let arraydeObjetos = []

function criarObjetos() {
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")
    const post = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
    }
    
    arraydeObjetos.push(post)

    document.getElementById("container-de-posts").innerHTML += `<p>${titulo.value}</p>`+`<p>${autor.value}</p>`+`<p>${conteudo.value}</p>`+`<br>`

    document.getElementById("titulo-post").value=""
    document.getElementById("autor-post").value=""
    document.getElementById("conteudo-post").value=""
}

