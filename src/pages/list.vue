<template>
  <ul class="post-list">
    <li class="post-li"
      v-for="item in list">
      <router-link class="post-link"
        :to="{path:'/detail',query:item}">
        {{item.title}}
      </router-link>
      <div class="post-meta">{{formatDate(item.created_at) }}</div>
    </li>
  </ul>
</template>


<script>
// import { utils } from '@/util/utils';
export default {
  name: "list",
  data () {
    return {
      list: []
    };
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      this.$api.issue
        .queryList()
        .then(response => {
          this.list = response.data;
          this.list.sort(function (a, b) {
            return a.created_at < b.created_at ? 1 : -1;
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    // formatDate (date) {
    //   utils.formatDate(date);
    // },
    getTwoBit (n) {
      return (n > 9 ? '' : '0') + n;
    },
    formatDate (time) {
      if (time != null) {
        var date = new Date(time);
        return (
          date.getFullYear() +
          "-" +
          this.getTwoBit(date.getMonth() + 1) +
          "-" +
          this.getTwoBit(date.getDate())
        );
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    // to.meta.keepAlive = false;
    next();
  }
};
</script>


<style lang="less" scoped>
    //电脑
    @media (min-width: 992px) {
        .post-list {
            margin-top: 28px;
        }
    }

    //手机
    @media (max-width: 992px) {
        .post-list {
            margin-top: 20px;
        }
    }

    a:hover {
        text-decoration: none;
        color: #0056b3;
        background-color: transparent;
    }

    li {
        list-style-type: none;
    }

    .post-meta {
        text-align: right;
        font-size: 15px;
    }

    .post-li {
        display: -webkit-flex;
        flex-direction: row;
        justify-content: space-between;
        display: flex;
        margin-bottom: 15px;
    }
</style>
