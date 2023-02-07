function verificaChute(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor inválido </div>';
    }

    if (maiorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div> Valor inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>`;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function maiorQuePermitido(numero) {
    return numero > maiorValor || numero << menorValor;
}