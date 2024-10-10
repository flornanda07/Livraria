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
            Titulo_item.innerHTML = `${item.Nome_livro} <br> Quantidade: ${item.Quantidade}`
            const Div_botoes = document.createElement ("div")


            const Aumentar_btn = document.createElement("button")
            Aumentar_btn.innerHTML = '<span class="material-symbols-outlined"> add </span>'
            Aumentar_btn.onclick = ()=> Atualizar_quantidade(item.Nome_livro,1)

         const Diminuir_btn = document.createElement("button")
            Diminuir_btn.innerHTML = '<span class="material-symbols-outlined"> remove </span>'
            Diminuir_btn.onclick = ()=> Atualizar_quantidade(item.Nome_livro,-1)

            const Remover_btn = document.createElement("button")
            Remover_btn.innerHTML = '<span class="material-symbols-outlined"> delete </span>'
            Remover_btn.onclick = ()=> Atualizar_quantidade(item.Nome_livro,-item.Quantidade)


            Div_itens.classList.add("Div_itens")
            Titulo_item.classList.add("TextoItens")
            Aumentar_btn.classList.add("Botoes_carrinho")
            Diminuir_btn.classList.add("Botoes_carrinho")
            Remover_btn.classList.add("Botoes_carrinho")
            Div_botoes.classList.add("Div_botoes")
            CarrinhoDiv.appendChild(Div_itens)
            Div_itens.appendChild(Titulo_item)
            Div_itens.appendChild(Div_botoes)
            Div_botoes.appendChild(Aumentar_btn)
            Div_botoes.appendChild(Diminuir_btn)
            Div_botoes.appendChild(Remover_btn)


            




        });
    }
}

function Atualizar_quantidade(Nome_item,Quantidade){
    //Recupera dados no local storage (memória do navegador) ou cria uma matriz vazia 
    var Carrinho = JSON.parse(localStorage.getItem("Carrinho")) || []
    //Verificar se já tem aquele livro (nome do livro) e retorna o índice ou posição em que esse livro está
    var LivroExistente = Carrinho.findIndex((i)=>i.Nome_livro===Nome_item)
    //se o índice for igual a -1, o livro não foi encontrado no carrinho
    if(LivroExistente != -1){
        Carrinho[LivroExistente].Quantidade += Quantidade
        if(Carrinho[LivroExistente].Quantidade<=0){
            Carrinho.splice(LivroExistente,1)

        }
    }
    localStorage.setItem("Carrinho",JSON.stringify(Carrinho))
     window.location.href="carrinho.html"
    
}

ExibirCarrinho()