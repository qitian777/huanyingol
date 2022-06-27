<template>
    <div class="body-center">
        <div class="sort-list">
            <h5>按地区：</h5>
            <router-link :to="sortUrl('area',null)" :class="attr.area==null?'list-active':''">全部</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','大陆')" :class="attr.area==='大陆'?'list-active':''">大陆</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','港台')" :class="attr.area==='港台'?'list-active':''">港台</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','美国')" :class="attr.area==='美国'?'list-active':''">美国</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','日本')" :class="attr.area==='日本'?'list-active':''">日本</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','韩国')" :class="attr.area==='韩国'?'list-active':''">韩国</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','印度')" :class="attr.area==='印度'?'list-active':''">印度</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','法国')" :class="attr.area==='法国'?'list-active':''">法国</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','英国')" :class="attr.area==='英国'?'list-active':''">英国</router-link>
            <span>/</span>
            <router-link :to="sortUrl('area','德国')" :class="attr.area==='德国'?'list-active':''">德国</router-link>
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
            <router-link :to="sortUrl('style','剧情')" :class="attr.style==='剧情'?'list-active':''">剧情</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','喜剧')" :class="attr.style==='喜剧'?'list-active':''">喜剧</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','爱情')" :class="attr.style==='爱情'?'list-active':''">爱情</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','动作')" :class="attr.style==='动作'?'list-active':''">动作</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','恐怖')" :class="attr.style==='恐怖'?'list-active':''">恐怖</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','科幻')" :class="attr.style==='科幻'?'list-active':''">科幻</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','犯罪')" :class="attr.style==='犯罪'?'list-active':''">犯罪</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','惊悚')" :class="attr.style==='惊悚'?'list-active':''">惊悚</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','悬疑')" :class="attr.style==='悬疑'?'list-active':''">悬疑</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','奇幻')" :class="attr.style==='奇幻'?'list-active':''">奇幻</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','战争')" :class="attr.style==='战争'?'list-active':''">战争</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','动画')" :class="attr.style==='动画'?'list-active':''">动画</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','传记')" :class="attr.style==='传记'?'list-active':''">传记</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','家庭')" :class="attr.style==='家庭'?'list-active':''">家庭</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','歌舞')" :class="attr.style==='歌舞'?'list-active':''">歌舞</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','历史')" :class="attr.style==='历史'?'list-active':''">历史</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','冒险')" :class="attr.style==='冒险'?'list-active':''">冒险</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','纪实')" :class="attr.style==='纪实'?'list-active':''">纪实</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','灾难')" :class="attr.style==='灾难'?'list-active':''">灾难</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','漫画改')" :class="attr.style==='漫画改'?'list-active':''">漫画改</router-link>
            <span>/</span>
            <router-link :to="sortUrl('style','小说改')" :class="attr.style==='小说改'?'list-active':''">小说改</router-link>
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
        name: "Movie",
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
                page: parseInt(this.$route.query.page || 1),
                total: 0,
            }
        },
        computed: {},
        methods: {
            sortUrl(sort, param) {
                let url = "/movie"
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
                let url = "/movie?page=" + currentPage
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
                param.type="电影"
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