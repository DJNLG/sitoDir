(function(e) {
    e.fn.extend({
        vc3dEye: function(t) {
            new e.vc3dEye(this, t);
            return
        }
    });
    e.vc3dEye = function(t, n) {
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
            });
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
                    if (s == true) d(t.pageX - this.offsetLeft);
                    else q = t.pageX - this.offsetLeft;
                    var dy1 = startY.pageY - endY.pageY;
                    var dx1 = endX.pageX - startX.pageX;
                    switch (direction){
                        case 0:
                            break;

                        case 1:
                            // alert("a");
                            if (s == true) w(t.pageY-this.offsetTop);
                            else  q = e.pageY-this.offsetTop;
                            break;
                        case 4:
                            $(`#handle`).hide();
                            $(`#handle2`).hide();
                            $(`#handle3`).show();
                            $("#myCar").css({"opacity":"0"});
                            $("#myCar2").css({"opacity":"1"});

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
            var result = 0;
            //如果滑动距离太短
            if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                return result;
            }
            var angle = GetSlideAngle(dx, dy);

            if (angle >=-110 && angle <= -70 ) {
                result = 4;
            }
            return result;

        }
        function d(t) {
            if (o - t > 2) {

                o = t;
                r = --r < 1 ? i: r;
                e(u).css("background-image", "url(" + a + r + "." + c + ")")
        if(15> r >=1 ||r > 48 && r<60){console.log(`b`)}
                // if(r > 48 && r<60 ||15> r >1){console.log(`b`)}
               $(`#handle`).attr(`class`,"screen__dian"+r)
               $(`#handle2`).attr(`class`,"screen__gt"+r)
            } else if (o - t < -2) {
                o = t;
                r = ++r > i ? 1 : r;
                e(u).css("background-image", "url(" + a + r + "." + c + ")")
                $(`#handle`).attr(`class`,"screen__dian"+r)
                $(`#handle2`).attr(`class`,"screen__gt"+r)
            }
        }
        // function w(t) {
        //         if (t - q > 2) {
        //             q= t;
        //             r = --r < 1 ? i : r;
        //             (e(u).css("background-image", "url(" + a +"0"+r + "." + c + ")"))
        //         }
        //         else
        //             if (t - q< -2) {
        //             q = t;
        //             r = ++r > i ? 1 : r;
        //                 e(u).css("background-image", "url(" + a +"0"+r + "." + c + ")")
        //         }
        // }
        function v() {
            var img_a= [];
            for (i=0 ;i<=59; i++){
                var t = a + i+"." + c;
                img_a.push(t);
            }
            var ref = ""
            var count=0;
            var num =30
            var t= 300
            var speed= 30;

            function setDeceleratingTimeout(callback, factor, times)
            {
                var internalCallback = function(tick, counter) {
                    return function() {
                        if (--tick >= 0) {
                            window.setTimeout(internalCallback, ++counter * factor);
                            callback();
                        }
                    }
                }(times, 10);

                window.setTimeout(internalCallback, factor);
            };
            var ref=setInterval(function () {
                count++;
                if (count == 35){
                    count = 35;
                    clearInterval(ref)
                    setDeceleratingTimeout(function(){
                        count++;
                        console.log(count)
                        e(u).css({"background-image": "url(" + img_a[count] + ")"});

                    }, 5, 12);
                }
                e(u).css({"background-image": "url(" + img_a[count] + ")"});
            },num)


            // e("<img/>").attr("src", t).load(function() {
            //     // e(u).height("156%").width("130%")
            // });
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
            var t = a + "047." + c;
            e(u).css({"background-image": "url(" + t + ")","background-repeat":"no-repeat","background-size":"cover"});
            e("<img/>").attr("src", t).load(function() {
                // e(u).height("156%").width("130%")
            });
            for (var n = 2; n <= i; n++) {
                t = a + "0"+n + "." + c;
                console.log(t)
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
            e("html").append("<style type='text/css'>.onLoadingDiv{background:url(../images/bg.jpg);background-size:cover ;opacity:1;text-align:center;font-size:2em;font:color:#000000;}</style>")
        }
        var r = 47,
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
        z();
        p();
        v()
    }
})(jQuery)