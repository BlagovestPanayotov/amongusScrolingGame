function initState() {
    const state = {
        player: 'Player 1',
        hero: {
            width: 50,
            height: 64,
            positionY: 250,
            positionX: 100,
            speed: 10,
        },
        keys: {
            "ArrowUp": false,
            "ArrowDown": false,
            "ArrowLeft": false,
            "ArrowRight": false,
            "Space": false,
        },
        normalEnemyStats:{
            width: 35,
            height: 35,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 5,
        }
    }

    return state;
}