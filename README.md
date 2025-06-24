# live2d模型收集+展示

### 版权须知
所有模型均收集自互联网，版权均归原公司/个人所有。您可将资源用于学习、非营利性的网站或项目，不得用于商业使用（付费分发售卖资源、二次修改用于盈利等）。

## Live2d Cubism 2　使用说明

### API接口用法
```
获取所有 - https://live2d-widget-ten.vercel.app/api/models
获取单个 - https://live2d-widget-ten.vercel.app/api/models/数字
```

### HTML直接引用
动态加载 canvas live2d  添加以下3个js (2个jQuery，1个autoload.js)
```
https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
https://cdn.jsdelivr.net/npm/jquery-ui@1.14.1/dist/jquery-ui.min.js
https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/autoload.js
```

### live2d模型
目前共计收录**128**个模型。
* `model`文件夹下是live2d的模型文件，目前已收录**102**种，其中数种模型有可更换皮肤。

模型文件夹的目录大体如下： ※部分模型有所不同。
```txt
+-models（模型文件夹名称）
|__+-texture（模型材质包）
|__|___texture_00.png
|__|___texture_01.png
|__|___....
|__+-motions（模型动作组）
|__+-expression（模型表情组）
|__+-sounds（模型音效）
|__model.json（模型资源分布说明文件）
|__model.moc（模型本体）
```



### 相关链接
* Live2D官方网站： https://www.live2d.com/en/ ； https://live2d.github.io）
* [EYHN/hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d) （向hexo中添加live2d）
* [网页添加 Live2D 看板娘](https://www.fghrsh.net/post/123.html)
* [参考生成API](https://github.com/fghrsh/live2d_api) 
* [Live2dDemo](https://github.com/summerscar/live2dDemo) （live2d模型收集站）


