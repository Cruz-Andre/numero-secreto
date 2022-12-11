const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute)
}

function exibeChuteNaTela(fala) {
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <spa class="box">${fala}</span>
  `
}