<template>
    <div>
        <my-logo :title = "title">
        </my-logo>
        <input type='button' @click='change_title' value='点击修改标题'/><br/>
        <br/>

        <table>
            <tr v-for="blog in blogs" :key="blog.id">
                <td>
                    <router-link :to="{name:'blog',query:{id:blog.id}}">
                        {{ blog.id }}
                    </router-link>
                </td>
                <td @click = 'show_blog(blog.id)'>{{ blog.title }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import MyLogo from '@/components/Logo.vue'

    export default {
        name: "BlogList",
        data(){
            return{
                title: '博客列表页',
                blogs: [
                ]
            }
        },
        mounted(){
            this.$http.get('api/interface/blogs/all').then((response) => {
                console.info(response.body)
                this.blogs = response.body.blogs
            }, (response) => {
                console.error(response)
            });
        },
        methods:{
            show_blog(blog_id){
                this.$router.push({name:'blog',query:{id:blog_id}})
            },
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
    td {
        border-bottom: 1px solid grey;
    }
</style>