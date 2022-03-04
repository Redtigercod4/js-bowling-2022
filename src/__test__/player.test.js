const {
    BowingPlayer
} = require('../player');

describe('Retrieves Player Name', () => {
    it('Retrieves Player Name', () => {
        const game = new BowingPlayer('Wes');
        expect(game.getPlayer()).toEqual('Wes');
    })
})

describe('Retrieves Player Points', () => {
    it('Retrieves Player Points', () => {
        const currentPoints = new BowingPlayer();
        expect(currentPoints.getPoints()).toEqual([]);
    })
})

it('Given a player has rolled 2 balls and hit 1 & 7, their score should be 8', () => {
    const player = new BowlingPlayer();
    player.recordBall(1);
    player.recordBall(7);
    assert(player.getScore()).equals(8);
})

it('Given a player has rolled 2 balls and hit 0 & 1, their score should be 1', () => {
    const player = new BowlingPlayer();
    player.recordBall(1);
    player.recordBall(0);
    assert(player.getScore()).equals(1);
})

it('Given a player has rolled 2 balls and hit 0 & 0, their score should be 0', () => {
    const player = new BowlingPlayer();
    player.recordBall(0);
    player.recordBall(0);
    assert(player.getScore()).equals(0);
})


