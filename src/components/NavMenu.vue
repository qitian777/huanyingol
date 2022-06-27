<template>
    <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/movie">电影</el-menu-item>
        <el-menu-item index="/drama">电视剧</el-menu-item>
        <el-menu-item index="/comic">动漫</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "NavMenu",
    }
</script>

<style scoped>

</style>