"use strict";

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('.Phone-carousel ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }

    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    centerMode: true;       //両サイドを表示
    centerPadding: "30%";    //両サイドをどれぐらい表示するか
  };

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      // document.querySelector('nav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  };

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });
}

{
  $('.slider').slick({
    autoplay: true,         //自動再生
    dots: true,             //ドット
    infinite: true,         //ループ
    pauseOnHover: true,    //ホバーで止めない
    centerMode: true,        //両サイドを表示
    centerPadding: "30%",    //両サイドをどれぐらい表示するか
  })
}

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
  const menuItems = document.querySelectorAll('.sub-menu li a');
  const contents = document.querySelectorAll('.osiraseListItems');


  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });

      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
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

{
  $(function () {
    var $header = $("header-main");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $header.addClass('fixed');
      } else {
        $header.removeClass('fixed');
      }
    });
  });
}