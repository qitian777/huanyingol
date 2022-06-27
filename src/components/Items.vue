<template>
  <el-col :span="cols.outer" :xs="cols.outerSm" align="left">
    <el-row>
      <el-col
        :span="cols.sp"
        :sm="cols.spSm"
        :md="cols.spMd"
        v-for="(item, i) in items"
        :key="i"
        class="p1"
      >
        <router-link :to="'/detail/' + item.id">
          <el-card :body-style="{ padding: '0px' }" class="f-p">
            <div class="img_scale">
              <!-- <img :src="item.poster" class="image" /> -->
              <img v-lazy="item.poster" class="image" />
              <span v-show="item.biScore !== 0">{{ item.biScore }}</span>
            </div>
            <div style="padding: 14px">
              <span class="text-over">{{ item.name }}</span>
              <div v-show="sort !== 5" class="time text-over">{{ item.style }}</div>
              <div v-show="sort === 5" class="search-card">
                <span class="time text-over" v-show="item.originName !== ''"
                  >原名：{{ item.originName }}</span
                >
                <span class="time text-over" v-show="item.alias !== ''"
                  >别名：{{ item.alias }}</span
                >
              </div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: "Items",
  props: ["items", "sort"],
  computed: {
    cols() {
      let cols = { outer: 16, sp: 12, outerSm: 24, spMd: 8, spSm: 12, spLg: 8 };
      if (this.sort === 1 || this.sort === 5) {
        cols.outer = 24;
        cols.sp = 12;
        cols.spSm = 8;
        cols.spMd = 6;
      } else if (this.sort === 2) {
        cols.outer = 8;
        cols.sp = 12;
        cols.spMd = 12;
      }
      return cols;
    },
  },
};
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
  height: 17px;
}

.search-card {
  height: 45px;
}

.image {
  width: 100%;
  display: block;
}

.el-card span {
  height: 21px;
}

/*鼠标悬浮时图片放大*/
.img_scale {
  overflow: hidden;
  position: relative;
}

.img_scale img {
  transition: 0.5s;
}

.img_scale img:hover {
  transform: scale(1.2);
}

/*评分*/
.img_scale span {
  position: absolute;
  top: 0;
  right: 0;
  color: #ffffff;
  padding: 0 6px;
  z-index: auto;
  background: #09bb07;
}
</style>
