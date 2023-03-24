$(function(){
    $(".btn-gnavi").on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -300;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).addClass("open");
        }
        $("#global-navi").stop().animate({
            right: rightVal
        }, 200);
    });
});

$(function(){
 
 //音を鳴らす
 $('.headhn').mouseover(function(){

     document.getElementById("overSound").currentTime = 0;
     document.getElementById("overSound").play();

 });


});

