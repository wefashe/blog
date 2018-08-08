<template>
    <div class="loading" v-show="show">
       {{msg}}
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                show:true,
                msg:" 加载中，请稍后...",
            };
        }
    };
</script>

<style lang='less' scoped>
    .loading{
         text-align: center;
         color: blue;
    }
</style>
