<template>
    <div class="wrap">
        <Header></Header>
        <div class="content">
            <Loading></Loading>
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
export default {
  data: function() {
    return {
      isShow: true,
      msg: "Loading..."
    };
  },
  components: {
    Header,
    Footer,
    Loading
  }
};
</script>

<style lang='less' scoped>
.wrap {
  width: 60%;
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
