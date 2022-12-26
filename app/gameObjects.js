function initGameObjects() {
    const gameScreen = document.querySelector('.game-screen');
    const startScreen = document.querySelector('.start-button');
    let heroElement = document.createElement('div');
    
    function createHero(stateHero) {
        heroElement.classList.add('hero');

        heroElement.style.width = stateHero.width + 'px';
        heroElement.style.height = stateHero.height + 'px';
        heroElement.style.left = stateHero.positionX + 'px';
        heroElement.style.top = stateHero.positionY + 'px';

        this.hero = heroElement;

        gameScreen.appendChild(heroElement);

        return heroElement;
    }

    return {
        gameScreen,
        startScreen,
        createHero,
        heroElement,
    }
}