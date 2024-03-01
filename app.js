let listaDeNumerosSorteado = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNúmeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}
function mensagemTelaInicial() {
    exibirTextoNaTela('h1', 'Jogo de número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}
mensagemTelaInicial(); 

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela('p', 'o número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'o número secreto é maior!');
        }
        limparCampo();
    }
    tentativas ++;
}

function gerarNúmeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteado.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteado = [];
    }

    if (listaDeNumerosSorteado.includes(numeroEscolhido)) {
        return gerarNúmeroAleatorio();
    } else {
        listaDeNumerosSorteado.push(numeroEscolhido);
        console.log(listaDeNumerosSorteado);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroAleatorio = gerarNúmeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}