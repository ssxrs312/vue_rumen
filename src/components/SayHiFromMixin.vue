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