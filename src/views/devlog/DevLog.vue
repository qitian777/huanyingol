<template>
  <div class="index-body body-center">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="version" label="版本" width="180"> </el-table-column>
      <el-table-column prop="updates" label="更新内容"> </el-table-column>
      <el-table-column prop="time" label="完成时间" width="180"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import apiItem from "@/api/item";

export default {
  name: "DevLog",
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    apiItem.getDevevLog().then(
        data=>{
            this.tableData=data.object
        }
    )
  },
};
</script>

<style scoped>
.body-center {
  margin: 30px auto 150px;
}
</style>
