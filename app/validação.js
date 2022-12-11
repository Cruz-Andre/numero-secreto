function verificaFalaChutePossuiValorValido(valorFalado) {
  const numero = parseInt(valorFalado)
  console.log(numero)

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>...hum acho que você falou não foi um número!</div>'
    return
  }
  
  if (numeroForMaiorOuMenorQueValorPermitido(numero)) {
    elementoChute.innerHTML += `
      <div>O numero falado tem que ser entre ${menorValor} e ${maiorValor}!</div>
    `
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i></div>
    `
  }

}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}