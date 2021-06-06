// const ContBtn = document.getElementById('sound1')
// const MessgBtn = document.getElementById('sound2')
// const BrowserBtn = document.getElementById('sound3')
// const BatteryBtn = document.getElementById('sound4')
// const NavBtn = document.getElementById('sound5')
// const NotesBtn = document.getElementById('sound6')
// const MicBtn = document.getElementById('sound7')

// const btn = document.querySelectorAll('grid-item')
// const audios = document.querySelectorAll('audio')

function PlaySound(soundobj) {
    const thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    const thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}