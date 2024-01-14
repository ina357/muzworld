/* 스케줄 tab */
$(function () {
  //헤더 스크롤 시
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 100) {
            $(".header-sec").addClass("fixed");
        } else {
            $(".header-sec").removeClass("fixed");
        }

        if ($(this).scrollTop() > 200) {
            $(".float-top").fadeIn(200);
        } else {
            $(".float-top").fadeOut(200);
        } //탑버튼
    });

  //스크롤 다운된 상태에서 새로고침 했을 때 헤더 bg 나타나게
    $(window).ready(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 100) {
            $(".header-sec").addClass("fixed");
        } else {
            $(".header-sec").removeClass("fixed");
        }
    });

       // 탑버튼 상단이동
        $(".float-top").click(function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 300);
        });


        //모바일 메뉴 버튼
        $(".btn-m-menu").click(function () {
            $("html,body").toggleClass("noscroll");
            $(".m-list").toggleClass("open");
            $(".menu-line").toggleClass("on");
        });
        
        //모바일 메뉴 클릭시
        $(".m-list ul li").click(function () {
            $(".menu-line").removeClass("on");
            $(".m-list.open").removeClass("open");
            $("html,body").removeClass("noscroll");
        });

        
        $(document).ready(function () {
            $("ul.tab-btn-area li").click(function () {
            var tab_id = $(this).attr("data-tab");
        
            $("ul.tab-btn-area li").removeClass("active");
            $(".tab-con").removeClass("active-con");
        
            $(this).addClass("active");
            $("#" + tab_id).addClass("active-con");
        });
        
        $("ul.winner-tab li").click(function () {
            var tab_id = $(this).attr("data-tab");
        
            $("ul.winner-tab li").removeClass("active");
            $(".winner-tab-group").removeClass("active-con");
        
            $(this).addClass("active");
            $("#" + tab_id).addClass("active-con");
        });
    });
});
