<template>
  <ul class = "list">
      <li v-for="item in list">
        <router-link :to="{ path:'detail', query:item }">
          <h2><a class="title" >{{item.title}}</a></h2>
        </router-link>
          <span class="time">{{formatDate(item.updated_at)}}</span>
      </li>
  </ul>
</template>
 

<script>
export default {
  name: "list",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$api.issue
        .query()
        .then(response => {
          this.list = response.data;
          this.list.sort(function(a, b) {
            return a.updated_at < b.updated_at ? 1 : -1;
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    formatDate(date) {
      if (date != null) {
        var date = new Date(date);
        return (
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate()
        );
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    // to.meta.keepAlive = false;
    next();
  }
};
</script>
 
 
<style scoped>
.list {
  width: 50%;
  margin: 0 auto;
}
</style>