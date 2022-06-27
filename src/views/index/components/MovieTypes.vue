<template>
    <el-row>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=剧情" class="index-list">剧情</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=喜剧" class="index-list">喜剧</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=爱情" class="index-list">爱情</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=动作" class="index-list">动作</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=科幻" class="index-list">科幻</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=犯罪" class="index-list">犯罪</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=恐怖" class="index-list">恐怖</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=悬疑" class="index-list">悬疑</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=奇幻" class="index-list">奇幻</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=战争" class="index-list">战争</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=传记" class="index-list">传记</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=家庭" class="index-list">家庭</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=歌舞" class="index-list">歌舞</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=历史" class="index-list">历史</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=冒险" class="index-list">冒险</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=纪实" class="index-list">纪实</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=灾难" class="index-list">灾难</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=动画" class="index-list">动画</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=漫画改" class="index-list">漫画改</router-link></el-col>
        <el-col :span="8" class="p-3"><router-link to="/movie?style=小说改" class="index-list">小说改</router-link></el-col>
    </el-row>
</template>

<script>
    export default {
        name: "MovieTypes"
    }
</script>

<style scoped>

</style>