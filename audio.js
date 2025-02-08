const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
track.connect(audioContext.destination);


let isAudioPlaying = true;

window.addEventListener("keydown", (e) => {
    if (e.defaultPrevented) {
        return; // Do nothing if event already handled
    }

    if (e.code === "KeyM") {
        if (isAudioPlaying) {
            audioElement.pause();
            isAudioPlaying = false;
        }
        else {
            audioElement.play();    
            isAudioPlaying = true;
        }
    }
});