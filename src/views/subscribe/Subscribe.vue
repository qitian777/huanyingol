<template>
  <div class="body-center">
    <div class="sort-list">
      <h5>类&#12288;型：</h5>
      <router-link
        :to="sortUrl('type', null)"
        :class="type === '电影' ? 'list-active' : ''"
        >电影</router-link
      >
      <span>/</span>
      <router-link
        :to="sortUrl('type', '电视剧')"
        :class="type === '电视剧' ? 'list-active' : ''"
        >电视剧</router-link
      >
      <span>/</span>
      <router-link
        :to="sortUrl('type', '动漫')"
        :class="type === '动漫' ? 'list-active' : ''"
        >动漫</router-link
      >
    </div>
    <div class="sort-list">
      <h5>排&#12288;序：</h5>
      <router-link
        :to="sortUrl('order', null)"
        :class="order === 'show_time' ? 'list-active' : ''"
        >上映时间</router-link
      >
      <span>/</span>
      <router-link
        :to="sortUrl('order', 'update_time')"
        :class="order === 'update_time' ? 'list-active' : ''"
        >更新时间</router-link
      >
    </div>
    <el-row>
      <transition-group name="el-zoom-in-top">
        <Items :items="items" :sort="1" v-show="items.length > 0" :key="1"></Items>
        <el-empty
          description="很抱歉，没有找到您想要的结果！"
          v-show="!items.length > 0"
          :key="2"
        ></el-empty>
      </transition-group>
      <el-col :span="24" align="center">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page.sync="page"
          @current-change="currentChange"
          :page-size="12"
          :total="total"
        >
        </el-pagination>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
import Items from "@/components/Items";
import apiColl from "@/api/userColl";

export default {
  name: "Subscribe",
  components: { Items },
  data() {
    return {
      type: this.$route.query.type || "电影",
      order: this.$route.query.order || "show_time",
      page: parseInt(this.$route.query.page) || 1,
      items: [],
      total: 0,
    };
  },
  methods: {
    sortUrl(attr, val) {
      let url = "/user/subscribe";
      if (attr === "type") {
        if (val == null) {
          if (this.order === "update_time") {
            return url+ "?order=update_time";
          } else {
            return url ;
          }
        } else {
          if (this.order === "show_time") {
            return url + "?type=" + val;
          } else {
            return url + "?type=" + val + "&order=update_time";
          }
        }
      } else if (attr === "order") {
        if (val == null) {
          if (this.type === "电影") {
            return url;
          } else {
            return url + "?type=" + this.type;
          }
        } else {
          if (this.type === "电影") {
            return url + "?order=" + val;
          } else {
            return url + "?type=" + this.type + "&order=" + val;
          }
        }
      }
    },
    currentChange(currentPage) {
      let url = "/user/subscribe?page=" + currentPage;
      if (this.type !== "电影") {
        url = url + "&type=" + this.type;
      }
      if (this.order !== "上映时间") {
        url = url + "&order=" + this.order;
      }
      this.$router.push(url);
    },
    getItems() {
      let param = {
        type: this.type,
        order: this.order,
        isAsc: false,
        page: this.page,
        size: 12,
      };
      apiColl.getCollList(param).then((data) => {
        this.items = data.object.itemList;
        this.total = data.object.total;
      });
    },
  },
  created() {
    this.getItems();
  },
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.query !== from.query) {
        this.order = to.query.order || "show_time";
        this.type = to.query.type || "电影";
        this.page = parseInt(to.query.page) || 1;
        this.getItems();
      }
    },
  },
};
</script>

<style scoped>
h5 {
  display: inline;
  font-size: 18px;
}

.el-pagination {
  margin: 30px 0;
}
</style>
