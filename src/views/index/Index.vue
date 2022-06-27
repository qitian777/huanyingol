<template>
  <el-row>
    <el-col :span="24" align="center">
      <div class="index-body">
        <carousel></carousel>
        <el-divider></el-divider>
        <TypeZone :items="obj.movies" :top-items="obj.topMovies" type="电影">
            <slot><MovieTypes></MovieTypes></slot>
        </TypeZone>
        <el-divider></el-divider>
        <TypeZone :items="obj.dramas" :top-items="obj.topDramas" type="电视剧">
            <slot><DramaTypes></DramaTypes></slot>
        </TypeZone>
        <el-divider></el-divider>
        <TypeZone :items="obj.animations" :top-items="obj.topAnimations" type="动漫">
            <slot><ComicTypes></ComicTypes></slot>
        </TypeZone>
        <el-divider></el-divider>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import TypeZone from "./components/TypeZone.vue";
import ComicTypes from "./components/ComicTypes.vue";
import DramaTypes from "./components/DramaTypes.vue";
import MovieTypes from "./components/MovieTypes.vue";
import apiItem from "@/api/item";

export default {
  name: "Index",
  components: { Carousel, TypeZone, ComicTypes, DramaTypes, MovieTypes },
  data() {
    return {
      obj: {},
    };
  },
  methods: {
    getIndex() {
      apiItem.getIndex().then((data) => {
        this.obj = data.object;
      });
    },
  },
  created() {
    this.getIndex();
  },
};
</script>

<style scoped></style>
