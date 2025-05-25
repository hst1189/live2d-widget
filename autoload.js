try {
    $("<link>").attr({href: "/assets/waifu.min.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"> <span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({
        url: 'ModelDefine.js',
        dataType: "script",
        cache: false,
        success: function() {
            $.ajax({
                url: '/assets/waifu-tips.min.js',
                dataType: "script",
                cache: false,
                success: function() {
                    $.ajax({
                        url: '/assets/live2d.min.js',
                        dataType: "script",
                        cache: false,
                        success: function() {
                            /* 可直接修改部分参数 在initModel 前添加*/
                            var id = Math.floor(Math.random() * ModelDefine.MODELS.length + 1) - 1;
                            live2d_settings['modelId'] = id;
                            // live2d_settings['modelTexturesId'] = 0;
                        
                            /* 初始化*/ 
                            initModel('/assets/waifu-tips.json');
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
