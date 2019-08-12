# Table of Contents

* [1 新建一个页面Index](#1-新建一个页面index)
* [2 显示最基本的Vuejs](#2-显示最基本的vuejs)
* [3 渲染某个变量](#3-渲染某个变量)
* [4 调用方法](#4-调用方法)
* [5 发送http请求](#5-发送http请求)
* [6 不同页面间参数的传递](#6-不同页面间参数的传递)
* [7 路由](#7-路由)
* [8 使用样式](#8-使用样式)
* [9 双向绑定](#9-双向绑定)
* [10 表单的绑定](#10-表单的绑定)
* [11 表单的提交](#11-表单的提交)
* [12 组件](#12-组件)
* [13 mixin](#13-mixin)
* [14 vuex](#14-vuex)
* [15 生命周期](#15-生命周期)
* [16 参考资料](#16-参考资料)




# 1 新建一个页面Index

- src/components目录下新建Index.vue
- router.js的routers中设置index的路由
- App.vue中router-link to指向index的路径

**Index.vue**

![image-20190810184112602](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpc67qcj30gq096dgv.jpg)

**router.js**

![image-20190810184230005](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpd05luj30hk0hfwha.jpg)

**App.vue**

![image-20190810184007131](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpe06umj30do04tmyc.jpg)



# 2 显示最基本的Vuejs

- 新建components/Hello.vue
- 在components/Index.vue中router-link to指向Hello的路径
- Hello的路径在router.js中设置，router.js的routers中设置Hello的路由
- 浏览器中测试效果

**Hello.vue**

![image-20190810185039429](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpf0lykj309y0apaaz.jpg)

**Index.vue**

![image-20190810185056255](http://ww2.sinaimg.cn/large/006tNc79ly1g5utpfvg1cj30fn09ewfj.jpg)

**router.js**

![image-20190810185123032](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpg80lpj30j80j5q69.jpg)

**浏览器**

![image-20190810185153329](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpgp666j30i2061t9e.jpg)

微调，让内容居左

![image-20190810185517200](http://ww2.sinaimg.cn/large/006tNc79ly1g5utphnox8j30jw07ndgo.jpg)

解决方案，Index.vue设置样式

![image-20190810185600551](http://ww3.sinaimg.cn/large/006tNc79ly1g5utpi2lshj30gj0bwabd.jpg)

设置后效果如下

![image-20190810185652344](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpior3cj30hc06h74y.jpg)



# 3 渲染某个变量

- 新建components/SayHiFromVariable.vue
- 在components/Index.vue中router-link to指向SayHiFromVariable的路径
- hello的路径在router.js中设置，router.js的routers中设置SayHiFromVariable的路由
- 浏览器中测试效果

**SayHiFromVariable.vue**

![image-20190810190109202](http://ww3.sinaimg.cn/large/006tNc79ly1g5utpj1oyej30bd09fdgt.jpg)

**Index.vue**，这里用的是name进行路由，所以需要:to。这也说明了即可以用path链接，也可以用那么链接。path和name的设置在router.js

![image-20190810190129566](http://ww2.sinaimg.cn/large/006tNc79ly1g5utpji4okj30l70dgac6.jpg)

**router.js**

![image-20190810190306913](http://ww2.sinaimg.cn/large/006tNc79ly1g5utpkgwjej30hu0iftbu.jpg)

**浏览器**

![image-20190810190645767](http://ww2.sinaimg.cn/large/006tNc79ly1g5utpldsz7j30hh07q0tv.jpg)

![image-20190810190653491](http://ww4.sinaimg.cn/large/006tNc79ly1g5utply5ljj30gx04z0td.jpg)



# 4 调用方法

- 新建components/SayHi4Method.vue
- 在components/Index.vue中router-link to指向SayHi4Method的路径
- SayHi4Method的路径在router.js中设置，router.js的routers中设置SayHi4Method的路由
- 浏览器中测试效果

**SayHi4Method.vue**

![image-20190810190932485](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpmcr64j30ep0cqq4q.jpg)

**Index.vue**

![image-20190810190954838](http://ww1.sinaimg.cn/large/006tNc79ly1g5utpmta36j30l608jjt7.jpg)

**router.js**

![image-20190810191031703](http://ww2.sinaimg.cn/large/006tNc79ly1g5utpnouukj30fj025gmd.jpg)

![image-20190810191039173](http://ww1.sinaimg.cn/large/006tNc79ly1g5utponqf0j307g026dfx.jpg)

**浏览器**

![image-20190810191118407](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpp73v6j30k70610tb.jpg)

![image-20190810191134830](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpq3eoij30fb05twf4.jpg)

![image-20190810191147029](http://ww4.sinaimg.cn/large/006tNc79ly1g5utpqj4fxj30gy05vq3i.jpg)

# 5 发送http请求

- 新建components/BlogList.vue
- 在components/Index.vue中router-link to指向BlogList的路径
- BlogList的路径在src/router.js中设置，router.js的routers中设置SayHi4Method的路由
- 安装vue-resource并在src/main.js中引用
- 新建vue_rumen/vue.config.js，并在其中做跨域配置
- 浏览器中测试效果

**BlogList.vue**

![image-20190811081053656](http://ww2.sinaimg.cn/large/006tNc79ly1g5vgjdwcwmj30gg0cqgni.jpg)

上面的代码中，使用了vue-resource的http请求，vuejs 内置了对发送http请求的支持（需要安装vue-resource）. 只需要在对应页面的script 标签内加上对应的代码就好. http请求的具体语法如下

![image-20190811083859865](http://ww2.sinaimg.cn/large/006tNc79ly1g5vgjeqa3tj30m60asjsn.jpg)

还有一些代码，具体的解释，如下

![image-20190811084134280](http://ww4.sinaimg.cn/large/006tNc79ly1g5vgjfaz6ij30lm0guq6g.jpg)

![image-20190811084552644](http://ww1.sinaimg.cn/large/006tNc79ly1g5vgjfn20aj30kq0bywg6.jpg)

**Index.vue**

![image-20190811081152903](http://ww4.sinaimg.cn/large/006tNc79ly1g5vgjg5ejcj30mc09qtay.jpg)

**router.js**

![image-20190811081332405](http://ww3.sinaimg.cn/large/006tNc79ly1g5vgjgl75vj30jt073wgl.jpg)

![image-20190811081355061](http://ww4.sinaimg.cn/large/006tNc79ly1g5vgjh6sfwj30ei032aa5.jpg)

**安装vue-resource**

```
npm install vue-resource --save
```

安装后在package.json可以看见

![image-20190811081845013](http://ww1.sinaimg.cn/large/006tNc79ly1g5vgji2ap4j307u02wwer.jpg)

**main.js**

![image-20190811081902477](http://ww1.sinaimg.cn/large/006tNc79ly1g5vgjiig1dj309d078wfa.jpg)

**vue.config.js**

![image-20190811082703521](http://ww1.sinaimg.cn/large/006tNc79ly1g5vgjiwiptj30kb068gmp.jpg)

最开始创建了config/index.js，结果报错404，后来换成了vue.config.js中设置跨域，就没问题了。说明vue3.x需要在vue.config.js中设置跨域。

![image-20190811084856597](http://ww1.sinaimg.cn/large/006tNc79ly1g5vgjk0q3fj30m508gta4.jpg)

**浏览器**

![image-20190811084804523](http://ww2.sinaimg.cn/large/006tNc79ly1g5vgjky7haj311k0h50ys.jpg)

补充：发送post请求

![image-20190811085650122](http://ww1.sinaimg.cn/large/006tNc79ly1g5vgjlu9n1j30ik0fqwgb.jpg)

# 6 不同页面间参数的传递

- 新建components/Blog.vue
- 在components/Index.vue中router-link to指向Blog的路径
- Blog的路径在src/router.js中设置，router.js的routers中设置Blog的路由
- 浏览器中测试效果

这个单元主要是针对参数传递，前置一个知识点

![image-20190811101957801](http://ww4.sinaimg.cn/large/006tNc79ly1g5vj64ro3ij30gj06xt9o.jpg)

**Blog.vue**，新增一个Vue页面，用于显示博客详情

```vue
<template>
    <div>
        <div>
            <p>{{ blog.title }}</p>
            <p>{{ blog.created_at }}</p>
            <div>
                {{ blog.body }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        data(){
            return{
                blog:{}
            }
        },
        mounted(){
            this.$http.get('api/interface/blogs/show?id='+this.$route.query.id).then((response) => {
                this.blog = response.body.result
            },(response) => {
                console.error(response)
            })
        }
    }
</script>

<style scoped>

</style>
```

![image-20190811102205431](http://ww2.sinaimg.cn/large/006tNc79ly1g5vj657dwpj30kv048mxy.jpg)

this.$route是页面跳转的意思，query.id是根据url地址中的id参数进行跳转，比如?id=1234。所以等下测试的时候，在地址栏中带上?id=1234即可获得查询结果

**Index.vue**

```vue
<template>
    <div>
        <p id="pid">demo列表</p>
        <ul>
            <li>
                <router-link :to="{name:'blog'}">Blog</router-link>：不同页面间参数的传递
            </li>
        </ul>

    </div>
</template>

```

**router.js**

```js

import Blog from '@/components/Blog.vue'


export default new Router({
  
  routes: [
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    ]
})

```

**浏览器**，需要带参数

![image-20190811094346308](http://ww4.sinaimg.cn/large/006tNc79ly1g5vj65p9lwj30pf081ta8.jpg)

如果不带参数，没有?id=1234时会报错404。在没有参数的情况下，id=undefined，id没有定义

![image-20190811094452930](http://ww3.sinaimg.cn/large/006tNc79ly1g5vj664z12j311607gwh1.jpg)

**v-html**

在上面页面中，可以看见html元素<p>等，v-html可以过滤html元素。比如在Blog.vue中修改

```vue
<template>
    <div>
        <div>
            <p>{{ blog.title }}</p>
            <p>{{ blog.created_at }}</p>
            <div v-html="blog.body">
                {{ blog.body }}
            </div>
        </div>
    </div>
</template>
```

**浏览器**

![image-20190811095221614](http://ww3.sinaimg.cn/large/006tNc79ly1g5vj66lz7bj30kr08iq4c.jpg)

**修改博客列表页--跳转方式1: 使用事件**

BlogList.vue

```vue
<template>
    <div>
        <table>
            <tr v-for="blog in blogs" :key="blog.id">
                <td @click = 'show_blog(blog.id)'>{{ blog.title }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
      ...
        methods:{
            show_blog(blog_id){
                this.$router.push({name:'blog',query:{id:blog_id}})
            }
        }
    }
</script>

<style scoped>
    td {
        border-bottom: 1px solid grey;
    }
</style>
```

![image-20190811102617937](http://ww1.sinaimg.cn/large/006tNc79ly1g5vj67rk5nj30kv06qabs.jpg)

this.$router.push({name:'blog',query:{id:blog_id}})，让vue跳转到name=blog的页面，参数是id=blog_id

**浏览器**，点击列表页中的任意一条，都会跳转到Blog页，于是就实现了不同页面间的参数传递

从bloglist页面点击后，跳转到blog页面，并带有参数?id=1852

说明this.$router.push可以实现页面跳转，并传递参数

![image-20190811101348026](http://ww3.sinaimg.cn/large/006tNc79ly1g5vj68h8odj30kn0bwjud.jpg)

![image-20190811101424959](http://ww3.sinaimg.cn/large/006tNc79ly1g5vj68wgxkj30nx0az0v2.jpg)

**修改博客列表页--跳转方式2: 使用v-link**

BlogList.vue

```vue
<template>
    <div>
        <table>
            <tr v-for="blog in blogs" :key="blog.id">
                <td>
                    <router-link :to="{name:'blog',query:{id:blog.id}}">
                        {{ blog.id }}
                    </router-link>
                </td>
               	...
            </tr>
        </table>
    </div>
</template>
```

**浏览器**，点击列表上的任意一个id，会跳转到Blog页面

从bloglist页面点击id后，跳转到blog页面，并带有参数?id=1852。

说明v-link也可以实现页面跳转，并传递参数

![image-20190811101700074](http://ww1.sinaimg.cn/large/006tNc79ly1g5vj69gc7vj30ma0d9n11.jpg)

![image-20190811101722178](http://ww4.sinaimg.cn/large/006tNc79ly1g5vj69vmi4j30p20biwgw.jpg)

# 7 路由

假如某个url跳转到`/#/blog?id=3`这个地址 ，那么，这个路由会跳转到blog，参数id=3。具体的设置如下

![image-20190811153428451](http://ww1.sinaimg.cn/large/006tNc79ly1g5vs6f515zj30i40bqq3w.jpg)

假如某个url跳转到`/#/blog/3` 这个url，那么这个路由会跳转到blog，参数是3。具体的设置如下

![image-20190811153607451](http://ww2.sinaimg.cn/large/006tNc79ly1g5vs6g70foj30gz0c9wfg.jpg)

以上2种情况，可以概况下：Vue的路由中,参数获取有两种方式: query 和 params，根据路由获得参数。

![image-20190811153755648](http://ww1.sinaimg.cn/large/006tNc79ly1g5vs6gwgsij30b50gkgmx.jpg)

# 8 使用样式

![image-20190811153817262](http://ww3.sinaimg.cn/large/006tNc79ly1g5vs6hdvlyj30a60fl0tl.jpg)

![image-20190811153827694](http://ww4.sinaimg.cn/large/006tNc79ly1g5vs6ht27mj30bi0gr75f.jpg)

# 9 双向绑定

v-model指令，可以实现输入=输出的双向绑定。如下

![image-20190811160016109](http://ww4.sinaimg.cn/large/006tNc79ly1g5wnbck3klj307r0buaas.jpg)

- 新建components/TwoWayBinding.vue
- 在components/Index.vue中router-link to指向TwoWayBinding的路径
- TwoWayBinding的路径在src/router.js中设置，router.js的routers中设置TwoWayBinding的路由
- 浏览器中测试效果

**TwoWayBinding.vue**

```vue
<template>
    <div>
        <p>页面上的值：{{ my_value }}</p>
        <p> 通过视图层，修改my_value: </p>
        <input v-model="my_value" style='width: 400px'/>

        <hr />
        <input type="button" @click = "change_my_value_by_code()" value="通过控制代码修改my_value">
        <hr />
        <input type="button" @click = "show_my_value()" value="显示代码中的my_value">
    </div>
</template>

<script>
    export default {
        name: "TwoWayBinding",
        data(){
            return{
                my_value: '默认值',
            }
        },
        methods:{
            show_my_value(){
                alert("my_value:" + this.my_value)
            },
            change_my_value_by_code(){
                this.my_value += ", 在代码中做修改, 666."
            }
        }
    }
</script>

<style scoped>

</style>
```

**Index.vue**

```vue
<template>
    <div>
        <p id="pid">demo列表</p>
        <ul>
            
            <li>
                <router-link :to="{name:'twowaybinding'}">TwoWayBinding</router-link>：双向绑定
            </li>
        </ul>

    </div>
</template>
```

**router.js**

```js
...
import TwoWayBinding from '@/components/TwoWayBinding.vue'

export default new Router({
  ...
  routes: [
    ...
    {
      path: '/twowaybinding',
      name: 'twowaybinding',
      component: TwoWayBinding
    },
    ]
})
```

**浏览器**

![image-20190811161436911](http://ww3.sinaimg.cn/large/006tNc79ly1g5wnbd0f2gj30hr09rab0.jpg)

# 10 表单的绑定

- 新建components/FormInput.vue
- 在components/Index.vue中router-link to指向FormInput的路径
- FormInput的路径在src/router.js中设置，router.js的routers中设置FormInput的路由
- 浏览器中测试效果

**ForeInput.vue**

```vue
<template>
    <div>
        input:<input type="text" v-model="input_value"/>
        输入的值：{{ input_value }}
        <hr/>

        text area:<textarea v-model="textarea_value"></textarea>
        输入的值：{{ textarea_value }}
        <hr/>

        radio:
        <input type="radio" v-model="radio_value" value="A" />A,
        <input type="radio" v-model="radio_value" value="B" />B,
        <input type="radio" v-model="radio_value" value="C" />C,
        输入的值：{{ radio_value }}
        <hr/>

        checkbox:
        <input type="checkbox" v-model="checkbox_value" :true-value="true" :false-value="false" />
        输入的值：{{ checkbox_value }}
        <br/>

        select:
        <select v-model="select_value">
            <option v-for="e in options" :value="e.value" :key="e.id">
                {{ e.text }}
            </option>
        </select>
        输入的值：{{ select_value }}
    </div>
</template>

<script>
    export default {
        name: "FormInput",
        data(){
            return{
                input_value:'',
                textarea_value:'',
                radio_value:'',
                checkbox_value:'',
                select_value:'',
                options:[
                    {id:1,text:'红烧肉',value:'A'},
                    {id:2,text:'红烧鱼',value:'B'},
                    {id:3,text:'红烧排骨',value:'C'}
                ]

            }
        }
    }
</script>

<style scoped>

</style>
```

在上面的代码中，需要说明下:true-value="true" :false-value="false"。官方教程有说明，请参考[表单输入绑定](https://cn.vuejs.org/v2/guide/forms.html)，v-model是双向绑定，一方面要绑定变量，变量负责显示在页面，可以理解为v-model的输出，上面的代码中，绑定的是checkbox_value。另一方面要绑定checkbox的值value，当选中checkbox时，这个值value变成了v-model的输入了。一般来说，value是静态字符串，只有1个value，而例子中，value有多个值，所以官方说可以绑定动态值，这就出现了:true-value="true" :false-value="false"。意思就是，输入到v-model中的值有多个，当选择checkbox时为true，当没有选择checkbox时，为false。也可以写成:true-value="1" :false-value="0"

**Index.vue**

```vue
<template>
    <div>
        <p id="pid">demo列表</p>
        <ul>
            ...
            <li>
                <router-link :to="{name:'forminput'}">FormInput</router-link>：表单的绑定
            </li>
        </ul>

    </div>
</template>
```

**router.js**

```js
...
import FormInput from '@/components/FormInput.vue'

export default new Router({
 ...
  routes: [
   ...
    {
      path: '/forminput',
      name: 'forminput',
      component: FormInput
    },
    ]
})
```

**浏览器**

![image-20190812081326046](http://ww1.sinaimg.cn/large/006tNc79ly1g5wnbe0hxxj30ip09mabb.jpg)

# 11 表单的提交

![image-20190812092006351](http://ww1.sinaimg.cn/large/006tNc79ly1g5wnbexj4zj30mr09oabj.jpg)

![image-20190812092400184](http://ww2.sinaimg.cn/large/006tNc79ly1g5wnbfdfqfj30m40ehwg9.jpg)

- 新建components/FormSubmit.vue
- 在components/Index.vue中router-link to指向FormSubmit的路径
- FormSubmit的路径在src/router.js中设置，router.js的routers中设置FormSubmit的路由
- 浏览器中测试效果

**FormSubmit.vue**

```vue
<template>
    <div>
        <textarea v-model="content">

        </textarea>
        <br/>
        <input type="button" @click="submit" value="留言">
    </div>
</template>

<script>
    export default {
        name: "FormSubmit",
        data(){
            return{
                content:''
            }
        },
        methods:{
            submit(){
                this.$http.post('/api/interface/blogs/add_comment',{content:this.content}).then((response) =>{
                    alert("提交成功!, 刚才提交的内容是：" + response.body.content)
                },(response) =>{
                    alert("出错了");
                    console.error(response)
                })
            }
        }
    }
</script>

<style scoped>

</style>
```

**Index.vue**

```vue
<template>
    <div>
        <p id="pid">demo列表</p>
        <ul>
            ...
            <li>
                <router-link :to="{name:'formsubmit'}">FormSubmit</router-link>：表单的提交
            </li>
        </ul>

    </div>
</template>
```

**router.js**

```js
...
import FormSubmit from '@/components/FormSubmit.vue'
...
export default new Router({
  ...
  routes: [
   ...
    {
      path: '/formsubmit',
      name: 'formsubmit',
      component: FormSubmit
    },
    ]
})
```

**浏览器**

![image-20190812093824768](http://ww3.sinaimg.cn/large/006tNc79ly1g5wnbfwg1fj30n206j3zk.jpg)

# 12 组件

先通过一个案例，看下什么是组件

![image-20190812104545057](http://ww1.sinaimg.cn/large/006tNc79ly1g5wqs7zvhqj30hk0h841z.jpg)

![image-20190812104558898](http://ww4.sinaimg.cn/large/006tNc79ly1g5wqs8d3ixj30gw09tmyt.jpg)

![image-20190812104607699](http://ww3.sinaimg.cn/large/006tNc79ly1g5wqs8v7btj30hj0e80ud.jpg)

在上面的案例中，<ol>使用了组件todo-item，组件todo-item在定义时有props、template。props是组件的自定义属性，相当于变量数组。这个数组中可以放入很多属性，相当于变量比如todo，这样页面html在使用组件的时候，根据需要可以让这个属性变量等于需要的某个值。template是模板的意思，相当于自定义的html标签，比如案例中template:'<li>{{ todo.text }}</li>'，说明此时的template是一个li标签，引用这个标签的时候，输出todo.text。

组件最重要的作用：重用。

![image-20190812110113985](http://ww2.sinaimg.cn/large/006tNc79ly1g5wqs9a5owj30ly0e0gnh.jpg)

- 新建components/Logo.vue
- 在页面BlogList.vue中引入组件Logo.vue
- 浏览器中测试效果

**Logo.vue**

```vue
<template>
    <div class="logo">

        <img src="http://img.mm4000.com/file/a/bd/c072117c48_1044.jpg" width="20%" height="20%">
    </div>
</template>

<script>
    export default {
        name: "Logo",

    }
</script>

<style scoped>

</style>
```

**BlogList.vue**

```vue
<template>
    <div>
        <my-logo>
        </my-logo>
        ...
    </div>
</template>

<script>
    import MyLogo from '@/components/Logo.vue'

    export default {
        ...
        components:{
            MyLogo
        }
    }
</script>

<style scoped>
    
</style>
```

![image-20190812112058389](http://ww1.sinaimg.cn/large/006tNc79ly1g5wqsa9t07j30eb055gm2.jpg)

**浏览器**

![image-20190812112146014](http://ww3.sinaimg.cn/large/006tNc79ly1g5wqsarqwqj30pc0l2jxv.jpg)

**向组件中传递参数**

![image-20190812112351070](http://ww4.sinaimg.cn/large/006tNc79ly1g5wqsbp0joj30m30dcab8.jpg)

![image-20190812112524201](http://ww4.sinaimg.cn/large/006tNc79ly1g5wqsc4efjj30me06g0t3.jpg)

**Logo.vue**

```vue
<template>
    <div class="logo">
        <h1>{{ title }}</h1>
        <img src="http://img.mm4000.com/file/a/bd/c072117c48_1044.jpg" width="20%" height="20%">
    </div>
</template>

<script>
    export default {
        name: "Logo",
        props:['title'],
    }
</script>

<style scoped>

</style>
```

**BlogList.vue**

```vue
<template>
    <div>
        <my-logo title = "demo">
        </my-logo>
        ...
    </div>
</template>

<script>
    import MyLogo from '@/components/Logo.vue'

    export default {
       ...
        components:{
            MyLogo
        }
    }
</script>

<style scoped>
    
</style>
```

浏览器

![image-20190812113231305](http://ww4.sinaimg.cn/large/006tNc79ly1g5wqscle53j30pc0jkte7.jpg)

**接收变量**

**BlogList.vue**

```vue
<template>
    <div>
        <my-logo :title = "title">
        </my-logo>
        <input type='button' @click='change_title' value='点击修改标题'/><br/>

        ...
    </div>
</template>

<script>
    import MyLogo from '@/components/Logo.vue'

    export default {
        data(){
            return{
                title: '博客列表页',
            }
        },
        methods:{
            change_title(){
                this.title = '好多文章啊(标题被代码修改过了)'
            }
        },
        components:{
            MyLogo
        }
    }
</script>

<style scoped>
   
</style>
```

**浏览器**

![image-20190812113848172](http://ww4.sinaimg.cn/large/006tNc79ly1g5wqsd35nej30ow0lgjxn.jpg)

# 13 mixin

![image-20190812154522657](http://ww3.sinaimg.cn/large/006tNc79ly1g5wz6o3sdhj30mn05fdgr.jpg)

- 新建mixins/common_hi.js
- 新建components/SayHiFromMixin.vue
- 在components/SayHiFromMixin.vue引用mixins
- 在components/Index.vue中router-link to指向SayHiFromMixin的路径
- SayHiFromMixin的路径在src/router.js中设置，router.js的routers中设置SayHiFromMixin的路由
- 浏览器中测试效果

**common_hi.js**

```js
export default{
    methods:{
        hi(name){
            return "你好, " + name;
        }
    }
}
```

**SayHiFromMixin.vue**

```vue
<template>
    <div>
        {{ hi('from view') }}
    </div>
</template>

<script>
    import CommonHi from '@/mixins/common_hi.js'

    export default {
        name: "SayHiFromMixin",
        mixins : [CommonHi],
        mounted(){
            alert(this.hi('from script code'))
        }
    }
</script>

<style scoped>

</style>
```

![image-20190812162721077](http://ww4.sinaimg.cn/large/006tNc79ly1g5wz6ow8v9j30dq02zjrn.jpg)

另外，在div中使用hi()，没有带this关键字，说明只有在js中调用需要带上this关键字。

**Index.vue**

```vue
<template>
    <div>
        <p id="pid">demo列表</p>
        <ul>
            
            <li>
                <router-link :to="{name:'sayhifrommixin'}">SayHiFromMixin</router-link>：mixin
            </li>
        </ul>

    </div>
</template>
```

**router.js**

```js
...
import SayHiFromMixin from '@/components/SayHiFromMixin.vue'

...

export default new Router({
...
  routes: [
 ...
    {
      path: '/sayhifrommixin',
      name: 'sayhifrommixin',
      component: SayHiFromMixin
    },
    ]
})
```

**浏览器**

![image-20190812162621857](http://ww4.sinaimg.cn/large/006tNc79ly1g5wz6pd6b7j30i006rwf7.jpg)

# 14 vuex

Vuex 是 状态管理工具.

简单的说, Vuex 帮我们管理 "全局变量", 供任何页面在任何时刻使用.

Vuex 非常重要. 不管是大项目还是小项目,都有用到它的时候. 我们必须会用.

**store.js**就是vuex定义的地方

- state：数据的存储，相当于数据池子，状态池
- getters：相当于vue中的计算属性computer，可以筛选、计算。现在没有可以在state后面添加
- mutations：相当于函数，改变state的唯一途径。不能处理异步，只能处理同步
- actions：跟mutations差不多，可以处理异步。提交的是mutations，而不是直接变更状态
- module：模块化，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  
   
  },
  mutations: {  
   
  },
  actions: {  
    
  }
})
```

vue3.x创建的时候store.js就是这样的，假设我们有两个页面: "页面1" 和"页面2" ，共同使用某一个状态，页面1对 "状态" + 1 后, 页面2的值也会发生变化。接下来在store.js中进行配置

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  //状态
    points:10
  },
  mutations: {  //变化,可以认为所有的state都是由mutation来驱动变化的。 也可以认为它是个setter.
    increase(state,data){
        state.points = data ;
    }
  },
  actions: {  //行动，提交的是mutations，而不是直接变更状态
    increaseAction({commit},data){
        commit('increase',data);
    }
  },
  getters:{  //相当于vue中的计算属性computer
    get_points:state =>{
        return state.points
    }
  }
})
```

上面的代码中，

- 在actions中定义提交mutations的方法increaseAction，方法里面的{commit}是es6语法，官方有具体的解释[action使用说明](https://vuex.vuejs.org/zh/guide/actions.html)
- 在mutations中定义改变points的方法increase，有2个参数，第一个是state，第二个是形参

接下来要创建页面1和页面2，步骤如下

- 新建components/ShowCounter1.vue
- 在components/ShowCounter1.vue引用store
- 在components/Index.vue中router-link to指向ShowCounter1的路径
- ShowCounter1的路径在src/router.js中设置，router.js的routers中设置ShowCounter1的路由
- 重复ShowCounter1的步骤创建ShowCounter2.vue
- 浏览器中测试效果

**ShowCounter1.vue**

```vue
<template>
    <div>
        <h1>这个页面是 1号页面</h1>
        {{ points }}
        <br/>

        <input type="button" @click="increase" value="点击增加1"><br/>
        <router-link :to="{name: 'showcounter2'}">计数页面2</router-link>
    </div>
</template>

<script>
    import store from '@/store.js'
    export default {
        name: "ShowCounter1",
        computed:{
            points(){
                return store.getters.get_points;
            }
        },
        methods:{
            increase(){
                store.commit('increase',store.getters.get_points + 1)
            }
        }
    }
</script>

<style scoped>

</style>
```

页面2和上面的代码几乎一样，上面的代码中，使用getters需要在computed中计算，也就是说需要获取state状态是需要computed的，不论这个状态是静态的，或者需要动态赋值的。`store.getters.get_points` 就是通过`getter`获取到 状态“points"的方法。`store.commit('increase', .. )` 则是 通过 increaseAction 这个`action` 来改变 "points"的值。action提交的是mutations，而不是直接变更状态，所以'increase'指的是mutations的方法，后面的参数是给mutations方法的第二个参数传值

**router.js**

```js
...
import ShowCounter1 from '@/components/ShowCounter1.vue'
import ShowCounter2 from '@/components/ShowCounter2.vue'

Vue.use(Router)

export default new Router({
  
  routes: [
   ...
    {
      path: '/showcounter1',
      name: 'showcounter1',
      component: ShowCounter1
    },
    {
      path: '/showcounter2',
      name: 'showcounter2',
      component: ShowCounter2
    },
    ]
})
```

**Index.vue**

```vue
<template>
    <div>
        <p id="pid">demo列表</p>
        <ul>

         <li>
                <router-link :to="{name:'showcounter1'}">ShowCounter1</router-link>：vuex
            </li>
        </ul>

    </div>
</template>
```

**浏览器**

![image-20190812184244290](http://ww4.sinaimg.cn/large/006tNc79ly1g5x3e777npj30fh08iwfa.jpg)

![image-20190812184255627](http://ww3.sinaimg.cn/large/006tNc79ly1g5x3e7ihirj30ht08k0tl.jpg)

# 15 生命周期

![image-20190812190044758](http://ww3.sinaimg.cn/large/006tNc79ly1g5x3x5ruvfj30ff06p0ti.jpg)

# 16 参考资料

[vuejs 教程](http://vue_book.siwei.me/)

[打包和部署](http://vue_book.siwei.me/build_project.html)

[nginx跨域](http://vue_book.siwei.me/nginx_fix_cross_domain_problem.html)

[debug](http://vue_book.siwei.me/how_to_debug.html)

