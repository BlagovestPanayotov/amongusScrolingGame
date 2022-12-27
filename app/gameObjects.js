function initGameObjects() {
    const gameScreen = document.querySelector('.game-screen');
    const startScreen = document.querySelector('.start-button');
    const scoreScreen = document.querySelector('.score');

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

    function createFireball(hero, fireballStat) {
        const fireball = document.createElement('div');
        fireball.classList.add('fireball');

        fireball.style.width = fireballStat.width + 'px';
        fireball.style.height = fireballStat.height + 'px';
        fireball.style.left = hero.positionX + hero.width + 'px';
        fireball.style.top = hero.positionY + hero.height / 3 + 'px';
        this.fireball = fireball;

        gameScreen.appendChild(fireball);
    }

    return {
        gameScreen,
        startScreen,
        scoreScreen,
        createHero,
        createNormalEnemy,
        createFireball,
    }
}