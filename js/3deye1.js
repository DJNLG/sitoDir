(function(e) {
    e.fn.extend({
        vc3dEye1: function(t) {
            new e.vc3dEye1(this, t);
            return
        }
    });
    e.vc3dEye1 = function(t, n) {
        function h(e, t) {
            u = e;
            a = t.imagePath;
            i = t.totalImages;
            c = t.imageExtension;
            x = t.totalImages-30;
        }
        function p() {
            var startX, startY;

            e(f).mousedown(function() {
                s = true
            });
            e(document).mouseup(function() {
                s = false
            });x
            e(f).mousemove(function(e) {
                if (s == true) d(e.pageX - this.offsetLeft);
                else o = e.pageX - this.offsetLeft;
                if (s == true) w(e.pageY - this.offsetTop);
                else  q = e.pageY-this.offsetTop

            });
            e(f).bind("touchstart",
                function(e) {
                    s = true;
                    startX = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    startY = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];

                });
            e(document).bind("touchend",
                function() {
                    s = false;
                });
            e(f).bind("touchmove",
                function(e) {
                    var endX, endY;
                    e.preventDefault();
                    endX = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    endY = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    var direction = GetSlideDirection(startX.pageX, startY.pageY, endX.pageX, endY.pageY);
                    if (s == true) w(t.pageX - this.offsetLeft);
                    else q = t.pageX - this.offsetLeft;
                    var dy = startY - endY;
                    var dx = endX - startX;
                    var f=Math.abs(dy);
                    var q=Math.abs(dx);
                    switch (direction){
                        case 4:
                            $(`#handle`).show();
                            $(`#handle2,#handle4`).show();
                            $(`#handle3`).hide();
                            $("#myCar2").css({"opacity":"0"});
                            $("#myCar").css({"opacity":"1"});
                            // console.log("a")
                            // if (s == true) d(t.pageX - this.offsetLeft);
                            // else o = t.pageX - this.offsetLeft;
                            break;

                        default:

                    }
                })
        }
        function GetSlideAngle(dx,dy) {

            return Math.atan2(dy,dx) * 180 / Math.PI;
        }

        function GetSlideDirection(startX,startY, endX, endY) {
            var dy = startY - endY;
            var dx = endX - startX;
            // var f=Math.abs(dy);
            // var q=Math.abs(dx)
            var result = 0;

            //如果滑动距离太短

            if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                
                return result;

            }
            var angle = GetSlideAngle(dx, dy);

            if (angle >= 70 && angle <= 110) {
                result = 4;

            }
            // else if (angle >= 56 && angle < -45) {
            //
            //     result = 1;
            //
            // }
            // else if (angle >= -185 && angle < 30) {
            //
            //     result = 2;
            //
            // }
            // else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135) && q>100) {
            //
            //     result = 3;
            //
            // }

            return result;
        }
        function d(t) {
            if (t - o > 2) {
                o = t;
                r = --r < 1 ? i: r;
                e(u).css("background-image", "url(" + a + r + "." + c + ")")

            } else if (t - o < -2) {
                o = t;
                r = ++r > i ? 1 : r;
                e(u).css("background-image", "url(" + a + r + "." + c + ")")

            }

        }
        function w(t) {
            if (t - q > 2) {
                q= t;
                r = --r < 1 ? i : r;
                (e(u).css("background-image", "url(" + a +"0"+r + "." + c + ")"))
            }
            else
            if (t - q< -2) {
                q = t;
                r = ++r > i ? 1 : r;
                e(u).css("background-image", "url(" + a +"0"+r + "." + c + ")")
            }
        }
        function v() {
            var t = a + "1." + c;
            e(u).css({"background-image": "url(" + t + ")"});
            e("<img/>").attr("src", t).load(function() {
                // e(u).height("100%").width("100%")
            });
            for (var n = 2; n <= i; n++) {
                t = a + n + "." + c;
                e(u).append("<img src='" + t + "' style='display:none;'>");
                e("<img/>").attr("src", t).css("display", "none").load(function() {
                    l++;
                    if (l >= i) {
                        e(f).removeClass("onLoadingDiv");
                        e(f).text("")
                    }
                })
            }
        }
        function z() {
            var t = a + "02." + c;
            e(u).css({"background-image": "url(" + t + ")","background-repeat":"no-repeat","background-size":"cover"});
            e("<img/>").attr("src", t).load(function() {
                // e(u).height("100%").width("100%")
            });
            for (var n = 2; n <= i; n++) {
                t = a + "0"+n + "." + c;
                e(u).append("<img src='" + t + "' style='display:none;'>");
                e("<img/>").attr("src", t).css("display", "none").load(function() {
                    l++;
                    if (l >= i) {
                        e(f).removeClass("onLoadingDiv");
                        e(f).text("")
                    }
                })
            }
        }
        function m() {
            // e("html").append("<style type='text/css'>.onLoadingDiv{opacity:0.5;text-align:center;font-size:2em;}</style>")
        }
        var r = 1,
            i = 0,
            s = false,
            o = 0,
            q = 0,
            u, a, f = "#VCc",
            l = 1,
            c = "png";
        h(t, n);
        m();
        e(u).html("<div id='VCc' style='height:100%;width:100%;' class='onLoadingDiv '></div>");
        v();
        p();
        z()
    }
})(jQuery)