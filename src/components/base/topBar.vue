<template>
  <div>
    {{msg}}
    <el-select v-model="tabId" placeholder="请选择" @change="showSomething()">
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.value"
        :value="item.id">
      </el-option>
    </el-select>
    <el-radio-group v-model="sysModel" @change="routeModel()">
      <el-radio-button v-if="tabId === '1'" label="管理控制台"></el-radio-button>
      <el-radio-button v-if="tabId === '2'" label="电子地图"></el-radio-button>
      <el-radio-button v-if="tabId === '2'" label="视频联动"></el-radio-button>
      <el-radio-button v-if="tabId === '2'" label="事件中心"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    created() {
      var params = this.$route.params
      this.tabId = params.tabId||this.getcookie('tabId')
      this.sysModel = params.sysModel||this.getcookie('sysModel')
      //console.log("1:"+this.tabId+"||"+this.sysModel);
      //console.log("2:"+this.getcookie("tabId")+"||"+this.getcookie("sysModel"));
      this.routeModel()
    },
    methods: {
      showSomething() {
        this.savecookie('tabId', this.tabId, 1)
        //alert(this.tabId)
      },
      routeModel() {
        this.savecookie('sysModel', this.sysModel, 1)
        if(this.sysModel === '管理控制台'){
          this.$router.push('/sys');
        }else if(this.sysModel === '电子地图'){
          this.$router.push('/eleMap');
        }else if(this.sysModel === '视频联动'){
          this.$router.push('/videoAct');
        }else if(this.sysModel === '事件中心'){
          this.$router.push('/eventCenter');
        }
      }
    },
    data () {
      return {
        msg: '顶层控件',
        tabId: '',
        sysModel: '',
        options: [{id: '1', value: '基础设置'}, {id: '2', value: '综合安全管理'}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
