$(function () {

    getJSTicket(function (config) {
        wxConfig = config
        wx.config({
            debug: false,
            beta: false,
            appId: config.appId,
            timestamp: config.timestamp,
            nonceStr: config.nonceStr,
            signature: config.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
        });

        wx.ready(function () {
            wx.onMenuShareAppMessage(options);
            wx.onMenuShareTimeline(options);
        });
        wx.error(function (res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
    })

});

var options = {
    title: shareTitle,
    desc: shareDesc,
    link: shareLink,
    imgUrl: shareLogo,
    success: function () {

    },
    cancel: function () {

    }
};

var wxConfig = null;

function getJSTicket(callback) {
    var url = window.location.href.split('#')[0]
    $.ajax({
        url: apiUrl + '/wechat/js/config',
        dataType: "json",
        type: "post",
        data: {
            "url": url
        },
        400: function () {
            console.log('用户请求输入参数有误')
        },
        422: function () {
            console.log('用户请求输入参数有误')
        },
        401: function () {
            console.log('认证失败')
        },
        403: function () {
            console.log('认证信息失效')
        },
        500: function () {
            console.log('服务器返回错误')
        }
    }).done(function (response) {
        callback(response)
    })
}


