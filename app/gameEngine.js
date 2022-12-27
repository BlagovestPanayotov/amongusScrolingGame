function start(state, game) {
    game.createHero(state.hero);

    window.requestAnimationFrame(timestamp => gameLoop(state, game, timestamp));
}


function gameLoop(state, game, timestamp) {
    const { hero } = state;
    const heroElement = game.hero;
    const { normalEnemyStats } = state;

    modifyHeroPosition(state, game);

    //Spawn bugs
    if (timestamp > normalEnemyStats.nextSpawnTimestamp) {
        game.createNormalEnemy(normalEnemyStats);
        normalEnemyStats.nextSpawnTimestamp = timestamp + Math.random() * normalEnemyStats.maxSpawnInterval;
    }

    //Render
    heroElement.style.left = hero.positionX + 'px';
    heroElement.style.top = hero.positionY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
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

