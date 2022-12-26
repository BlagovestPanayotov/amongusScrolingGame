function initState() {
    const state = {
        player: 'Player 1',
        hero: {
            width: 93,
            height: 120,
            positionY: 250,
            positionX: 100,
            speed: 5,
        },
        keys: {
            "ArrowUp": false,
            "ArrowDown": false,
            "ArrowLeft": false,
            "ArrowRight": false,
            "Space": false,
        }
    }

    return state;
}