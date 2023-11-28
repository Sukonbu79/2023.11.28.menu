'use strict';

{
 const open = document.getElementById('open');
 const list = document.getElementById('list');
 const mask = document.getElementById('mask');
 const close = document.getElementById('close');

open.addEventListener('click', () => {
  list.classList.add('show');
  mask.classList.add('show');
  close.classList.add('show');
  open.classList.add('hide');
})

mask.addEventListener('click', () => {
  list.classList.remove('show');
  mask.classList.remove('show');
  close.classList.remove('show');
  open.classList.remove('hide');
});

}