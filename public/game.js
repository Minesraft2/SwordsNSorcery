class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.animate = this.animate.bind(this);
    }
    animate() {
        const { canvas, ctx } = this;
        ctx.fillStyle = "white";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("Test", Math.random() * canvas.width, Math.random() * canvas.height);
        requestAnimationFrame(this.animate);
    }
    init() {
        console.log("hello world");
        this.animate();
    }
}

export default Game;