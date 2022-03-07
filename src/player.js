const { frame } = require("./round");

class BowingPlayer {
    constructor(player)  {
        this.player = player
        this.points = []
        this.bonusStrike = false
    }

    getPlayer = () => {
        return this.player;
    }

    getPoints = () => {
        return this.points;
    }

    recordFrame = (frame) => {
          this.points = this.points.concat(frame)
          return this.points  
    }

    newFrame = () => {
        //Code here
    }

    addStrike = (checkStrike) => {
        if(checkStrike == true) {
            if (this.points[this.points.length - 1] !== 10) {
                let updateStr = this.points[this.points.length - 1] + this.points[this.points.length - 2]
                let finalStr = updateStr + 10
                this.points.push(finalStr)
                return this.points
            }
        }
    }

    addSpare = (checkSpare) => {
        if(checkSpare == true) {
            let updateSpa = this.points[this.points.length -2] + 10
            this.points.push(updateSpa)
            return this.points
        }
    }
}; 

module.exports = {
    BowingPlayer
}
