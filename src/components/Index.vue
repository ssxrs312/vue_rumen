<template>
    <div>
        <p id="pid">demo列表</p>
        <ul>
            <li>
                <router-link to="/hello">Hello</router-link>：显示最基本的Vuejs
            </li>
            <li>
                <router-link to="/">Home</router-link>：返回首页Home
            </li>
            <li>
                <router-link :to="{name:'sayhifromvariable'}">SayHiFromVariable</router-link>：渲染某个变量
            </li>
            <li>
                <router-link :to="{name:'sayhi4method'}">SayHi4Method</router-link>：调用方法
            </li>
            <li>
                <router-link :to="{name:'bloglist'}">BlogList</router-link>：发送http请求
            </li>
            <li>
                <router-link :to="{name:'blog'}">Blog</router-link>：不同页面间参数的传递
            </li>
            <li>
                <router-link :to="{name:'twowaybinding'}">TwoWayBinding</router-link>：双向绑定
            </li>
            <li>
                <router-link :to="{name:'forminput'}">FormInput</router-link>：表单的绑定
            </li>
            <li>
                <router-link :to="{name:'formsubmit'}">FormSubmit</router-link>：表单的提交
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    #pid{
        text-align: left;
    }
    ul{
        text-align: left;
    }
</style>