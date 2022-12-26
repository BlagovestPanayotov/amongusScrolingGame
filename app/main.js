let state = initState();
let game = initGameObjects();

const allowedKeys = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Space"
];



document.addEventListener('keydown',(event)=>{
    if(allowedKeys.includes(event.code)){
        state.keys[event.code] = true;
    };
});

document.addEventListener('keyup',(event)=>{
    if(allowedKeys.includes(event.code)){
        state.keys[event.code] = false;
    };
})

game.startScreen.addEventListener('click', () => {
    game.startScreen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    //Start game
    start(state, game);
});