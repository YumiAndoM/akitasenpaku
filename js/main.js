// ------------------top-FV

// header背景とロゴ色変更
$(function() {
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    if (scroll >= 600) { // 100は任意の値に変えてください
      $("header").addClass("bg-wh");
    } else {
      $("header").removeClass("bg-wh");
    }
  });
});


// ハンバーガーメニュー
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//画像の設定






// 横スクロール

// const itemWrapper = document.querySelector('.side-scroll__itemOuter');
// 			const itemInner = document.querySelector('.side-scroll__itemInner');

// 			gsap.to(itemInner, {
// 				x: () => -(itemInner.clientWidth - itemWrapper.clientWidth),
// 				ease: 'none',
// 				scrollTrigger: {
// 					trigger: '.side-scroll__section', 
// 					start: 'top top',
// 					end: () => `+=${itemInner.clientWidth - itemWrapper.clientWidth}`,
// 					//markers: true,
// 					scrub: true, 
// 					pin: true,  
// 					invalidateOnRefresh: true, 
// 					anticipatePin: 1, 
// 				},
// 			});