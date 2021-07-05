<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="header-containter">
        <div class="line"></div>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"t
          text-color="#fff"
          active-text-color="#ffd04b">
          <img src="../../assets/tengxun.jpg" alt="腾讯云" class="tengxun-img">
          <el-menu-item index="1">总览</el-menu-item>
          <el-submenu index="2">
            <template slot="title">云开发</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" >消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank" style="text-decoration:none">订单管理</a></el-menu-item>
          <el-button type="info" @click="logout" class="logout">退出</el-button>
        </el-menu>
      </div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container style="height: 100vh; border: 1px solid #eee; margin-buttom:0px 0px">
      <el-aside width="200px" style="background-color: #545c64">
        <el-menu background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :default-openeds="['/userinfo']"
              :default-active="this.$route.path"
			        router>
        <h3 style="text-align:center" >账号中心</h3>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-user-solid"></i>账号信息</template>
              <el-menu-item-group>
                <el-menu-item index="/userinfo" @click="goto('/userinfo')"><span slot="title">用户信息</span></el-menu-item>
                <el-menu-item index="/user" @click="goto('/user')"><span slot="title">用户管理列表</span></el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="/c" @click="goto('/c')"><span slot="title">用户管理</span></el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-s-check"></i>实名认证</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>安全设置</template>
              <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item index="3-3">选项3</el-menu-item>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
            </el-submenu>
            <el-submenu index="4">
            <template slot="title"><i class="el-icon-folder"></i>项目管理</template>
              <el-menu-item-group>
                <el-menu-item index="/create" @click="goto('/create')"><span slot="title">创建项目</span></el-menu-item>
                <el-menu-item index="/upload" @click="goto('/upload')"><span slot="title">上传图片</span></el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="5">
            <template slot="title"><i class="el-icon-s-help"></i>应用服务授权</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="6">
            <template slot="title"><i class="el-icon-chat-square"></i>访问管理</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="7">
            <template slot="title"><i class="el-icon-message"></i>消息订阅</template>
              <el-menu-item-group>
                <el-menu-item index="/rale" @click="goto('/rale')"><span slot="title">评分</span></el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <router-view></router-view>
    </el-container>
     <!-- <el-footer>Footer</el-footer>-->
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    const item = {
      date: '2021-05-02',
      name: 'Tandy',
      address: '广州市海珠区'
    };
    return {
      activeIndex: '1',
      activeIndex2: '1',
      tableData: Array(20).fill(item)
    };
  },
  methods: {
    logout() {
      this.$router.replace('/')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goto(path) {
    this.$router.replace(path);
    },
  }
}
</script>
<style>
.body{
  margin: 0;
}
.tengxun-img{
  width: 60px;
  float:left;
  margin-top: 13px;
  padding: 0 20px;
}
.el-header{
  padding: 0 0 0 0;
}
.el-submenu .el-menu-item{
  min-width:0px;
}
.home-container {
  color: #ffffff;
}

.header-containter{
  background-color: #236279;
}
.logout{
  height:60px;
  float:right;
  text-align: center;
}

</style>
