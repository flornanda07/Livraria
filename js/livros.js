const buttons = document.querySelectorAll(".Botao_carrinho")
const APIkey = "AIzaSyCIDbK7VcrZR8q67GMwbIBbQEENKKghzUg"
const Book_buttons = document.querySelectorAll(".book")


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
    