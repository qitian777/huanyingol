<template>
    <div class="body-center">
        <div class="sort-list">
            <h5>按地区：</h5>
            <router-link :to="sortUrl('area',null)" :class="attr.area==null?'list-active':''">全部</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','中国')" :class="attr.area==='中国'?'list-active':''">中国</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','美国')" :class="attr.area==='美国'?'list-active':''">美国</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','日本')" :class="attr.area==='日本'?'list-active':''">日本</router-link>
        </div>
        <div class="sort-list">
            <h5>按时间：</h5>
            <router-link :to="sortUrl('year',null)" :class="attr.year==null?'list-active':''">全部</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2021')" :class="attr.year==='2021'?'list-active':''">2021</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2020')" :class="attr.year==='2020'?'list-active':''">2020</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2019')" :class="attr.year==='2019'?'list-active':''">2019</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2018')" :class="attr.year==='2018'?'list-active':''">2018</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2017')" :class="attr.year==='2017'?'list-active':''">2017</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2016')" :class="attr.year==='2016'?'list-active':''">2016</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2015')" :class="attr.year==='2015'?'list-active':''">2015</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2014')" :class="attr.year==='2014'?'list-active':''">2014</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2013')" :class="attr.year==='2013'?'list-active':''">2013</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2012')" :class="attr.year==='2012'?'list-active':''">2012</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2011')" :class="attr.year==='2011'?'list-active':''">2011</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','2010')" :class="attr.year==='2010'?'list-active':''"></router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','更早')" :class="attr.year==='更早'?'list-active':''">更早</router-link>
        </div>
        <div class="sort-list">
            <h5>按风格：</h5>
            <router-link :to="sortUrl('style',null)" :class="attr.style==null?'list-active':''">全部</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','原创')" :class="attr.style==='原创'?'list-active':''">原创</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','漫画改')" :class="attr.style==='漫画改'?'list-active':''">漫画改</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','小说改')" :class="attr.style==='小说改'?'list-active':''">小说改</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','游戏改')" :class="attr.style==='游戏改'?'list-active':''">游戏改</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','特摄')" :class="attr.style==='特摄'?'list-active':''">特摄</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','布袋戏')" :class="attr.style==='布袋戏'?'list-active':''">布袋戏</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','热血')" :class="attr.style==='热血'?'list-active':''">热血</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','穿越')" :class="attr.style==='穿越'?'list-active':''">穿越</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','奇幻')" :class="attr.style==='奇幻'?'list-active':''">奇幻</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','战斗')" :class="attr.style==='战斗'?'list-active':''">战斗</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','搞笑')" :class="attr.style==='搞笑'?'list-active':''">搞笑</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','日常')" :class="attr.style==='日常'?'list-active':''">日常</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','科幻')" :class="attr.style==='科幻'?'list-active':''">科幻</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','萌系')" :class="attr.style==='萌系'?'list-active':''">萌系</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','治愈')" :class="attr.style==='治愈'?'list-active':''">治愈</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','校园')" :class="attr.style==='校园'?'list-active':''">校园</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','少儿')" :class="attr.style==='少儿'?'list-active':''">少儿</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','泡面')" :class="attr.style==='泡面'?'list-active':''">泡面</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','恋爱')" :class="attr.style==='恋爱'?'list-active':''">恋爱</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','少女')" :class="attr.style==='少女'?'list-active':''">少女</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','魔法')" :class="attr.style==='魔法'?'list-active':''">魔法</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','冒险')" :class="attr.style==='冒险'?'list-active':''">冒险</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','历史')" :class="attr.style==='历史'?'list-active':''">历史</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','架空')" :class="attr.style==='架空'?'list-active':''">架空</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','机战')" :class="attr.style==='机战'?'list-active':''">机战</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','神魔')" :class="attr.style==='神魔'?'list-active':''">神魔</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','声控')" :class="attr.style==='声控'?'list-active':''">声控</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','运动')" :class="attr.style==='运动'?'list-active':''">运动</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','励志')" :class="attr.style==='励志'?'list-active':''">励志</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','音乐')" :class="attr.style==='音乐'?'list-active':''">音乐</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','推理')" :class="attr.style==='推理'?'list-active':''">推理</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','社团')" :class="attr.style==='社团'?'list-active':''">社团</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','智斗')" :class="attr.style==='智斗'?'list-active':''">智斗</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','催泪')" :class="attr.style==='催泪'?'list-active':''">催泪</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','美食')" :class="attr.style==='美食'?'list-active':''">美食</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','偶像')" :class="attr.style==='偶像'?'list-active':''">偶像</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','乙女')" :class="attr.style==='乙女'?'list-active':''">乙女</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','职场')" :class="attr.style==='职场'?'list-active':''">职场</router-link>
        </div>
        <div class="sort-list">
            <h5>排&#12288;序：</h5>
            <router-link :to="sortUrl('order','bi_score')" :class="attr.order==='bi_score'?'list-active':''">评分</router-link>
            <span>/</span>
            <router-link :to="sortUrl('order','show_time')" :class="attr.order==='show_time'?'list-active':''">上映时间</router-link>
        </div>
        <el-row>
            <transition-group name="el-zoom-in-top">
                <Items :items="items" :sort="1" v-show="items.length>0" :key="1"></Items>
                <el-empty description="很抱歉，没有找到您想要的结果！" v-show="!items.length>0" :key="2"></el-empty>
            </transition-group>
            <el-col :span="24" align="center">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :current-page.sync="page"
                        @current-change="currentChange"
                        :page-size="12"
                        :total="total">
                </el-pagination>
            </el-col>
        </el-row>
        <el-divider></el-divider>
    </div>
</template>

<script>
    import Items from "@/components/Items";
import apiItem from '@/api/item';

    export default {
        name: "Comic",
        components: {Items},
        data() {
            return {
                items: [],
                attr: {
                    area: this.$route.query.area,
                    style: this.$route.query.style,
                    year: this.$route.query.year,
                    order: this.$route.query.order || 'show_time',
                },
                page: parseInt(this.$route.query.page) || 1,
                total: 0,
            }
        },
        computed: {},
        methods: {
            sortUrl(sort, param) {
                let url = "/comic"
                let urlPlus = this.sortUrlPlus(sort)
                if (param !== null) {
                    if (urlPlus !== "") {
                        url = url + "?" + sort + "=" + param + "&" + urlPlus
                    } else {
                        url = url + "?" + sort + "=" + param
                    }
                } else {
                    if (urlPlus !== "") {
                        url = url + "?" + urlPlus
                    }
                }
                return url
            },
            sortUrlPlus(sort) {
                let urlPlus = ""
                for (let key in this.attr) {
                    if (sort !== key && this.attr[key] != null) {
                        if (urlPlus === "") {
                            urlPlus = key + "=" + this.attr[key]
                        } else {
                            urlPlus = urlPlus + "&" + key + "=" + this.attr[key]
                        }
                    }
                }
                return urlPlus
            },
            attrUrlPlus() {
                return this.sortUrlPlus('page')
            },
            currentChange(currentPage) {
                let url = "/comic?page=" + currentPage
                let urlPlus = this.attrUrlPlus()
                if (urlPlus !== "") {
                    url = url + "&" + urlPlus
                }
                this.$router.push(url)
            },
            getItems() {
                let param=this.attr
                param.isAsc=false
                param.page=this.page
                param.size=12
                param.type="动漫"
                apiItem.getSortList(param).then(data=>{
                    this.items = data.object.itemList
                    this.total = data.object.total
                })
            }
        },
        created() {
            this.getItems()
        },
        watch: {
            '$route'(to, from) { //监听路由是否变化
                if (to.query !== from.query) {
                    this.attr = to.query
                    this.getItems()
                }
            }
        },
    }
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