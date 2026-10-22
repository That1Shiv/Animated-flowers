document.addEventListener('DOMContentLoaded', () => {
  const flower = document.querySelector('#animation-flower');
  const word = document.querySelector('h1');

  setTimeout(() => {
    flower.style.display = 'inherit';
    word.style.display = 'none';
  }, 2000);
});

const heartColors = ['var(--heart-blue)', 'var(--heart-purple)', 'var(--heart-red)'];
let nextHeartColor = 0;

function createHeart() {
  const body = document.querySelector('body');
  const heart = document.createElement('span');
  const duration = Math.random() * 3 + 5;

  heart.className = 'heart';
  heart.textContent = '♥';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.color = heartColors[nextHeartColor];
  heart.style.fontSize = `${0.65 + Math.random() * 0.4}rem`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.setProperty('--heart-drift', `${Math.random() * 12 - 6}vw`);
  body.appendChild(heart);

  nextHeartColor = (nextHeartColor + 1) % heartColors.length;
  heart.addEventListener('animationend', () => heart.remove());
}

setInterval(createHeart, 250);
