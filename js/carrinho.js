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
}

ExibirCarrinho()