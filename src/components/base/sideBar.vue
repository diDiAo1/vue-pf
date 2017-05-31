/* eslint-disable */
<template>
  <div class="menu menu_show">
    {{msg}}

    <el-row class="tac">
      <el-col>
        <el-menu unique-opened default-active="1" router>
          <el-submenu :index="index+''" :key="'index-'+index" v-for="(item,index) in menuDate">
            <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
            <el-menu-item :index="itemC.path+''" :key="'indexC-'+indexC" v-for="(itemC,indexC) in item.child">{{itemC.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    created() {
      var params = this.$route.params
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      handelSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    },
    data () {
      return {
        msg: '边框控件',
        menuDate: [{name:'组织', path:'', child:[{name:'单位', path:'/company'},
            {name:'部门', path:'/department'},
            {name:'岗位', path:'/position'},
            {name:'人员', path:''}]},
          {name: '授权', path: '', child:[{name:'角色', path:''}]},
          {name: '配置', path: '', child:[{name:'参数', path:''}]}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*微菜单css*/
  .menu {
    width:180px;
  }
</style>
