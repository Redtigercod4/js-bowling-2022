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

describe('Checks if frame points are being pushed to player points', () => {
    xit('Checks Player Points matches frame points',  () => {
        //Code here
    })
})

describe('If frame has a strike, it grabs the next frame score and updates it', () => {
    xit('Updates frames if strike is present', () => {
        //Code here
    })
})

describe('If frame has spare, it grabs the next frame score and updates it', () => {
    xit('Updates frames if spare is present', () =>  {
        //Code here
    })
})




