import { registerImage } from "./lazy.js";

// Javascript

const minimun = 1;
const maximun = 122;
const randomImage = () => Math.floor(Math.random() * (maximun - minimun)) + minimun;


const createNodeCard = () => {
  // Card
  const card = document.createElement('div'); 
  card.className= 'card';

  // Card-image
  const cardImage = document.createElement('img');
  cardImage.src = `https://randomfox.ca/images/${randomImage()}.jpg`;
  cardImage.style = 'width: 100%';

  card.appendChild(cardImage);

  return card;
}

const mountNode = document.getElementById('images');
mountNode.classList = "flex flex-col items-center";

const addButton = document.querySelector('button');

const addCard = () => {
  const newCard = createNodeCard();
  mountNode.append(newCard);
  registerImage(newCard);
}

addButton.addEventListener('click', addCard);

