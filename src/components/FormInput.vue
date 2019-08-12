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