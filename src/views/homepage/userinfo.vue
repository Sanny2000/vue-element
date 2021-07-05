<template>
  <el-container>
        <el-header style="text-align: right; font-size: 16px;color:black;background-color:grey;height:30px">
          <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px; color:black "></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Sanny</span>
      </el-header>

      <el-main style="padding:10px">
        <el-table :data="tableData" >
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="age" label="年龄" width="120">
          </el-table-column>
          <el-table-column prop="telephone" label="手机号码" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>

    </el-container>
</template>
<script>
  export default {
    data() {
      const item = {
        date: '2021-05-02',
        name: 'Sanny',
        age:'21',
        telephone:10000100001,
        address: '广东省广州市海珠区'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
