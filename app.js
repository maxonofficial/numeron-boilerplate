// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const play_button = document.getElementById("play-button")
localStorage.setItem('score', 0);
play_button.addEventListener('click',()=>{
    window.open('game.html', '_self');
})