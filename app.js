const body = document.querySelector('body');
const counter = document.querySelector('.counter');
const list = document.querySelector('ul');
counter.innerText = 0;
let i = 1;

body.addEventListener('keydown', (e) => {
  counter.innerText = (parseInt(counter.innerText) + 1).toString();
  const key = e.key;
  const newKey = document.createElement('li');
  newKey.innerText = `
  ${i}: ${key}`;
  list.append(newKey);
  i++;
});
