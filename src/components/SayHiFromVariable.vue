<template>
    <div>
        {{ my_value }}
    </div>
</template>

<script>
    export default {
        name: "SayHiFromVariable",
        data(){
            return{
                my_value:'你好Vue! 本消息来自于变量'
            }
        }
    }
</script>

<style scoped>
    div{
        text-align: left;
    }
</style>