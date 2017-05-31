<template>
  <div>
    {{msg}}
    <hr/>
    <div class="login" @keyup.enter="submitForm('userMes')">
      <el-form :label-position="labelPosition" label-width="80px" :model="userMes" ref="userMes">
  
        <el-form-item label="用户名" prop="userName" class="">
          <el-input v-model="userMes.userName" placeholder="请输入用户名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="userMes.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input type="text" class="checklog" v-model="userMes.code" auto-complete="off" placeholder="请输入验证码！"></el-input>
          <el-button type="info" class="right" @click="createCode()">{{checkPwd}}</el-button>
        </el-form-item>
        <el-form-item style="text-align: center;">
          <el-button type="primary" :plain="true" @click="submitForm('userMes')" element-loading-text="拼命加载中">提交</el-button>
          <el-button @click="resetForm('userMes')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'login',
  created() {
    this.createCode();
  },
  data() {
    var validateCheckpass = (rule, value, callback) => {
      //alert("value:"+value+"||code:"+this.checkPwd);
      if (value === '') {
        callback(new Error('请输入验证码！'));
      } else if (value.toUpperCase() !== this.checkPwd.toUpperCase()) {
        callback(new Error('验证码错误，可点击重新获取'));
      }
      else {
        callback();
      }
    };
    return {
      msg: '登录页面',
      labelPosition: 'center',
      //<el-form :label-position="labelPosition" :rules="rulesLogin" label-width="80px" :model="userMes" ref="userMes">

      // rulesLogin: {
      //   userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      //   password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      //   code: [
      //     { validator: validateCheckpass, trigger: 'blur' }
      //   ]
      // },
      userMes: {
        userName: '',
        password: '',
        code: ''
      },
      checkPwd: ''
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 密码加密功能
          //数据请求
          this.login()
        } else {
          //alert("error!");
          return false;
        }
      });
    },
    createCode() {
      let code = "";
      //验证码的长度
      const codeLength = 4;
      //所有候选组成验证码的字符，当然也可以用中文的
      const selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
      for (let i = 0; i < codeLength; i++) {
        let charIndex = Math.floor(Math.random() * selectChar.length);
        code = code + selectChar[charIndex];
      }
      this.checkPwd = code;
    },
    login() {
      this.savecookie('userName', this.userMes.userName, 1)
      this.$router.push('/index/1/管理控制台/'+this.userMes.userName)
      // this.$store.dispatch('loginSystem', { password: this.userMes.password, loginName: this.userMes.userName })
      //   .then((res) => {
      //     console.log("this.$store.dispatch" + res)
      //     // todo
      //     if (res.status === 200) {
      //       this.savecookie('userName', this.userMes.userName, 1)
      //       console.log("login:" + this.userMes.userName)
      //       this.$router.push('/index/1/管理控制台/' + this.userMes.userName);
      //     }
      //   }, (err) => {
      //     console.warn(err)
      //     // this.$router.push('/index/1/管理控制台/'+this.userMes.userName);
      //     // alert("用户名或密码有误！");
      //   })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 50%;
  text-align: center;
  margin: 10% 20%;
}

.checklog {
  width: 60%;
  float: left;
}

.right {
  width: 35%;
  padding-top: 10px;
  line-height: 15px;
  float: right;
}
</style>
