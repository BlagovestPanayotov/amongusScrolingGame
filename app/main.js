let state = initState();
let game = initGameObjects();


game.btn.addEventListener('click', () => {
    game.btn.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    start(state,game)
});
