"use strict";

{
  const open1 = document.getElementById('modal1-open');
  const mask = document.getElementById(`mask`);
  // const modal = document.getElementById(`modal`);
  const menuinfo = document.getElementById('modal-menuinfo');

  open1.addEventListener('focus', (dt) => {
    menuinfo.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  mask.addEventListener('focus', () => {
    mask.classList.add('hidden');
  });
}

{
  const open2 = document.getElementById('modal2-open');
  const mask = document.getElementById(`mask`);
  // const modal = document.getElementById(`modal`);
  const kidsinfo = document.getElementById('modal-kidsinfo');

  open2.addEventListener('focus', (dt) => {
    kidsinfo.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  mask.addEventListener('focus', () => {
    mask.classList.add('hidden');
  });
}