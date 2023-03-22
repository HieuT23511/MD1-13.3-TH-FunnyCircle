class creatCircle {
    x = Math.random() * 600;
    y = Math.random() * 600;
    radius = Math.random() * 100;

    // constructor() {
    // }

    getRandomColor() {
        let red = Math.random() * 255;
        let blue = Math.random() * 255;
        let green = Math.random() * 255;
        return `rgb(${red},${blue},${green})`

    }

    getDrawCircle() {
        let canvas = document.getElementById('canvas')
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.getRandomColor();
        ctx.fill();
        ctx.closePath();
    }
}

for (let i = 0; i < 50; i++) {
    let circleRandom = new creatCircle()
    circleRandom.getDrawCircle();
}
