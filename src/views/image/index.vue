<template>
  <div class="demo-image__lazy" style="width: 60%">
    <el-button @click=" dialogVisible = true">实现自定义指令弹窗拖拽</el-button>
    <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    <el-dialog
      title="提示"
      v-dragDialog
      :visible.sync="dialogVisible"
      width="30%"
      >
      <div class="drag-img">
        <img :src="dragUrl" alt="">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import DragDialog from '@/utils/drag.js'
export default {
  name: 'ImageIndex',
  components: {},
  props: {},
  data () {
    return {
      dialogVisible: false,
      dragUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  // directives: { DragDialog },
  methods: {}
}
</script>

<style scoped lang="less">
.drag-img{
  >img{
    width: 80px;
    height: 80px;
  }
}
</style>
