let c = document.getElementById("myCanvas")
let ctx = c.getContext("2d");
let taskBar = new TaskBar(100, 20, 270, 340);
let circle = new Circle(10, 300, 20, 7, 5)
taskBar.drawTaskBar();
circle.setColor();
circle.drawCircle();
let point = 0;
let flag = false;
let gameOver = false;

function keycode() {
    window.addEventListener("keydown", moveTaskBar);
}

function moveTaskBar() {
    switch (event.keyCode) {
        case 65:
        case 37: {
            taskBar.moveLeft();
            break;
        }
        case 68:
        case 39: {
            taskBar.moveRight();
            break;
        }
    }
    taskBar.drawTaskBar()
}

function check() {
    if (circle.x < circle.radius ||
        circle.x + circle.radius >= c.width) {
        circle.speedX = -circle.speedX;
    }
    if (circle.y < circle.radius) {
        circle.speedY = -circle.speedY
    }
    if (circle.y + circle.radius > taskBar.y &&
        circle.x + circle.radius > taskBar.x &&
        circle.x - circle.radius < taskBar.x + taskBar.width &&
        circle.y < taskBar.y) {
        circle.speedY = -circle.speedY;
        flag = true
    }
    if (circle.y > c.height) {
        gameOver = true;
    }
    if (flag) {
        point++;
        document.getElementById("score").innerHTML = "<div style='color: red'>" + point + "</div>";
        flag = false;
    }
}

function reset() {
    location.reload()
}

function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height)
}

function pauseAudio() {
    document.getElementById("audio").pause();
}

function upSpeed() {
    if (point === 10) {
        circle.speedX = 8;
        circle.speedY = 6;
    }
    if (point === 20) {
        circle.speedX = 9;
        circle.speedY = 7;
    }
    if (point === 30){
        circle.speedX = 10;
        circle.speedY = 8;
    }
}

function GameStart() {
    if (gameOver === false) {
        clearCanvas();
        check();
        circle.move();
        circle.drawCircle();
        taskBar.drawTaskBar();
        upSpeed();
        window.requestAnimationFrame(GameStart);
    } else {
        alert("GAME OVER\nĐiểm của bạn là: " + point + "\nẤn Reset để chơi lại");
    }
}

GameStart();