class BowingPlayer {
    constructor(player)  {
        this.player = player
        this.points = []
    }

    getPlayer = () => {
        return this.player;
    }

    getPoints = () => {
        return this.points;
    }
    
    recordFrame = (frame) => {
        for (let i = 0; i <= 10; i++) {
           this.points.push(frame)
           this.points[0].getCurrentPoints() 
        }
    }
}; 

module.exports = {
    BowingPlayer
}
