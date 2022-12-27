function start(state, game) {
    game.createHero(state.hero);

    window.requestAnimationFrame(gameLoop.bind(null, state, game)); //timestamp => gameLoop(state, game, timestamp)
}


function gameLoop(state, game, timestamp) {
    const { hero } = state;
    const heroElement = game.hero;
    const { normalEnemyStats } = state;

    modifyHeroPosition(state, game);

    if(state.keys['Space']){
        heroElement.classList.remove('hero');
        heroElement.classList.add('loaded-hero');

        game.createFireball(hero,state.fireballStats);
    }else{
        heroElement.classList.add('hero');
        heroElement.classList.remove('loaded-hero');
    }

    //Spawn normal enemies
    if (timestamp > normalEnemyStats.nextSpawnTimestamp) {
        game.createNormalEnemy(normalEnemyStats);
        normalEnemyStats.nextSpawnTimestamp = timestamp + Math.random() * normalEnemyStats.maxSpawnInterval;
    }

    //Render normal enemies
    document.querySelectorAll('.normal-enemy').forEach(e => {
        let positionX = parseInt(e.style.left);

        if(positionX<=0)e.remove();

        e.style.left = positionX - state.normalEnemyStats.speed + 'px';
    })

    //Render hero
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

