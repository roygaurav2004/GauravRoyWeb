$(document).ready(function() {
    var width = $(document).width();
    $(".hamburger").click(function() {
        $(".nav-items").slideToggle();
    })
    if (width > 431) {
        $(document).scroll(function() {
            var wayPoint = $(document).scrollTop();
            console.log(wayPoint);
            if (wayPoint > 98) {
                $(".my-img").addClass("animated rollIn");
                $(".info").addClass("animated rollIn");
            }
            if (wayPoint > 740) {
                $(".html").addClass("html1");
                $(".css").addClass("css1");
                $(".bootstrap").addClass("bootstrap1");
                $(".js").addClass("js1");
                $(".jquery").addClass("jquery1");
                $(".c").addClass("c1");
                $(".unity").addClass("unity1");
            }
            if (wayPoint > 1427) {
                $(".gm").addClass("animated slideInLeft")
            }
            if (wayPoint > 1922) {
                $(".web").addClass("animated slideInRight")
            }
            if (wayPoint > 2445) {
                $(".lg").addClass("animated slideInLeft")
            }

        })
    }
    if (width < 431) {
        $(document).scroll(function() {
            var wayPoint = $(document).scrollTop();
            console.log(wayPoint);
            if (wayPoint > 101) {
                $(".my-img").addClass("animated rollIn");
                $(".info").addClass("animated rollIn");
            }
            if (wayPoint > 1026) {
                $(".html").addClass("html1");
                $(".css").addClass("css1");
                $(".bootstrap").addClass("bootstrap1");
                $(".js").addClass("js1");
                $(".jquery").addClass("jquery1");
                $(".c").addClass("c1");
                $(".unity").addClass("unity1");
            }
            if (wayPoint > 1832) {
                $(".gm").addClass("animated slideInLeft")
            }
            if (wayPoint > 2639) {
                $(".web").addClass("animated slideInRight")
            }
            if (wayPoint > 3547) {
                $(".lg").addClass("animated slideInLeft")
            }

        })
    }


});