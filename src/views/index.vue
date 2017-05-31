<template>
  <div>
    {{msg}}
    
      <el-popover
              ref="popover1"
              placement="bottom"
              width="160"
              trigger="click">
              <el-button type="primary" size="mini" @click="openUpdPwd()">修改密码</el-button>
              <el-button type="primary" size="mini" @click="openLogout()">退出登录</el-button>
      </el-popover>
      <div style="float: right;">欢迎
        <el-button type="primary" size="small" v-popover:popover1>{{userName}}</el-button>
      </div>

      <el-dialog size="small" title="修改密码" :visible.sync="dialogUpdPwd">
        <el-form :model="user" ref="user" :rules="rulesPwd">
          <el-form-item label="原密码" prop='oldPwd' :label-width="formLabelWidth">
            <el-input v-model="user.oldPwd" auto-complete="off" class="dialog-input-wid"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop='newPwd' :label-width="formLabelWidth">
            <el-input type="password" v-model="user.newPwd" auto-complete="off" class="dialog-input-wid"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop='confirmPwd' :label-width="formLabelWidth">
            <el-input type="password" v-model="user.confirmPwd" auto-complete="off" class="dialog-input-wid"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogUpdPwd = false">取 消</el-button>
          <el-button type="primary" :disabled="updatePwdBtn"  @click="updatePwd('user')">确 定</el-button>
        </div>
      </el-dialog>

    <topBar></topBar>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
  import topBar from '../components/base/topBar.vue'
  import { mapGetters } from 'vuex'
  export default {
    created () {
      var params = this.$route.params
      this.userName = params.userName || this.getcookie('userName')
    },
    computed: mapGetters({
      userInfo: 'user'
    }),
    data () {
      const validateOldPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入原密码'));
        } else {
          callback();
        }
      };
      const validateNewPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          callback();
        }
      };
      const validateConfirmPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.newPwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        msg:'主体页面',
        userName: '',
        tabId: '',
        dialogUpdPwd: false,
        updatePwdBtn: false,
        user: {
          oldPwd:'',
          newPwd:'',
          confirmPwd:''
        },
        rulesPwd: {
          oldPwd: [
            { validator: validateOldPwd, trigger: 'blur' }
          ],
          newPwd: [
            { validator: validateNewPwd, trigger: 'blur' }
          ],
          confirmPwd: [
            { validator: validateConfirmPwd, trigger: 'blur' }
          ]
        },
        formLabelWidth: '120px',
        
      }
    },
    methods: {
      openUpdPwd() {
        this.dialogUpdPwd = true;
        this.user = {
          oldPwd:'',
          newPwd:'',
          confirmPwd:''
        };
      },
      updatePwd(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('updatePassword',{userId:this.userInfo.id,oldPassword:this.user.oldPwd,newPassword: this.user.newPwd})
              .then((res)=> {
                this.savecookie('userName','');
                this.$router.push('/');
                // todo
                //this.$router.push('/');
              }, (err)=> {
                console.warn(err)
                // todo
                //alert("修改密码有误！");
              })
            this.dialogUpdPwd = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
          
      },
      openLogout() {
        this.$confirm('确定退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('logoutSystem')
           .then((res)=>{
             if (res.status === 200) {
              console.log("logout");
              this.savecookie('userName','');
              //跳转到登陆页面
              this.$router.push('/');
             }
           }, (err)=> {
             console.warn(err)
           })
        }).catch(() => {
          // todo  取消
        });
      },
    },
    components: {
      'topBar': topBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-input-wid {
  width:60%;
}
</style>
