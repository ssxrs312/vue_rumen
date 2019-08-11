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