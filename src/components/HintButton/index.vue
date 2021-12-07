<template>
    <a herf="#" :title="title">
        <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
</template>
<script>
    export default {
        name:'HintButton',
        props:['title'],
        mounted(){
            console.log(this.$attrs,this.$listeners)
        }
    }
</script>
<style lang="less" scoped>
</style>