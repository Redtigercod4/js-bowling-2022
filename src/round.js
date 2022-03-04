class frame {
    constructor()  {
        this.currentPoints = []
        this.pins = 10;
        this.pinsRemaining = 0;
        this.strike = false;
        this.spare = false;
    }

    getCurrentPoints = () => {
        return this.currentPoints;
    }

    firstRoll(pinsHit1) {
        if (pinsHit1 == 10) {
            this.strike = true;
        } else {
            this.pinsRemaining = this.pins - pinsHit1;
            this.currentPoints.push(pinsHit1);
        }
    }

    secondRoll(pinsHit2) {
        if (this.pinsRemaining - pinsHit2 == 0) {
            this.spare = true;
        } else {
            this.currentPoints.push(pinsHit2);
        }
    }
}

module.exports = { frame }