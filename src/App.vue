<template>
  <div>
    <li class="text" v-for="result in results">{{result.title}}</li>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      results: [],
    };
  },
  mounted: function() {
    this.getPosts();
  },
  methods: {
    getPosts: function() {
      axios
        .get("https://api.github.com/repos/xufei/blog/issues")
        .then(response => {
          this.results = response.data;
        });
      // axios
      //   .get("https://api.github.com/repos/xufei/blog/issues")
      //   .then(function(response) {
      //     console.log(response); //请求正确时执行的代码
      //   })
      //   .catch(function(response) {
      //     console.log(response); //发生错误时执行的代码
      //   });
    }
  }
};
</script>

<style lang='less' scoped>
.text {
  font-size: 25px;
  color: yellow;
  font-family: 'Courier New', Courier, monospace;
}
</style>
