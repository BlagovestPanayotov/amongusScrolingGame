const btn = document.querySelector('.startBtn');
const gameField = document.querySelector('.gameScreen');
btn.addEventListener('click', startGame);;


function startGame() {
    gameField.classList.remove('hidden');
    btn.classList.add('hidden');
}