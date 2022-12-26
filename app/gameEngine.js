function start(state, game) {
    game.createHero(state.hero);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}


function gameLoop(state, game) {
    const { hero } = state;
    const { heroElement } = game;

    modifyHeroPosition(state, game);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));

    heroElement.style.left = hero.positionX + 'px';
    heroElement.style.top = hero.positionY + 'px';
}

function modifyHeroPosition(state, game) {
    const { hero } = state;
    const { keys } = state;
    const { gameScreen } = game;

    if (keys["ArrowUp"]) {
        hero.positionY = Math.max(hero.positionY - hero.speed, 0);
    }
    if (keys["ArrowDown"]) {
        hero.positionY = Math.min(hero.positionY + hero.speed, gameScreen.offsetHeight - hero.height);
    }
    if (keys["ArrowLeft"]) {
        hero.positionX = Math.max(hero.positionX - hero.speed, 0);
    }
    if (keys["ArrowRight"]) {
        hero.positionX = Math.min(hero.positionX + hero.speed, gameScreen.offsetWidth - hero.width);
    }
}

