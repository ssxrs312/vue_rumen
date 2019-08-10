

1. 新建一个页面Index

	- src/components目录下新建Index.vue
	- router.js的routers中设置index的路由
	- App.vue中router-link to指向index的路径

Index.vue

![image-20190810184112602](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpc67qcj30gq096dgv.jpg)

router.js

![image-20190810184230005](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpd05luj30hk0hfwha.jpg)

App.vue

![image-20190810184007131](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpe06umj30do04tmyc.jpg)



2. 显示最基本的Vuejs
   - 新建components/Hello.vue
   - 在components/Index.vue中router-link to指向Hello的路径
   - Hello的路径在router.js中设置，router.js的routers中设置Hello的路由
   - 浏览器中测试效果

Hello.vue

![image-20190810185039429](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpf0lykj309y0apaaz.jpg)

Index.vue

![image-20190810185056255](http://ww2.sinaimg.cn/large/006tNc79ly1g5utpfvg1cj30fn09ewfj.jpg)

router.js

![image-20190810185123032](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpg80lpj30j80j5q69.jpg)

浏览器

![image-20190810185153329](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpgp666j30i2061t9e.jpg)

微调，让内容居左

![image-20190810185517200](http://ww2.sinaimg.cn/large/006tNc79ly1g5utphnox8j30jw07ndgo.jpg)

解决方案，Index.vue设置样式

![image-20190810185600551](http://ww3.sinaimg.cn/large/006tNc79ly1g5utpi2lshj30gj0bwabd.jpg)

设置后效果如下

![image-20190810185652344](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpior3cj30hc06h74y.jpg)



3. 渲染某个变量
   - 新建components/SayHiFromVariable.vue
   - 在components/Index.vue中router-link to指向SayHiFromVariable的路径
   - hello的路径在router.js中设置，router.js的routers中设置SayHiFromVariable的路由
   - 浏览器中测试效果

SayHiFromVariable.vue

![image-20190810190109202](http://ww3.sinaimg.cn/large/006tNc79ly1g5utpj1oyej30bd09fdgt.jpg)

Index.vue，这里用的是name进行路由，所以需要:to。这也说明了即可以用path链接，也可以用那么链接。path和name的设置在router.js

![image-20190810190129566](http://ww2.sinaimg.cn/large/006tNc79ly1g5utpji4okj30l70dgac6.jpg)

router.js

![image-20190810190306913](http://ww2.sinaimg.cn/large/006tNc79ly1g5utpkgwjej30hu0iftbu.jpg)

浏览器

![image-20190810190645767](http://ww2.sinaimg.cn/large/006tNc79ly1g5utpldsz7j30hh07q0tv.jpg)

![image-20190810190653491](http://ww4.sinaimg.cn/large/006tNc79ly1g5utply5ljj30gx04z0td.jpg)



4. 调用方法
   - 新建components/SayHi4Method.vue
   - 在components/Index.vue中router-link to指向SayHi4Method的路径
   - SayHi4Method的路径在router.js中设置，router.js的routers中设置SayHi4Method的路由
   - 浏览器中测试效果

SayHi4Method.vue

![image-20190810190932485](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpmcr64j30ep0cqq4q.jpg)

Index.vue

![image-20190810190954838](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpmta36j30l608jjt7.jpg)

router.js

![image-20190810191031703](http://ww2.sinaimg.cn/large/006tNc79ly1g5utpnouukj30fj025gmd.jpg)

![image-20190810191039173](http://ww1.sinaimg.cn/large/006tNc79ly1g5utponqf0j307g026dfx.jpg)

浏览器

![image-20190810191118407](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpp73v6j30k70610tb.jpg)

![image-20190810191134830](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpq3eoij30fb05twf4.jpg)

![image-20190810191147029](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpqj4fxj30gy05vq3i.jpg)

