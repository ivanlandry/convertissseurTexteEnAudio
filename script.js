const contenuText = document.getElementById('contenuText');
const boutonPlay = document.getElementById('boutonPlay');
const listeVoix = document.getElementById('listeVoix');

const chargerAudios = () =>{
    listeVoix.innerHTML="";

    const  voices = speechSynthesis.getVoices();

    voices.forEach((voice,index)=>{
        const option = document.createElement('option');
        option.textContent = `${voice.name} ${voice.lang}`;
        option.value = index;
        listeVoix.appendChild(option);
    });
}

chargerAudios();
if(speechSynthesis.onvoiceschanged!==undefined){
    speechSynthesis.onvoiceschanged = chargerAudios;
}

boutonPlay.addEventListener('click',()=>{
    const  speech = new SpeechSynthesisUtterance();
    const text = contenuText.value;
    const voixSelectionnerIndex = listeVoix.value;
    const voices = speechSynthesis.getVoices();

    if (voices.length>0 && voixSelectionnerIndex){
        speech.voice = voices[voixSelectionnerIndex];
    }
    speech.lang = ('fr-FR');
    speech.volume = 1;
    speech.rate = 1;
    speech.text = text;

    speechSynthesis.speak(speech);
});