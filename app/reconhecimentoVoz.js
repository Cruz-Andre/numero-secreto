const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
  falaChute = evento.results[0][0].transcript
  exibeChuteNaTela(falaChute)
  verificaFalaChutePossuiValorValido(falaChute)
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <p>Você disse</p>
    <spa class="box">${chute}</span>
  `
}

recognition.addEventListener('end', () => recognition.start())