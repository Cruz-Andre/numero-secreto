let chancesAdivinhar = 11
document.getElementById('chancesAdivinhar').innerHTML = chancesAdivinhar

function verificaFalaChutePossuiValorValido(valorFalado) {
  const numeroFalado = parseInt(valorFalado)
  console.log('Numero falado:', numeroFalado)

  if (chuteForInvalido(numeroFalado)) {
    elementoChute.innerHTML += '<p>...hum acho que você falou não foi um número!</p>'
    return
  }

  if (numeroForMaiorOuMenorQueValorPermitido(numeroFalado)) {
    elementoChute.innerHTML += `
      <div>O numero falado tem que ser entre ${menorValor} e ${maiorValor}!</div>
    `
    return
  }

  if (numeroFalado === numeroSecreto) {
    recognition.addEventListener('end', () => recognition.abort())
    document.body.style.justifyContent = 'center'
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  } else if (numeroFalado > numeroSecreto) {
    chancesAdivinhar--
    elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i></div>
    `
  } else {
    chancesAdivinhar--
    elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i></div>
    `
  }

  if (chancesAdivinhar === 0) {
    recognition.addEventListener('end', () => recognition.abort())
    document.body.style.justifyContent = 'center'
    document.body.innerHTML = `
      <h2 style="font-size: 3em;">Game Over!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  }
  console.log('Chances:', chancesAdivinhar)
  document.getElementById('chancesAdivinhar').innerHTML = `${chancesAdivinhar > 0 ? 'mais': ''} ${chancesAdivinhar}`
  document.getElementById('chances').innerHTML = `chance${chancesAdivinhar > 1 ? 's' : ''}`
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento => {
  if (evento.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})