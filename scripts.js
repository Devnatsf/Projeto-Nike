
const imagem = document.querySelector(".tenis")
const fundo = document.querySelector(".fundo-verde")

function trocarImagem(endereco) {
    imagem.src = endereco
    imagem.classList.add("trocar-efeito")

    setTimeout(() => {
        imagem.classList.remove("trocar-efeito")
    },600);

}

function trocarCor(cor) {
    fundo.style.background = cor
}

