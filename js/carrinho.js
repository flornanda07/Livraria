function ExibirCarrinho(){
    const CarrinhoDiv = document.querySelector(".Carrinho")
    CarrinhoDiv.innerText = ""

    var Carrinho = JSON.parse(localStorage.getItem("Carrinho")) || []

    if(Carrinho.length==0){
        const h1 = document.createElement("h1")
        h1.textContent = "Seu carrinho está vazio"
        h1.classList.add("carrinhoVazio")
        CarrinhoDiv.appendChild(h1)
    }

    else{
        Carrinho.forEach(item => {

            const Div_itens = document.createElement("div")
            const Titulo_item = document.createElement("h2")
            Titulo_item.textContent = item.Nome_livro + " Quantidade: " + item.Quantidade
            const Aumentar_btn = document.createElement("button")
            Aumentar_btn.innerHTML = '<span class="material-symbols-outlined"> add </span>'
            const Diminuir_btn = document.createElement("button")
            Diminuir_btn.innerHTML = '<span class="material-symbols-outlined"> remove </span>'
            const Remover_btn = document.createElement("button")
            Remover_btn.innerHTML = '<span class="material-symbols-outlined"> delete </span>'


            Div_itens.classList.add("Div_itens")
            Titulo_item.classList.add("TextoItens")
            CarrinhoDiv.appendChild(Div_itens)
            Div_itens.appendChild(Titulo_item)
            Div_itens.appendChild(Aumentar_btn)
            Div_itens.appendChild(Diminuir_btn)
            Div_itens.appendChild(Remover_btn)




        });
    }
}

function Atualizar_quantidade(Nome_item,Quantidade){
    var Carrinho = JSON.parse(localStorage.getItem("Carrinho")) || []
    var LivroExistente = Carrinho.findIndex((i)=>i.Nome_livro===Nome_item)
    if(LivroExistente != -1){
        Carrinho[LivroExistente].Quantidade += Quantidade
    }
    
}

ExibirCarrinho()