<template>
    <div class="loading">

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
    //电脑
    @media (min-width: 992px) {

    }

    //手机
    @media (max-width: 992px) {

    }
    .loading{
         text-align: center;
         color: blue;
    }
</style>
