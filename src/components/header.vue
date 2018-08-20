<template>
    <header class="header">
        <!--<router-link to="/"><div class="title">我是头部</div> </router-link>  -->
        <h1>
            <a class="site-title" rel="author" v-bind:href="url">{{title}}</a>
        </h1>
    </header>
</template>

<script>
    import bus from '@/util/bus';
    export default {
        name: "",
        data() {
            return {
                title: 'Wenfs\'s Blog',
                url: '/'
            };
        },
        // created() {
        //     bus.$on('titie',(e)=>{
        //         this.title=e;
        //     });
        // }
    };
</script>

<style lang='less' scoped>
    //电脑
    @media (min-width: 992px) {
        h1 {
            font-size: 32px;
            border-bottom: 1px solid #e8e8e8;
            padding-bottom: 16px;
        }

    }

    //手机
    @media (max-width: 992px) {
        h1 {
            font-size: 32px;
            border-bottom: 1px solid #e8e8e8;
            padding-bottom: 8px;
        }
    }

    h1 {
        font-weight: normal;
        margin-top: 0;
        margin-bottom: .5rem;
        font-family: inherit;
        line-height: 1.2;
        color: inherit;
    }

    a {
        color: #111;
    }
</style>
