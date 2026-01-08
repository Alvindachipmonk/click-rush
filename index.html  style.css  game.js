<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Click Rush - Speed Click Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>🟥 Click Rush</h1>
<p class="subtitle">How fast can you click?</p>

<p>Score: <span id="score">0</span></p>

<div id="gameArea">
  <div id="box"></div>
</div>

<p class="tip">🎯 Click the red box before it hits the bottom!</p>

<script src="game.js"></script>
</body>
</html>
body {
  text-align: center;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #1e1e1e, #333);
  color: white;
}

h1 {
  font-size: 48px;
  margin-bottom: 5px;
}

.subtitle {
  color: #ff4d4d;
  margin-bottom: 20px;
}

#gameArea {
  width: 400px;
  height: 500px;
  border: 4px solid #ff4d4d;
  margin: auto;
  position: relative;
  overflow: hidden;
  background: #111;
  border-radius: 10px;
}

#box {
  width: 50px;
  height: 50px;
  background: red;
  position: absolute;
  top: 0;
  left: 100px;
  cursor: pointer;
  border-radius: 8px;
}

.tip {
  margin-top: 15px;
  color: #ccc;
}
const box = document.getElementById("box");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

let score = 0;
let speed = 2;
let y = 0;

// Random X position
function randomX() {
  return Math.random() * (gameArea.clientWidth - 50);
}

// Game loop
function gameLoop() {
  y += speed;
  box.style.top = y + "px";

  if (y > gameArea.clientHeight) {
    alert("Game Over! Your score: " + score);
    location.reload();
  }

  requestAnimationFrame(gameLoop);
}

// Click box
box.addEventListener("click", () => {
  score++;
  scoreText.textContent = score;
  y = 0;
  speed += 0.5;
  box.style.left = randomX() + "px";
});

// Start game
box.style.left = randomX() + "px";
gameLoop();
