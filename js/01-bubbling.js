const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

/* parent.addEventListener('click', e => {
  console.log(e.currentTarget);
});

child.addEventListener('click', e => {
  console.log(e.currentTarget);
});

innerChild.addEventListener('click', e => {
  console.log(e.currentTarget);
});
 */

//! ==============================================
parent.addEventListener('click', e => {
  console.log('parent');
});

child.addEventListener('click', e => {
  console.log('child');
});

innerChild.addEventListener('click', e => {
  e.stopImmediatePropagation();
  console.log(['innerChild1']);
});
innerChild.addEventListener('click', e => {
  console.log(['innerChild2']);
});
innerChild.addEventListener('click', e => {
  console.log(['innerChild3']);
});
