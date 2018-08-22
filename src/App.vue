<template>
  <div class="wrap"
       v-cloak>
    <div class="container">
      <Header></Header>
      <div class="content">
        <vue-loading type="bars"
                     v-show="showLoading"
                     color="#d9544e"
                     :size="{ width: '50px', height: '50px' }"></vue-loading>
        <!--<Loading v-show="showLoading"></Loading>-->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
          <!--<router-view></router-view>-->
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
// import Loading from "@/components/loading";
import { VueLoading } from 'vue-loading-template'
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    Footer
    VueLoading
  },
  computed: mapGetters(["showLoading"])
}
</script>

<style lang='less' scoped>
//电脑
@media (min-width: 992px) {
  .container {
    max-width: 960px;
    border: 1px solid #e8e8e8;
    margin-top: 48px;
    margin-bottom: 32px;
    padding: 32px 48px;
    border-radius: 4px 4px;
  }
}

//手机
@media (max-width: 992px) {
  .container {
    max-width: 100%;
    margin-bottom: 20px;
    padding: 15px 20px;
  }
}
.container {
  margin-left: auto;
  margin-right: auto;
}
</style>
