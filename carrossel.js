let indexAtual = 0;
const imagem = document.querySelectorAll("#carrossel-container img")
const totalImagem = imagem.length

function mostrarImagem(index) {

    for (let i = 0; i < totalImagem; i++) {

        if (i === index) {
            imagem[i].classList.add('ativo'); 
        } 

        else {
            imagem[i].classList.remove('ativo'); 
        }

    }
}


function proximaImagem() {
    indexAtual = (indexAtual + 1) % totalImagem
    mostrarImagem(indexAtual)
}

function imagemAnterior() {
    indexAtual = (indexAtual - 1 + totalImagem) % totalImagem
    mostrarImagem(indexAtual)
}

mostrarImagem(indexAtual);

document.getElementById("passar").addEventListener('click', proximaImagem)
document.getElementById("voltar").addEventListener('click', imagemAnterior)