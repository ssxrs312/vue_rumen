<template>
    <div>
        <table>
            <tr v-for="blog in blogs" :key="blog.id">
                <td>{{ blog.title }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped>

</style>