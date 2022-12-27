function initGameObjects() {
    const gameScreen = document.querySelector('.game-screen');
    const startScreen = document.querySelector('.start-button');

    function createHero(stateHero) {
        const heroElement = document.createElement('div');
        heroElement.classList.add('hero');

        heroElement.style.width = stateHero.width + 'px';
        heroElement.style.height = stateHero.height + 'px';
        heroElement.style.left = stateHero.positionX + 'px';
        heroElement.style.top = stateHero.positionY + 'px';
        this.hero = heroElement;

        gameScreen.appendChild(heroElement);
    }

    function createNormalEnemy(statNormalEnemy) {
        const normalEnemyElement = document.createElement('div');
        normalEnemyElement.classList.add('normal-enemy');

        normalEnemyElement.style.width = statNormalEnemy.width + 'px';
        normalEnemyElement.style.height = statNormalEnemy.height + 'px';
        normalEnemyElement.style.left = gameScreen.offsetWidth - statNormalEnemy.width + 'px';
        normalEnemyElement.style.top = Math.floor(Math.random() * (gameScreen.offsetHeight - statNormalEnemy.height)) + 'px';
        this.normalEnemy = normalEnemyElement;

        gameScreen.appendChild(normalEnemyElement);

    }

    return {
        gameScreen,
        startScreen,
        createHero,
        createNormalEnemy,
    }
}