<template>
  <header class="header">
    <!--<router-link to="/"><div class="title">我是头部</div> </router-link>  -->
    <v-title>{{title}}</v-title>
    <h1>
      <a class="site-title"
         rel="author">{{ title }}</a>
    </h1>
  </header>
</template>

<script>
// import bus from '@/util/bus';
// import { mapGetters } from "vuex";
import VTitle from '@/components/title';
export default {
  name: "",
  data () {
    return {
      defaultTitle: 'Wenfs\'s Blog',
    };
  },
  components: {
    VTitle
  },
  computed: {
    title () {
      return this.$store.state.detail.detail.title || this.defaultTitle;
    }

  },
  mounted () {
    // this.title = ;
  }
  // computed: mapGetters(["detail"]),
  // computed: {
  //   title () {
  //     return document.title;
  //   }
  // }
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
  margin-bottom: 0.5rem;
  font-family: inherit;
  line-height: 1.2;
  color: inherit;
}

a {
  color: #111;
}
</style>
