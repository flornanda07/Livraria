const PerguntaFaq = document.querySelectorAll(".perguntas-faq")
PerguntaFaq.forEach(button => {
    button.addEventListener("click", () => {
        const DivResposta = button.nextElementSibling
        if (DivResposta.style.display === "block") {
            DivResposta.style.display = "none"
        }

        else { DivResposta.style.display = "block" }
    })
})