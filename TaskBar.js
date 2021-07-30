class TaskBar {
    width;
    height;
    x;
    y;

    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    drawTaskBar() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        this.x -= 50;
        if (this.x < 0) {
            this.x = 0
        }
    }

    moveRight() {
        this.x += 50;
        if (this.x + this.width > c.width) {
            this.x = c.width - this.width
        }
    }
}