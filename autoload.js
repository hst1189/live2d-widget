try {
    $("<link>").attr({href: "https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/assets/waifu.min.css", rel: "stylesheet", type: "text/css",defer: true}).appendTo('head');
	$("<script>").attr({src: "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js", type: "text/javascript", defer: true}).appendTo('head');
	$("<script>").attr({src: "https://cdn.jsdelivr.net/npm/jquery-ui@1.14.1/dist/jquery-ui.min.js", type: "text/javascript", defer: true}).appendTo('head');
	$("<script>").attr({src: "https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/assets/live2d.min.js", type: "text/javascript", defer: true}).appendTo('head');
	// $("<script>").attr({src: "https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/assets/waifu-tips.min.js", type: "text/javascript", defer: true}).appendTo('head');
    
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"> <span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');

    $.ajax({
        url: 'https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/assets/waifu-tips.min.js',
        dataType: "script",
        cache: false,
        success: function() {
            // 随机生成一个*/
            var id = Math.floor(Math.random() * 100 + 1) - 1;
            live2d_settings['modelId'] = id;
            // live2d_settings['modelTexturesId'] = 0;

            /* 初始化*/ 
            initModel('https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/assets/waifu-tips.json');
        }
    });
    
} catch (err) {
    console.log(err)
    alert(err)
}
