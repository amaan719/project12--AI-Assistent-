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
        } else if(command.includes("open whatsapp")){
            speak("opening watsapp...")
            window.open("https://www.whatsapp.com", "_blank")
        } else if(command.includes("open spotify")){
            speak("opening spotify...")
            window.open("https://open.spotify.com", "_blank")
        } else if(command.includes("open google")){
            speak("opening google...")
            window.open("https://www.google.com", "_blank")
        } else if(command.includes("open github")){
            speak("opening github...")
            window.open("https://github.com", "_blank")
        } else if(command.includes("open mdn")){
            speak("opening mdn...")
            window.open("https://developer.mozilla.org", "_blank")
        } else if(command.includes("open stackoverflow")){
            speak("opening stackoverflow...")
            window.open("https://stackoverflow.com", "_blank")
        } else if(command.includes("open chatgpt")){
            speak("opening chatgpt...")
            window.open("https://chat.openai.com", "_blank")
        } else if(command.includes("open codepen")){
            speak("opening codepen...")
            window.open("https://codepen.io", "_blank")
        } else if(command.includes("open open vs code document")){
            speak("opening vs code document...")
            window.open("https://code.visualstudio.com/docs", "_blank")
        } else if(command.includes("open w3schools")){
            speak("opening w3schools...")
            window.open("https://www.w3schools.com", "_blank")
        } else if(command.includes("open coursera")){
            speak("opening coursera...")
            window.open("https://www.coursera.com", "_blank")
        } else if(command.includes("open netflix")){
            speak("opening netflix...")
            window.open("https://www.netflix.com", "_blank")
        } else if(command.includes("open prime video")){
            speak("opening prime video...")
            window.open("https://www.primevideo.com", "_blank")
        } else if(command.includes("open amazon")){
            speak("opening amazon...")
            window.open("https://www.amazon.in", "_blank")
        } else if(command.includes("open flipkart")){
            speak("opening flipkart...")
            window.open("https://www.flipkart.com", "_blank")
        } else if(command.includes("open myntra")){
            speak("opening mynta...")
            window.open("https://www.myntra.com", "_blank")
        } else if(command.includes("search cats on youtube")){
            speak("searching cats on youtube...")
            window.open("https://www.youtube.com/results?search_query=cats", "_blank")
        } else if(command.includes("search ai tools")){
            speak("searching ai tools...")
            window.open("https://www.google.com/search?q=ai+tools", "_blank")
        } else if(command.includes("open maps delhi")){
            speak("opening map delhi...")
            window.open("https://www.google.com/maps?q=delhi", "_blank")
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
