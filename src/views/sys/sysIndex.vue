<template>
  <div>
    {{msg}}
    <sideBar style="float:left;"></sideBar>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  import sideBar from '../../components/base/sideBar.vue'
  export default {
    data () {
      return {
        msg: '基础管理统一页面'
      }
    },
    components: {
      'sideBar': sideBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    padding:10px 15px;
    margin-left:180px;
    transform:translateZ(0)
  }
</style>
