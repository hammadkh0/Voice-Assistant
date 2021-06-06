function PlaySound(soundobj) {
    const thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    const thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}