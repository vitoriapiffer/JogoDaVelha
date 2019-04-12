letra = "X";
var ganhador;

function joga(celula) {

    ganhador = celula;
    celulaclicada = document.getElementById(celula).innerHTML;
    if (celulaclicada == "X" || celulaclicada == "O") {
        alert("Este quadrado já foi escolhido!");
    } else {
        document.getElementById(celula).innerHTML = letra;
        if (letra == "X") {
            letra = "O";
        } else {
            letra = "X";
        }
        document.getElementById('jogador').innerHTML = letra;
    }
}

function verif() {

    c11 = document.getElementById('a1').innerHTML;
    c12 = document.getElementById('a2').innerHTML;
    c13 = document.getElementById('a3').innerHTML;
    c21 = document.getElementById('b1').innerHTML;
    c22 = document.getElementById('b2').innerHTML;
    c23 = document.getElementById('b3').innerHTML;
    c31 = document.getElementById('c1').innerHTML;
    c32 = document.getElementById('c2').innerHTML;
    c33 = document.getElementById('c3').innerHTML;
    if (((c11 != '') && (c12 != '') && (c13 != '')
        && (c11 == c12) && (c12 == c13)) || ((c11 != '') && (c22 != '')
            && (c33 != '') && (c11 == c22) && (c22 == c33)) || ((c11 != '')
                && (c21 != '') && (c31 != '') && (c11 == c21) && (c21 == c31)) || ((c21 != '')
                    && (c22 != '') && (c23 != '') && (c21 == c22) && (c22 == c23)) || ((c31 != '')
                        && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) || ((c12 != '') && (c22 != '')
                            && (c32 != '') && (c12 == c22) && (c22 == c32)) || ((c13 != '') && (c23 != '') && (c33 != '')
                                && (c13 == c23) && (c23 == c33)) || ((c31 != '') && (c22 != '') && (c13 != '') && (c31 == c22) && (c22 == c13))) {

        if (letra == "X") {
            letra = "O";
        } else {
            letra = "X";
        }

        alert('O jogador ' + letra + ' ganhou!');
        novo();
    }
}

function novo() {
    for (i = 1; i < 4; i++) {
        nomecelula = 'cel' + i
        document.getElementById(nomecelula).innerHTML = '';

    }
}

function reiniciar() {
    letra = "X";
    document.getElementById('jogador').innerHTML = letra;
    document.getElementById('a1').innerHTML = '';
    document.getElementById('a2').innerHTML = '';
    document.getElementById('a3').innerHTML = '';
    document.getElementById('b1').innerHTML = '';
    document.getElementById('b2').innerHTML = '';
    document.getElementById('b3').innerHTML = '';
    document.getElementById('c1').innerHTML = '';
    document.getElementById('c2').innerHTML = '';
    document.getElementById('c3').innerHTML = '';
}