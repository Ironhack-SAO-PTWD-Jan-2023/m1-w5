console.log('JS conectado a RAVE!');
// RAVE OR DIE

function changeBGText () {
  const textBg = document.getElementById('text-bg');
  if (textBg.innerHTML === 'RAVE') {
    textBg.innerHTML = 'OR';
  } else if (textBg.innerHTML === 'OR') {
    textBg.innerHTML = 'DIE';
  } else if (textBg.innerHTML === 'DIE') {
    textBg.innerHTML = 'RAVE';
  }
}

function changeBGColor () {
  const colorBg = document.getElementById('color-overlay');
  colorBg.style.backgroundColor = generateRandomColor();
}

function generateRandomColor () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBG () {
  changeBGColor();
  changeBGText();
}

setInterval(changeBG, 300);
