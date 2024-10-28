const buttons = document.querySelectorAll(".Botao_carrinho")
const APIkey = "AIzaSyCIDbK7VcrZR8q67GMwbIBbQEENKKghzUg"
const Book_buttons = document.querySelectorAll(".book")


export function Add_carrinho(){
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
}
function Recuperar_livros(){
    Book_buttons.forEach(button=>{
        console.log(button)
        button.addEventListener("click",function(){
            const genero=this.getAttribute("data-genero")
            console.log(genero)
            localStorage.setItem("Genero",genero)
            
        })
    })
   
}

Recuperar_livros()
    