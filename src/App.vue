<template>
    <div class="wrap">
        <Header></Header>
        <div class="content">
            <Loading v-show="showLoading"></Loading>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    Footer,
    Loading
  },
  computed: mapGetters(["showLoading"])
};
</script>

<style lang='less' scoped>
.wrap {
  width: 80%;
  margin: 0 auto;
  padding: 5px 5px;
  background-color: #fff;
}
.content {
  border: 1px solid #d1d5da;
  border-radius: 3px;
  border-color: #c0d3eb;
}
</style>
