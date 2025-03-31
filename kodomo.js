"use strict";

{
  const open = document.querySelector('.l-bottomNav-Menu-button');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}

{
  const dts = document.querySelectorAll('.Js-accordion-toggle');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}

{
  const dts = document.querySelectorAll('.js-accordion-toggle');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}

{
  const close1 = document.querySelector('.close1');
  const close2 = document.querySelector('.close2');
  const link1 = document.querySelector('.header-link1');
  const link2 = document.querySelector('.header-link2');

  close1.addEventListener('click', () => {
    close1.classList.add('hide');
    link1.classList.add('hide');
  });

  close2.addEventListener('click', () => {
    close2.classList.add('hide');
    link2.classList.add('hide');
  });
}
