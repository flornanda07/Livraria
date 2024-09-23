const buttons = document.querySelectorAll(".Botao_carrinho")
//console.log(buttons)

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        const Titulo = this.closest(".livro").querySelector("h3").textContent
        const Preco = this.closest(".livro").querySelector("p").textContent
       
         const Item = {Nome_livro:Titulo,Quantidade:1,Valor:Preco}
         localStorage.setItem("Carrinho",JSON.stringify(Item))
       

    })
})

