function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, (raioAdd + 20), 'red');
    desenhaCirculo(x, y, (raioAdd + 10), 'white');
    desenhaCirculo(x, y, raioAdd, 'red');
}

function sorteiaPosicao(maximo) {

    return Math.floor(Math.random() * maximo);
}

function atualizaTela(){
    limpaTela();
    var xAleatorio = sorteiaPosicao(600);
    var yAleatorio = sorteiaPosicao(400);
    desenhaAlvo(xAleatorio, yAleatorio);

}
setInterval(atualizaTela, 1000);