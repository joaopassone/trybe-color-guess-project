const rgbColorText = document.getElementById('rgb-color');
const balls = document.getElementsByClassName('ball');

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
