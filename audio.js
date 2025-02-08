// load some sound
const audioElement = document.querySelector("audio");

// register event listeners to store key actions and keycodes inside of GLOBALS, so that they can be accessed by sprites that need them.

window.addEventListener("keydown", (e) => {
    if (e.defaultPrevented) {
        return; // Do nothing if event already handled
    }

    if (e.code == "KeyM") {
        if (audio.playState == "paused")
            audio.play();
        else if (audio.playState == "playing")
            audio.pause();
    }
});