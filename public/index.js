const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

document.body.appendChild(canvas);
canvas.width = 16 * 70;
canvas.height = 9 * 70;

import Game from "./game.js";

const game = new Game(canvas, ctx);
game.init();
window.game = game;