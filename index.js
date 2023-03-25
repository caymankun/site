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





// マウスホイールを有効にするかどうか
let enableMouseWheel = true;

// チェックボックスをクリックした時の処理
document
.querySelector('.c-switch-label"')
.addEventListener('click',(event)=>{
  enableMouseWheel = event.target.checked === false;
});

// スクロール可能な要素上でマウスホイールした時の処理
document
.querySelector('.headhn')
.addEventListener('wheel',(event) =>{
  if(enableMouseWheel === true){
    return;
  }
  // マウスホイールが無効な場合はevent.preventDefault()を実行
  event.preventDefault();
});

