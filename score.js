// Iteration 5: Store the player score and display it on the game over screen
const scoreboard = document.getElementById('score-board')
scoreboard.innerText = localStorage.getItem('score')-1;

const play_button = document.getElementById("play-again-button")
play_button.addEventListener('click',()=>{
    window.open('index.html', '_self');
})
