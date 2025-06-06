const speech = new SpeechSynthesisUtterance();
const select = document.querySelector('select');
const btn = document.querySelector('button');
const textArea = document.querySelector('#text-area');

let availableVoices = [];

function populateVoiceList() {
    availableVoices = window.speechSynthesis.getVoices();
    select.innerHTML = ''; // Clear existing options
    availableVoices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.textContent = voice.name;
        option.value = index;
        select.appendChild(option);
    });

    if (availableVoices.length > 0) {
        speech.voice = availableVoices[0];
    }
}

// Initial population and event listener for voices being loaded
populateVoiceList();
if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = populateVoiceList;
}

select.addEventListener('change', () => {
    speech.voice = availableVoices[select.value];
});

btn.addEventListener('click', () => {
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});

select.addEventListener('click', () => {
    select.classList.toggle('open');
});