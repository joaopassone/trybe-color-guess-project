const rgbColorText = document.getElementById('rgb-color');
const balls = document.getElementsByClassName('ball');
const answerText = document.getElementById('answer');
const btnReset = document.getElementById('reset-game');

function colorGenerator() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;

  return `rgb(${red}, ${green} , ${blue})`;
}

function colorBalls() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = colorGenerator();
  }
}

colorBalls();

function pickColor() {
  const index = Math.floor(Math.random() * 6);
  const pickedColor = balls[index].style.backgroundColor;
  rgbColorText.innerText = pickedColor.slice(3);
}

pickColor();

function guessBall(event) {
  const clickedBallColor = event.target.style.backgroundColor.slice(3);
  if (clickedBallColor === rgbColorText.innerText) {
    answerText.innerText = 'Acertou!';
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

for (let index = 0; index < balls.length; index += 1) {
  balls[index].addEventListener('click', guessBall);
}

btnReset.addEventListener('click', () => {
  window.location.reload();
});
