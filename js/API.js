import { Add_carrinho } from "./livros.js"
const Livros_div = document.getElementById("livros_div")



async function getBooks(genero){
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genero}&langRestrict=en&maxResults=40`)
    .then(response=>response.json())
    .then(data=>{
        //console.log(data)
        data.items.forEach(book=>{
            const div = document.createElement("div")
            div.classList.add("livro")
            Livros_div.appendChild(div)

            const titulo = document.createElement("h3")
            titulo.textContent = book.volumeInfo.title
            div.appendChild(titulo)

            const imagem = document.createElement("img")
            imagem.src = book.volumeInfo.imageLinks.thumbnail
            div.appendChild(imagem)

            const preco = document.createElement("p")
            preco.textContent = "R$30,00"
            div.appendChild(preco)

            const button = document.createElement("button")
            button.innerText = "Adicionar ao carrinho"
            button.classList.add("Botao_carrinho")
            div.appendChild(button)
        })
    })
}

document.addEventListener("DOMContentLoaded",async function(){
    var Genero = localStorage.getItem("Genero") || ""
    await getBooks(Genero)
    Add_carrinho()
})