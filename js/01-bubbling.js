const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

parent.addEventListener('click', () => {
  console.log('PARENT');
});

child.addEventListener('click', () => {
  console.log('child');
});

innerChild.addEventListener('click', () => {
  console.log('innerChild');
});
