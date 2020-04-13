
// Cricle

let Cricle = function(x, y, radius, color) {
	this.x      = Number(x);
	this.y      = Number(y);
	this.radius = Number(radius);
	this.color  = String(color);
}

// get
Cricle.prototype.getRadius = function() {
    return this.radius;
}
Cricle.prototype.getArea = function() {
    return Math.PI*Math.pow(this.radius, 2);
}

// draw
Cricle.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
}
