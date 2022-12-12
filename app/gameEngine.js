const btn = document.querySelector('.startBtn');
const gameScreen = document.querySelector('.gameScreen');
btn.addEventListener('click', startGame);;


function startGame() {
    gameScreen.classList.remove('hidden');
    btn.classList.add('hidden');
}