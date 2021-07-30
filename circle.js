class Circle {
    radius;
    x;
    y;
    speedX;
    speedY;

    constructor(radius, x, y, speedX, speedY) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    drawCircle() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move() {
        this.y += this.speedY;
        this.x += this.speedX;
    }

    getRamdomColor() {
        let red = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        return "rgb(" + red + "," + blue + "," + green + ")";
    }

    setColor() {
        this.color = this.getRamdomColor()
    }
}