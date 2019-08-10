<template>
    <div>
        <input type="button" @click="show_my_value" value="按钮1">
        <br />
        <input type="button" @click="say_hi('Jim')" value="按钮2">
    </div>
</template>

<script>
    export default {
        name: "SayHi4Method",
        data(){
            return{
                my_value: '默认值',
            }
        },
        methods:{
            show_my_value(){
                alert('my_value: ' + this.my_value);
            },
            say_hi(name){
                alert('hi, '+ name);
            }
        }
    }
</script>

<style scoped>

</style>