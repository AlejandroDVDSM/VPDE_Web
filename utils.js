document.addEventListener("keydown", (e) => {
    if (e.code === "KeyF")
        setFullscreen();
});

function setFullscreen() {
    if (!document.fullscreenElement)
        document.documentElement.requestFullscreen();
    else if (document.exitFullscreen)
        document.exitFullscreen();
}