const gameScreen = document.querySelector('.game-screen');
const btn = document.querySelector('.start-button');
btn.addEventListener('click', startGame);

function startGame() {
    gameScreen.classList.remove('hidden');
    btn.classList.add('hidden');
}