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