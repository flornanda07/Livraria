const buttons = document.querySelectorAll(".Botao_carrinho")
const APIkey = "AIzaSyCIDbK7VcrZR8q67GMwbIBbQEENKKghzUg"
const Livros_div = document.getElementById("livros_div")

//console.log(buttons)

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        const Titulo = this.closest(".livro").querySelector("h3").textContent
        const Preco = this.closest(".livro").querySelector("p").textContent
       
         const Item = {Nome_livro:Titulo,Quantidade:1,Valor:Preco}

         var Carrinho = JSON.parse(localStorage.getItem("Carrinho")) || []
         
         var LivroExistente = Carrinho.findIndex((i)=>i.Nome_livro===Titulo)
         console.log(LivroExistente);

         if (LivroExistente==-1){
            Carrinho.push(Item)
         }
         

        localStorage.setItem("Carrinho",JSON.stringify(Carrinho))
       

    })
})

function Recuperar_livros(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:romance&orderBy=relevance&key=${APIkey}`)
    .then(response=>response.json())
    .then(data=>{
        //console.log(data)
        data.items.forEach(book=>{
            console.log(book.volumeInfo.title)
            const div = document.createElement("div")
            div.classList.add("livro")
            Livros_div.appendChild(div)

            const titulo = document.createElement("h3")
            titulo.textContent = book.volumeInfo.title
            div.appendChild(titulo)

            const imagem = document.createElement("img")
            imagem.src = book.volumeInfo.imageLinks.thumbnail
            div.appendChild(imagem)

            /*const preco = document.createElement("p")
            preco.textContent = "R$" + book.volumeInfo.ListPrice?.amount || "0,00"
            div.appendChild(preco)*/
        })
    })
}
    Recuperar_livros()
    