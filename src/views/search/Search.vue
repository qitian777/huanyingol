<template>
  <el-row class="body-center">
    <el-col :span="24">
      <div>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuojieguo"></use>
          </svg>
          “{{ keyword }}”的搜索结果如下:
        </h2>
      </div>
    </el-col>
    <el-col :span="24">
      <transition-group name="el-zoom-in-top">
        <Items
          v-show="searchItems.length > 0"
          :items="searchItems"
          :sort="5"
          :key="1"
        ></Items>
        <el-empty
          description="很抱歉，没有找到您想要的结果！"
          v-show="!searchItems.length > 0"
          :key="2"
        ></el-empty>
      </transition-group>
    </el-col>
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
      <el-divider></el-divider>
    </el-col>
  </el-row>
</template>

<script>
import Items from "@/components/Items";
import apiItem from '@/api/item';

export default {
  name: "Search",
  components: { Items },
  data() {
    return {
      keyword: this.$route.params.keyword.trim(),
      page: parseInt(this.$route.params.page) || 1,
      searchItems: [],
      total: 1,
    };
  },
  methods: {
    getSearchResult() {
      if (this.keyword == null || this.keyword === "") {
        this.$message({
          showClose: true,
          message: "搜索关键字不能为空！",
          type: "warning",
        });
        return;
      }
      let param = {
        keyword: this.keyword,
        page: this.page,
        isAsc: false,
        size: 12,
        order: "show_time",
      };
      apiItem.getSearchList(param).then(data=>{
        this.searchItems = data.object.itemList;
          this.total = data.object.total;
      })
    },
    currentChange(currentPage) {
      this.$router.push("/search/" + this.keyword + "/" + currentPage);
    },
  },
  created() {
    this.getSearchResult();
  },
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.params !== from.params) {
        this.keyword = this.$route.params.keyword.trim();
        this.page = parseInt(this.$route.params.page) || 1;
        this.getSearchResult();
      }
    },
  },
};
</script>

<style scoped>
.el-pagination {
  margin: 50px 0 70px;
}
</style>
