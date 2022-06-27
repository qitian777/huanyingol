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
            <span>/</span>
            <router-link :to="sortUrl('area','韩国')" :class="attr.area==='韩国'?'list-active':''">韩国</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','英国')" :class="attr.area==='英国'?'list-active':''">英国</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','泰国')" :class="attr.area==='泰国'?'list-active':''">泰国</router-link>
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
            <router-link :to="sortUrl('year','2010')" :class="attr.year==='2010'?'list-active':''">2010</router-link>
            <span>/</span>
            <router-link :to="sortUrl('year','更早')" :class="attr.year==='更早'?'list-active':''">更早</router-link>
        </div>
        <div class="sort-list">
            <h5>按风格：</h5>
            <router-link :to="sortUrl('style',null)" :class="attr.style==null?'list-active':''">全部</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','搞笑')" :class="attr.style==='搞笑'?'list-active':''">搞笑</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','奇幻')" :class="attr.style==='奇幻'?'list-active':''">奇幻</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','战争')" :class="attr.style==='战争'?'list-active':''">战争</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','武侠')" :class="attr.style==='武侠'?'list-active':''">武侠</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','青春')" :class="attr.style==='青春'?'list-active':''">青春</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','都市')" :class="attr.style==='都市'?'list-active':''">都市</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','古装')" :class="attr.style==='古装'?'list-active':''">古装</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','谍战')" :class="attr.style==='谍战'?'list-active':''">谍战</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','经典')" :class="attr.style==='经典'?'list-active':''">经典</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','情感')" :class="attr.style==='情感'?'list-active':''">情感</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','悬疑')" :class="attr.style==='悬疑'?'list-active':''">悬疑</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','励志')" :class="attr.style==='励志'?'list-active':''">励志</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','神话')" :class="attr.style==='神话'?'list-active':''">神话</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','穿越')" :class="attr.style==='穿越'?'list-active':''">穿越</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','年代')" :class="attr.style==='年代'?'list-active':''">年代</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','农村')" :class="attr.style==='农村'?'list-active':''">农村</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','刑侦')" :class="attr.style==='刑侦'?'list-active':''">刑侦</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','剧情')" :class="attr.style==='剧情'?'list-active':''">剧情</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','家庭')" :class="attr.style==='家庭'?'list-active':''">家庭</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','历史')" :class="attr.style==='历史'?'list-active':''">历史</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','军旅')" :class="attr.style==='军旅'?'list-active':''">军旅</router-link>
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
        name: "Drama",
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
                let url = "/drama"
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
                let url = "/drama?page=" + currentPage
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
                param.type="电视剧"
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