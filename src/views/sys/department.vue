<template>
  <el-tree class="depTree" :data="treeModel" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>

<script>
  var myData = [
    {
      'id': '1',
      'label': '上海市看守所',
      'children': [
        {
          'label': '一监所',
          'id': '11'
        },
        {
          'label': '二监所',
          'id': '12',
          'children': [
            {
              'label': '管理员',
              'id': '121'
            },
            {
              'label': 'test',
              'id': '122'
            },
            {
              'label': 'test1',
              'id': '123'
            },
            {
              'label': 'test2',
              'id': '124'
            },
            {
              'label': 'test3',
              'id': '124'
            }
          ]
        },
        {
          'label': '权限管理',
          'id': '13'
        }
      ]
    }
  ]
  import { mapGetters } from 'vuex'
  export default {
    name: 'department',
    data () {
      return {
        msg: '部门',
        treeModel: myData
      }
    },
    create () {
      this.getTreeData()
    },
    computed: mapGetters({
      // todo  treeData改为上文中的treeModel，即为部门树的数据源
      treeData: 'departmentTree'
    }),
    methods: {
      // 加载部门树
      getTreeData () {
        this.$store.dispatch('getDepartmentTree')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.depTree {
  width:20%;
}
</style>
