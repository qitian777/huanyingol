<template>
  <div id="list">
    <ul>
      <li
        v-for="(item, i) in friends"
        :class="{ active: item.username === currentSessionName }"
        v-on:click="changeCurrentSessionName(item.username)"
        :key="i"
      >
        <!--   :class="[item.id === currentSessionId ? 'active':'']" -->

        <img class="avatar" :src="'/images/' + item.picture" alt="" />

        <p class="name">{{ item.username }}</p>
        <el-badge :value="item.unread" class="item" v-show="item.unread != 0"></el-badge>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "list",
  data() {
    return {};
  },
  computed: mapState(["sessions", "currentSessionName", "friends"]),
  methods: {
    changeCurrentSessionName: function (name) {
      this.$store.commit("CHANGE_CURRENT_SESSION_NAME", name);
      this.$store.dispatch("updateState", name);
    },
  },
  mounted() {
    this.$store.dispatch("updateState", this.currentSessionName);
    this.$store.commit("RESET_UNREAD", this.currentSessionName);
  },
};
</script>

<style scoped>
.item {
  position: absolute;
  top: 0;
  right: 0;
}
ul {
  padding-left: 0;
}
li {
  padding: 0 15px;
  border-bottom: 1px solid #292c33;
  cursor: pointer;
  position: relative;
}

li:hover {
  background-color: rgba(255, 255, 255, 0.03);
}

li.active {
  /*注意这个是.不是冒号:*/
  background-color: rgba(255, 255, 255, 0.1);
}

.avatar {
  border-radius: 2px;
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.name {
  display: inline-block;
  margin-left: 15px;
}
</style>
