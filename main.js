{
  $('.slider').slick({
    autoplay: true,         //自動再生
    dots: true,             //ドット
    infinite: true,         //ループ
    pauseOnHover: false,    //ホバーで止めない
    centerMode: true,        //両サイドを表示
    centerPadding: "30%",    //両サイドをどれぐらい表示するか
  })
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