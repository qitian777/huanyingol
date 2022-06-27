<template>
  <el-row v-loading="items == null" class="mh">
    <transition name="el-zoom-in-top">
      <el-row v-show="items != null">
        <el-col :span="12" align="left">
          <h2 class="m-0">
            <svg class="icon" aria-hidden="true">
              <use v-if="type === '电影'" xlink:href="#icon-icon-test"></use>
              <use v-else-if="type === '电视剧'" xlink:href="#icon-dianshiju"></use>
              <use v-else-if="type === '动漫'" xlink:href="#icon-dongman"></use>
            </svg>
            {{ type }}
          </h2>
        </el-col>
        <el-col :span="12" align="right" class="pt-3">
          <router-link :to="moreLink">
            更多
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gengduo"></use>
            </svg>
          </router-link>
        </el-col>
        <Items :items="items"></Items>
        <el-col :sm="8" :xs="24" align="left">
          <TopList :top-items="topItems" :type="type"></TopList>
          <slot></slot>
        </el-col>
      </el-row>
    </transition>
  </el-row>
</template>

<script>
import Items from '@/components/Items.vue';
import TopList from './TopList.vue';
export default {
  name: "TypeZone",
  components: { Items, TopList },
  props: ["items", "type", "topItems"],
  computed: {
            moreLink() {
                if (this.type === "电影") {
                    return "/movie"
                } else if (this.type === "电视剧") {
                    return "/drama"
                } else if (this.type === "动漫") {
                    return "/comic"
                }
            }
        }
};
</script>

<style scoped>
.mh {
  min-height: 500px;
}
</style>
