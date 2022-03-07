class frame {
    constructor()  {
        this.currentPoints = []
        this.pins = 10;
        this.pinsRemaining = 0;
        this.strike = false;
        this.bonusRoll = 0;
        this.spare = false;
    }

    getCurrentPoints = () => {
        return this.currentPoints;
    }

    firstRoll(pinsHit1) {
        if (pinsHit1 > 10) {
            throw 'Stop cheating!!!'
        } else if (pinsHit1 == 10) {
            this.strike = true;
            this.currentPoints.push(20)
        } else {
            this.pinsRemaining = this.pins - pinsHit1;
            this.currentPoints.push(pinsHit1);
        }
    }

    secondRoll(pinsHit2) {
        if (pinsHit2 > this.pinsRemaining) {
            throw 'Stop cheating!!!'
        } else if (this.pinsRemaining - pinsHit2 == 0) {
            this.spare = true;
        } else {
            this.currentPoints.push(pinsHit2);
        }
    }
}

module.exports = { frame }