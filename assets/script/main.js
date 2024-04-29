// ハンバーガーメニュー----------------------//
var hamburger = $('.hamburger__menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger__button').on('click', function () {
  console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger__menu-active');
});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  console.log('resize');
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger__menu-active');
});

// ハンバーガーメニューのリンク要素を全て取得
var hamburgerMenuLinks = document.querySelectorAll('.hamburger__menu__list__group a');
// 各リンク要素に対してクリックイベントリスナーを追加
for (var i = 0; i < hamburgerMenuLinks.length; i++) {
  hamburgerMenuLinks[i].addEventListener('click', function() {
        // ハンバーガーメニューを非表示切り替え
        hamburger.toggleClass('hamburger__menu-active');
    });
}

// スマートタブ----------------------//
$('#smarttab').smartTab({
  enableUrlHash: false
});

// スムーススクロール----------------------//
// ヘッダーロゴをクリックしたとき
$('.header__logo').on('click', function (e) {
  e.preventDefault();
  // ページのトップにスムーズにスクロール
  $('body,html').animate({scrollTop: 0}, 400);
});

// ページ内リンクをクリックしたとき
var headerHeight = $('header').outerHeight();

$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    // console.log(href);

    if(href.startsWith('#tab')) {
      // スマートタブのリンクが押されたときはスマートタブに移動
      $('#smarttab').smartTab({
        enableUrlHash: false
      });
    } else {//スマートタブ以外のリンクが押されたときはスムーススクロール
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 400);
    return false;
    }
});
