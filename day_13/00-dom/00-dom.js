console.log('Conectado ao 00-dom.js!');

// SELECIONANDO ELEMENTO PELO ID

// sintaxe
// const elemento = document.getElementById('algum-id');

const catDiv = document.getElementById('cat');
const helloDiv = document.getElementById('hello');

// ALTERANDO DENTRO DO ELEMENTO

const animal = 'cat'
catDiv.innerHTML = `
  <div>
    I'm a <b>${animal}</b>!
  </div>
`;
// catDiv.innerText = "I'm a <b>cat</b>!";
// helloDiv.innerHTML = catDiv.innerHTML;

catDiv.style.backgroundColor = 'red';
catDiv.style.border = '2px solid blue';
catDiv.style.fontSize = '30px';
catDiv.style.marginTop = '20px';
catDiv.style.paddingBottom = '20px';

// SELECIONANDO ELEMENTOS PELA CLASSE
// sintaxe
// const elemento = document.getElementsByClassName('alguma-classe');

const mouseDivs = document.getElementsByClassName('mouse');
// console.log(mouseDivs);

const miceArr = [...mouseDivs];
// console.log(miceArr);

// SELECIONANDO ELEMENTOS PELA "TAG"/ELEMENTO
// sintaxe
// const elemento = document.getElementsByTagName('p');

const divs = document.getElementsByTagName('div');
// console.log(divs);

// SELECIONANDO USANDO QUERY SELECTOR

const firstCat = document.querySelector('#cat');
// console.log(firstCat);
const firstMouse = document.querySelector('.mouse');
// console.log(firstMouse);
const firstDiv = document.querySelector('div');
// console.log(firstDiv);

const allDivs = document.querySelectorAll('.mouse, #cat');
// console.log(allDivs);

// CLASS NAME
// firstMouse.className = 'mouse giant';
firstMouse.classList.add('giant');
firstMouse.classList.remove('grey');
console.log(firstMouse.classList.contains('rodent'));
firstMouse.classList.toggle('first')
console.log(firstMouse.classList);