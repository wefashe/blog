<template>
  <header class="header">
      <router-link to="/"><div class="title">我是头部</div> </router-link>  
  </header>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.title {
  text-align: center;
  font-size: 50px;
  color: red;
  font-weight: bold;
}
</style>
