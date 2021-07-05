<template>
  <div class="login-container">
    <div class="login_form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm loginFrom">
        <h1 style="font-size: 1.5rem;color: #fff;font-weight: bold;padding: 1rem 0;">登陆平台</h1>
        <el-form-item >
          <el-input placeholder="请输入账号" v-model="ruleForm.userName" prefix-icon="el-icon-user"></el-input><br>
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" show-password @keyup.enter.native="login" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <div class="clear">
          <div class="rt">
            <span class="lf" style="color:#0489cc;cursor: pointer;margin-right: 10px;">帮助</span>
            <el-checkbox v-model="checked" style="color:#a0a0a0;">一周内自动登录</el-checkbox>
            <span @click="clearCookie" style="cursor: pointer;color: #f19149;font-size: 1px;margin-left: 10px;">忘记密码？</span>
          </div>
        </div>
        <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        ruleForm: {
        userName: '', //用户名
        password: '' //密码
        },
        // 表单验证规则对象
        rules:{
          // 验证用户名是否合法
          username:[
            { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ],
        },
        checked: false
      }
    },
    methods: {
        //点击登录调用方法
        submitForm(formName) {
            //保存的账号
            var name=this.ruleForm.userName;
            //保存的密码
            var pass=this.ruleForm.password;
            if(name==''||name==null){
              alert("请输入正确的用户名");
              return
            }else if(pass==''||pass==null) {
              alert("请输入正确的密码");
              return
            }else{
              this.$router.replace("/userinfo")
            }
            //判断复选框是否被勾选 勾选则调用配置cookie方法
            if(this.checked=true){
            //传入账号名，密码，和保存天数3个参数
              this.setCookie(name,pass,7);
            }else {
            // 否则 清空cookies
              this.clearCookies();
            }
            //接口
            var url='../../views/login/Login';
            this.$http.post(url,this.ruleForm,{emulateJSON:true})
              .then(res=>{
                if(res.body=="fail"){
                  alert("用户名或密码错误,请重新输入");
                  this.ruleForm.userName='';
                  this.ruleForm.password='';
                  return
                } else{
                    alert("登陆成功！")
                    this.$router.replace("/AccountInfo")
                }
              });
            },
            //设置cookie
            setCookie(c_name,c_pwd,exdays) {
              var exdate=new Date();//获取时间
              exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
              //字符串拼接cookie
              window.document.cookie="userName"+ "=" +c_name+";path=/;expires="+exdate.toUTCString();
              window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toUTCString();
            },
            //读取cookie
            getCookie:function () {
              if (document.cookie.length>0) {
                var arr=document.cookie.split('; ');//这里显示的格式需要切割
                for(var i=0;i<arr.length;i++){
                  var arr2=arr[i].split('=');//再次切割
                  //判断查找相对应的值
                  if(arr2[0]=='userName'){
                    this.ruleForm.userName=arr2[1];//保存到保存数据的地方
                  }else if(arr2[0]=='userPwd'){
                    this.ruleForm.password=arr2[1];
                  }
                }
              }
            },
            //清除cookie
            clearCookie:function () {
              this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
            }
          },
          //页面加载调用获取cookie值
          mounted(){
            this.getCookie()
          }
        }
</script>
<style>
.login-container {
    background-color: #236279;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: fixed;
    text-align: center;
}
.title{
  color: #fff;
}
.el-input--suffix{
  line-height: 0px;
}
.el-input__inner{
  background-color: #909399;
}
.el-input {
    width: 300px;
    height: 40px;
    position: relative;
    margin-bottom: 25px;
}
.login_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
</style>
