try {
    $("<link>").attr({href: "//www.grapehut.us.kg/live2d-widget/assets/waifu.min.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"> <span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({
        url: '//www.grapehut.us.kg/live2d-widget/assets/waifu-tips.min.js',
        dataType: "script",
        cache: false,
        success: function() {
           $.ajax({
                url: '//www.grapehut.us.kg/live2d-widget/assets/ModelDefine.js',
                dataType: "script",
                cache: false,
                success: function() {
                    $.ajax({
                        url: '//www.grapehut.us.kg/live2d-widget/assets/live2d.min.js',
                        dataType: "script",
                        cache: false,
                        success: function() {
                            /* 可直接修改部分参数 在initModel 前添加*/
                            // live2d_settings['modelId'] = 5;
                            // live2d_settings['modelTexturesId'] = 1;

                            /* 初始化*/ 
                            initModel('//www.grapehut.us.kg/live2d-widget/assets/waifu-tips.json');
                        }
                    });
                }
            }); 
        }
    });
} catch (err) {
    console.log('[Error] JQuery is not defined.')
    alert('[Error] JQuery is not defined.')
}
