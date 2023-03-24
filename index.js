const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し

});

$(function(){
 
 //音を鳴らす
 $('.headhn').mouseover(function(){

     document.getElementById("overSound").currentTime = 0;
     document.getElementById("overSound").play();

 });


});

