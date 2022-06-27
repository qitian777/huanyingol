<template>
  <ul class="clear-float">
    <li>
      <h3>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shujupaihangbang"></use>
        </svg>
        {{ type }}排行版
      </h3>
      <router-link :to="moreLink" class="float-right">
        更多
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </router-link>
    </li>
    <li v-for="(item, i) in topItems" :key="i">
      <span :class="i < 3 ? 'number number-top' : 'number'">{{ i + 1 }}</span>
      <router-link :to="'/detail/' + item.id">
        &nbsp;
        <span>{{ item.name }}</span>
        <span class="float-right">{{ item.biScore }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TopList",
  props: ["topItems", "type"],
  computed: {
    moreLink() {
      if (this.type === "电影") {
        return "/movie?order=bi_score";
      } else if (this.type === "电视剧") {
        return "/drama?order=bi_score";
      } else if (this.type === "动漫") {
        return "/comic?order=bi_score";
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0 5px;
  margin: 10px;
}

li {
  margin-bottom: 10px;
}

h3 {
  display: inline;
}

/*排行榜*/
.number {
  background: #f4f3f3;
  padding: 2px 5px;
}

.number-top {
  background: #09bb07;
}
</style>
