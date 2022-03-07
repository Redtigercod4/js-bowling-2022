const { frame }  = require('../round.js')

describe('If both rolls equal 0, array should equal "0"', () => {
    it('Array should equal "0"', () => {
        const currentPoints = new frame();
        currentPoints.firstRoll(0)
        expect(currentPoints.getCurrentPoints()).toEqual([0])
        currentPoints.secondRoll(0)
        expect(currentPoints.getCurrentPoints()).toEqual([0, 0])
    })
})

describe('If first roll was 1 pin & second roll was 1 pin, array should equal "1", "1"', () => {
    it('Array should equal "1", "1"', () => {
        const currentPoints = new frame();
        currentPoints.firstRoll(1)
        currentPoints.secondRoll(1)
        expect(currentPoints.getCurrentPoints()).toEqual([1, 1])
    })
})

describe('If first roll was 1 pin & second roll was 1 pin, array should equal "3", "2"', () => {
    it('Array should equal "3", "2"', () => {
        const currentPoints = new frame();
        currentPoints.firstRoll(3)
        currentPoints.secondRoll(2)
        expect(currentPoints.getCurrentPoints()).toEqual([3, 2])
    })
})

describe('Throws Error if Pins hit is greater than 10', () => {
    it('Throw first roll error', () => {
        const throwErr = new frame();
        expect(() => {throwErr.firstRoll(22)}).toThrow('Stop cheating!!!')
    })
})

describe('Throws Error if Pins hit is greater than 10', () => {
    it('Throw second roll error', () => {
        const throwErr = new frame();
        expect(() => {throwErr.secondRoll(22)}).toThrow('Stop cheating!!!')
    })
})