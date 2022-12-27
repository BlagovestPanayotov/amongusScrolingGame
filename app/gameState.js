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
            maxSpawnInterval: 1250,
            speed: 5,
        },
        fireballStats:{
            width: 30,
            height: 15,
        }
    }

    return state;
}