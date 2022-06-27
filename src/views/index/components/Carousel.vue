<template>
  <el-carousel :interval="3000" type="card" height="200px">
    <el-carousel-item v-for="(item, i) in carouselItems" :key="i">
      <router-link :to="/detail/ + item.id">
        <img :src="item.image" alt="" />
      </router-link>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      carouselItems: [
        { image: "/images/rzdf.jpeg", id: 4355 },
        { image: "/images/sgyy.jpeg", id: 8064 },
        { image: "/images/jz.jpeg", id: 931 },
        { image: "/images/jwyx.jpeg", id: 4950 },
        { image: "/images/wlq.jpeg", id: 19 },
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel__item img {
  height: 100%;
  width: 100%;
}
</style>
