<template>
  <el-row class="body-center">
    <el-col :span="24" :sm="16" class="p-r">
      <h1>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mingcheng"></use>
        </svg>
        &nbsp;{{ item.name }}
      </h1>
      <el-row style="margin-bottom: 100px">
        <el-col :span="6">
          <img :src="item.poster" alt="" class="poster" />
        </el-col>
        <el-col :span="18">
          <ul>
            <li v-show="item.area !== ''">
              <b>地区：</b><span>{{ item.area }}</span>
            </li>
            <li v-show="item.number !== 0">
              <b>集数：</b><span>{{ item.number }}</span>
            </li>
            <li v-show="item.style !== ''">
              <b>风格：</b><span>{{ item.style }}</span>
            </li>
            <li v-show="item.originName !== ''">
              <b>原名：</b><span>{{ item.originName }}</span>
            </li>
            <li v-show="item.alias !== ''">
              <b>别名：</b><span>{{ item.alias }}</span>
            </li>
            <li v-show="item.showTime !== ''">
              <b>上映时间：</b><span>{{ item.showTime }}</span>
            </li>
            <li v-show="item.biScore !== 0">
              <b>B站评分：</b><span>{{ item.biScore }}</span>
            </li>
            <li>
              <b>收藏：</b>
              <span @click="storeUp">
                <svg class="icon" aria-hidden="true">
                  <use v-if="stored" xlink:href="#icon-jushoucang"></use>
                  <use v-else xlink:href="#icon-shoucang2"></use>
                </svg>
              </span>
            </li>
          </ul>
        </el-col>
        <el-col :span="24">
          <div class="pattern">
            <h3>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jianjie2"></use>
              </svg>
              剧情简介：
            </h3>
            <span
              v-text="item.introduction === '' ? '暂无简介' : item.introduction"
            ></span>
          </div>
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><img src="/images/bl.ico" alt="" />B站 </span>
              <a :href="item.biUrl">点我播放</a>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label"><img src="/images/yk.ico" alt="" />优酷 </span>
              <a>暂无</a>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label"><img src="/images/tx.ico" alt="" />腾讯 </span>
              <a>暂无</a>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="12">
          <h3>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mingxing"></use>
            </svg>
            主演：
          </h3>
          <div class="line-feed" v-html="item.star === '' ? '暂无信息' : item.star"></div>
        </el-col>
        <el-col :span="12">
          <h3>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-STAFF_FILE_L"></use>
            </svg>
            STAFF:
          </h3>
          <div class="line-feed" v-html="item.staff === '' ? '暂无信息' : item.staff">
            暂无信息
          </div>
        </el-col>
        <el-col :span="24" style="margin-top: 60px">
          <hr />
          <div class="my-comment">
            <img src="/images/tx.jpeg" alt="" class="img-flex" />
            <div style="flex-grow: 3; padding: 0 10px">
              <el-rate v-model="score" :colors="colors"> </el-rate>
              <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入评论,限200字。若已发表过评论，旧评论会被替换！"
                v-model="view"
                style="margin-top: 10px"
              >
              </el-input>
              <el-button type="primary" round class="comment-button" @click="addComment"
                >提交</el-button
              >
            </div>
          </div>
          <div class="my-comment" v-for="comment in comments">
            <img :src="'/images/' + comment.picture" alt="" class="img-flex" />
            <div style="flex-grow: 3; padding: 0 10px">
              <b class="comment-user" v-if="user.username === comment.username">{{
                comment.username
              }}</b>
              <el-popconfirm
                v-else
                title="是否申请好友？"
                @confirm="beFriend(comment.username)"
              >
                <b slot="reference" class="comment-user">{{ comment.username }}</b>
              </el-popconfirm>
              <el-rate
                v-model="comment.score"
                disabled
                :colors="colors"
                style="margin: 5px 0"
              >
              </el-rate>
              <span>{{ comment.view }}</span>
            </div>
          </div>
          <div align="center" style="margin-top: 70px">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="total"
              :page-size="20"
              :current-page="currentPage"
              @cuechange="getComments"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <Items :items="similarItems" :sort="2"></Items>
  </el-row>
</template>

<script>
import Items from "@/components/Items";
import { mapState } from "vuex";
import apiItem from "@/api/item";
import apiColl from "@/api/userColl";
import apiComment from "@/api/comment";
import apiFriend from "@/api/friend";
import { successInfo, warningInfo } from "@/util/info";

export default {
  name: "Detail",
  components: { Items },
  data() {
    return {
      currentPage: 1,
      total: 0,
      comments: [],
      score: null,
      value: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      view: "",
      item: {},
      similarItems: [],
      stored: false,
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["user", "isLogged"]),
  },
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.params.id !== from.params.id) {
        this.id = to.params.id;
        this.getDetail();
      }
    },
  },
  methods: {
    getDetail() {
      apiItem.getDetail({ id: this.id }).then((data) => {
        this.item = data.object.detailItem;
        this.similarItems = data.object.similarItems;
      });
    },
    checkStored() {
      if (sessionStorage.getItem("isLogged")) {
        apiColl.checkColl({ itemId: this.id }).then((data) => {
          if (data != null) {
            this.stored = data.object > 0;
          }
        });
      }
    },
    storeUp() {
      if (!sessionStorage.getItem("isLogged")) {
        this.$router.push("/login");
      } else {
        if (this.stored) {
          apiColl.deleteColl({ itemId: this.id }).then((data) => {
            if (data.code == 200) {
              this.stored = false;
            }
          });
        } else {
          apiColl.addColl({ itemId: this.id }).then((data) => {
            if (data.code == 200) {
              this.stored = true;
            }
          });
        }
      }
    },
    addComment() {
      if (!sessionStorage.getItem("user")) {
        this.$router.push("/login");
        return;
      }
      if (
        this.score == null ||
        this.score == 0 ||
        this.view.trim() === "" ||
        this.view.trim().length > 200
      ) {
        this.$message({
          message: "请根据提示输入评论并打分",
          type: "warning",
        });
        return;
      }
      let params = {
        itemId: this.id,
        score: this.score,
        view: this.view,
      };
      apiComment.publishComment(params).then((data) => {
        if (data.code == 200) {
          this.score = null;
          this.view = "";
          this.getComments();
        }
      });
    },
    getComments() {
      let param = {
        itemId: this.id,
        page: this.currentPage,
        size: 20,
        order: "update_time",
        isAsc: false,
      };
      apiComment.getCommentList(param).then((res) => {
        if (res.code == 200) {
          this.total = res.object.total;
          this.comments = res.object.comments;
        }
      });
    },
    beFriend(username) {
      if (!sessionStorage.getItem("user")) {
        this.$router.push("/login");
        return;
      }
      apiFriend.checkUser({ friendName: username }).then((data) => {
        if (data.object == 0) {
          let msgObj = {};
          // msgObj.to = this.currentSession.username;
          msgObj.to = username;
          msgObj.apply = 1;
          msgObj.content = this.user.username + " 请求加你为好友";
          this.$store.state.stomp.send("/wbs/chat", {}, JSON.stringify(msgObj));
          successInfo("申请已发送！");
        } else if (data.object == -1) {
          warningInfo("用户不存在！");
        } else if (data.object > 0) {
          warningInfo("你们已是好友！");
        }
      });
    },
  },
  created() {
    this.getDetail();
    this.getComments();
    this.checkStored();
  },
};
</script>

<style scoped>
/deep/ .el-rate__icon {
  font-size: 25px;
}

.comment-user:hover {
  cursor: pointer;
}
.my-comment {
  display: flex;
  margin-top: 20px;
  position: relative;
}

.comment-button {
  position: absolute;
  right: 20px;
  bottom: 10px;
}

.img-flex {
  width: 38px;
  height: 38px;
  border-radius: 19px;
  flex-grow: 0;
}

.poster {
  width: 100%;
}

.p-r {
  padding-right: 20px;
}

ul {
  padding-left: 30px;
  margin-top: 0;
}

ul > li {
  list-style: none;
  line-height: 150%;
  padding-bottom: 5px;
}

.el-tabs {
  margin-top: 30px;
}

.el-tabs img {
  width: 16px;
  margin-right: 5px;
}

/deep/ .el-tabs__item {
  font-size: 18px !important;
  font-weight: bold;
}

.el-tabs a {
  text-align: center;
  display: block;
  width: 80px;
  padding: 8px 10px;
  border: 1px solid #09bb07;
  border-radius: 12px;
  color: #09bb07;
}

.el-tabs a:hover {
  background: #09bb07;
  color: #ffffff;
}

.line-feed {
  white-space: pre-wrap;
  padding-left: 70px;
}

.pattern {
}
</style>
