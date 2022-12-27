function start(state, game) {
    game.createHero(state.hero);

    window.requestAnimationFrame(gameLoop.bind(null, state, game)); //timestamp => gameLoop(state, game, timestamp)
}


function gameLoop(state, game, timestamp) {
    const { hero } = state;
    const heroElement = game.hero;
    const { normalEnemyStats } = state;

    game.scoreScreen.textContent = `${state.score} pts.`


    modifyHeroPosition(state, game);

    if (state.keys['Space']) {
        heroElement.classList.remove('hero');
        heroElement.classList.add('loaded-hero');

        if (timestamp > state.fireballStats.nextSpawnTimestamp) {
            game.createFireball(hero, state.fireballStats);
            state.fireballStats.nextSpawnTimestamp += state.fireballStats.maxSpawnInterval;
        }

    } else {
        heroElement.classList.add('hero');
        heroElement.classList.remove('loaded-hero');
    }

    //Spawn normal enemies
    if (timestamp > normalEnemyStats.nextSpawnTimestamp) {
        game.createNormalEnemy(normalEnemyStats);
        normalEnemyStats.nextSpawnTimestamp = timestamp + Math.random() * normalEnemyStats.maxSpawnInterval;
    }

    //Render normal enemies
    let normalEnemies = document.querySelectorAll('.normal-enemy');
    normalEnemies.forEach(e => {
        let positionX = parseInt(e.style.left);

        //Detect collision with hero
        if (detectCollision(e, heroElement)) {
            state.gameOver = true;
        }

        if (positionX <= 0) e.remove();

        e.style.left = positionX - state.normalEnemyStats.speed + 'px';
    })

    //Render fireballs
    document.querySelectorAll('.fireball').forEach(fb => {
        let positionX = parseInt(fb.style.left);

        //Detect collision
        normalEnemies.forEach(e => {
            if (detectCollision(e, fb)) {
                e.remove();
                fb.remove();
                state.score+=state.killScore;
            }
        })

        if (positionX > game.gameScreen.offsetWidth) fb.remove();

        fb.style.left = positionX + state.fireballStats.speed + 'px';
    })

    //Render hero
    heroElement.style.left = hero.positionX + 'px';
    heroElement.style.top = hero.positionY + 'px';

    if (state.gameOver) {
        alert(`Game Over\nYou have ${state.score} pts.`);
    } else {
        state.score += state.scoreRate;
        window.requestAnimationFrame(gameLoop.bind(null, state, game));
    }
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

function detectCollision(a, b) {
    const first = a.getBoundingClientRect();
    const second = b.getBoundingClientRect();

    let hasCollision = !(first.top > second.bottom
        || first.bottom < second.top
        || first.right < second.left
        || first.left > second.right)

    return hasCollision;
}


