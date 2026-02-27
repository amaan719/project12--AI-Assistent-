const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
recognition.lang = "en-US";

const btn = document.querySelector("#btn");
btn.addEventListener('click', ()=>{
    function speak(text){
        const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);
    }
    function handleCommands(command){

        if(command.includes("open youtube")){
            speak("opening youtube...")
            window.open("https://www.youtube.com", "_blank")
        } else if(command.includes("open facebook")){
            speak("opening facebook...")
            window.open("https://www.facebook.com", "_blank")
        } else if(command.includes("open instagram")){
            speak("opening instagram...")
            window.open("https://www.instagram.com", "_blank")
        }
        else{
            speak("search on google...")
        }
    }
    speak("Hello, how can i help you?")
    setTimeout(()=>{
        recognition.start()
    },2000);

    recognition.onresult = (event)=>{
        const command = event.results[0][0].transcript.toLowerCase();
        handleCommands(command);
    };
});