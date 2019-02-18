var t;
var index = 0;
/////自动播放
t = setInterval(play, 2000)

function play() {
    index++;
    if (index > 4) {
        index = 0
    }
    $(".banner img").eq(index).fadeIn(1000).siblings().fadeOut(1000);
};

