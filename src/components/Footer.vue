<template>
    <el-row>
        <el-col :span="24" align="center">
            <div class="index-body">
                <el-col :span="16">
                    <el-row>
                        <el-col :span="12">
                            <h3>关于本站</h3>
                            <el-divider></el-divider>
                            <p>本站为站长学习java练习所做，所有内容均来自网络，若有侵权请联系站长删除！</p>
                        </el-col>
                        <el-col :span="12">
                            <h3>开发日志</h3>
                            <el-divider></el-divider>
                            <div class="media-body">
                                <router-link to="/devLog" style="color: #409eff">查看开发日志</router-link>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="8">
                    <h3>联系站长</h3>
                    <el-divider></el-divider>
                    <address>
                        <strong>千羽凌枫</strong><br>
                        <a href="mailto:#">1097598544@qq.com</a>
                    </address>
                </el-col>
                <el-col :span="24">
                    <p>Copyright © huanyingol.cn 版权所有</p>
                    <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2022002493号-1</a>
                    <div style="width:300px;margin:0 auto; padding:20px 0;">
                        <a target="_blank"
                           href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41152602000212"
                           style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img
                                src="/images/备案图标.png" style="float:left;"/>
                            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">
                                豫公网安备 41152602000212号</p></a>
                    </div>
                </el-col>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.el-col{
    padding: 0 12px;
}
</style>