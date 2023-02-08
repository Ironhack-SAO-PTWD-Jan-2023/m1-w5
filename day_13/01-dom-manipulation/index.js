console.log('Conectado ao JS!');

let paragraph = document.getElementById('paragraph');
let paragraphId = paragraph.getAttribute('data-index');
paragraph.setAttribute('id', 'info-paragraph');
// paragraph.setAttribute('fruit', 'goiaba');
paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'paragraph');
// console.log(paragraphId);

let links = document.getElementsByClassName('link');
// console.log(links);

let divs = document.getElementsByTagName('div');
// console.log(divs);

let data = document.querySelector('[data-index]');
// console.log(data);

// CRIANDO UM ELEMENTO NOVO

let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'Elephant';
// console.log(h2Tag);

const parent = document.getElementsByTagName('body')[0];
// const parent = document.body;
parent.appendChild(h2Tag)
h2Tag.setAttribute('class', 'animal');

const text = document.createTextNode('Esse texto foi criado dinamicamente!');
parent.appendChild(text);

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - vem antes do 2';

// parent.insertBefore(h1Tag, h2Tag);

const contentDiv = document.getElementById('content');
parent.insertBefore(h1Tag, contentDiv);

parent.removeChild(paragraph);
contentDiv.innerHTML = '';

// EVENTOS
let addBtn = document.querySelector('#add-item-button');

// addBtn.onclick = function () {
//   console.log('adicionando um elemento!');
// }

addBtn.addEventListener('click', function () {
  const newDiv = document.createElement('div');
  newDiv.classList.add('item');
  newDiv.innerHTML = 'Novo Item!'
  contentDiv.appendChild(newDiv);
  console.log('adicionando com addEventListener!')
})

let input = document.getElementsByTagName('input')[0];

let sendBtn = document.getElementById('send-btn');
sendBtn.onclick = function () {
  console.log(input.value);
}

let liTags = document.querySelectorAll('li');
console.log(liTags);
for (let i = 0; i < liTags.length; i += 1) {
  liTags[i].onclick = function (event) {
    console.log('li foi clicado:', event.currentTarget.innerHTML);
  }
}