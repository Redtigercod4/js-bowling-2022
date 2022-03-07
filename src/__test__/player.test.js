const {
    BowingPlayer
} = require('../player');

const { frame } = require('../round')

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
    it('Checks Player Points matches frame points',  () => {
        const checkFramePoints = new BowingPlayer();
        const grabFrame = new frame();
        grabFrame.firstRoll(1)
        grabFrame.secondRoll(2)
        expect(checkFramePoints.recordFrame(grabFrame.currentPoints)).toEqual([1,2]);
    })
})

describe('Calls a new frame', () => {
    it('Calls a new frame', () => {
        //Code here
    })
})

describe('If frame has a strike, it grabs the next frame score and updates it', () => {
    it('Updates frames if strike is present', () => {
        const addStrike = new BowingPlayer();
        let strike = true;
        const nextRoll = new frame();
        nextRoll.firstRoll(2)
        nextRoll.secondRoll(4)
        addStrike.recordFrame(nextRoll.currentPoints)
        expect(addStrike.addStrike(strike)).toEqual([2, 4, 16])
    })
})

describe('If frame has spare, it grabs the next frame score and updates it', () => {
    it('Updates frames if spare is present', () => {
        const addSpare = new BowingPlayer();
        let spare = true;
        const nextRoll = new frame();
        nextRoll.firstRoll(2)
        nextRoll.secondRoll(4)
        addSpare.recordFrame(nextRoll.currentPoints)
        expect(addSpare.addSpare(spare)).toEqual([2, 4, 12])
    })
})




