'use strict'

module.exports = {

    Z: 1000, // we want saucer to be on top of existing entities

    // saucer coordinates
    x: ctx.width/2,
    y: ctx.height/2,

    // current movement state
    dx: 0, 
    dy: 0,
    t: 0,

    evo: function(dt) {
        this.t -= dt
        if (this.t < 0) {
            // it's time to change the direction!
            const max = ctx.height/10
            this.dx = lib.math.rndi(max) - max/2
            this.dy = lib.math.rndi(max) - max/2
            this.t = lib.math.rndi(8) + 2
        }

        // move
        this.x += this.dx*dt
        this.y += this.dy*dt

        // check the screen edges
        if (this.x < 0 || this.x > ctx.width
                || this.y < 0 || this.y > ctx.height) {
            this.x = ctx.width/2
            this.y = ctx.height/2
        }
    },

    draw: function() {
        // define saucer sizes and color
        const sw = 70 
        const tw = 25 
        const sh = 20
        ctx.fillStyle = '#609040'

        // draw the saucer shape
        ctx.beginPath()
        ctx.moveTo(this.x - sw/2, this.y)
        ctx.lineTo(this.x - tw/2, this.y-sh/2)
        ctx.lineTo(this.x + tw/2, this.y-sh/2)
        ctx.lineTo(this.x + sw/2, this.y)
        ctx.lineTo(this.x + tw/2, this.y+sh/2)
        ctx.lineTo(this.x - tw/2, this.y+sh/2)
        ctx.closePath()
        ctx.fill()
    }
}
