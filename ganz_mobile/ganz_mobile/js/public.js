function init() {
    let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
    let htmlDom = document.getElementsByTagName('html')[0];
    // if (htmlwidth > 750) { htmlwidth = 750 }
    htmlDom.style.fontSize = htmlwidth / 7.5 + 'px';
    console.log(htmlwidth/7.5)
}
init();

function go(html) {
    //禁止冒泡
    event = event ? event : window.event;
    event.cancelBubble = true;
    window.location.href = html;
}

$(function () {
    window.addEventListener('resize', function () {
        init();
    });

    $(".el-icon-arrow-left").on("click",function () {
        window.history.back(-1)
    });

    $(".fragment>div").eq(0).on("click",function () {
        window.location.href = 'public_index.html'
    });
    $(".fragment>div").eq(1).on("click",function () {
        window.location.href = 'dyzx_index.html'
    });
    $(".fragment>div").eq(2).on("click",function () {
        window.location.href = 'personal_index.html'
    });
})





