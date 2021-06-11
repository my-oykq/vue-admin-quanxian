<template>
 <div class="container">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <ul class="timeline-wrapper">
      <!-- v-for="t in timelineList" :key="t.id" -->
        <li class="timeline-item" v-for="t in logisticsList" :key="t.id">
        <div class="timeline-box">
            <div class="out-circle">
                <div class="in-circle"></div>
            </div>
            <div class="long-line"></div>
        </div>
        <div class="timeline-content">
            <span class="timeline-title">{{t.title}}</span> 
            <div :class="[t.title? 'newStyle' : 'timeline-date']">{{t.time}}</div>
            <div class="timeline-desc">{{t.content}}</div>
        </div>
    </li>
    </ul>
 </div>
</template>

<script>
export default {
  name: 'UserIndex',
  components: {},
  props: {},
  data () {
    return {
      logisticsList:[
          {
            id:0,
            content:'商品已经下单',
            time:'04-17 14:10'
          },
          {
            id:1,
            content:'您的订单开始处理',
            time:'04-17 14:52'
          },
          {
            id:2,
            title:'已下单',
            content:'您的订单已打物流单',
            time:'04-17 14:52'
          },
          {
            id:3,
            title:'已发货',
            content:'包裹正在等待揽收',
            time:'04-17 14:53'
          },
          {
            id:4,
            content:'快件在 【丰网速运广州海珠一部】 完成分拣，主备发往 【广州宝湾5号库集散点】',
            time:'04-17 14:53'
          },
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

 <style lang="less" scoped>
   /**时间线 */
    .timeline-item {
        position: relative;

        .timeline-box {
            text-align: center;
            position: absolute;

            .out-circle {
                width: 16px;
                height: 16px;
                // background: rgba(14, 116, 218, 0.1);
                // box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                /*opacity: 0.1;*/
                border-radius: 50%;
                display: flex;
                align-items: center;

                .in-circle {
                    width: 5px;
                    height: 5px;
                    margin: 0 auto;
                    background: #999999;
                    border-radius: 50%;
                    // box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                }
            }

            .long-line {
                width: 2px;
                height: 136px;
                background:#999999;
                box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                opacity: 0.1;
                margin-left: 7px;
            }
        }

        .timeline-content {
            box-sizing: border-box;
            margin-left: 20px;
            height: 106px;
            padding: 0 0 0 20px;
            text-align: left;
            margin-bottom: 30px;

            .timeline-title {
                font-size: 12px;
                word-break: break-all;
                margin-bottom: 16px;
                color: #999999;
                font-weight: 500;
                margin-right: 5px;
                /*display: inline;*/
            }

            .timeline-date {
                font-size: 12px;
                color: #999999;
                font-weight: 500;
                // margin-bottom: 16px;
            }
            .newStyle{
              font-size: 12px;
              color: #999999;
              font-weight: 500;
              display: inline;
            }
            .timeline-desc {
                font-size: 12px;
                color: #999999;
            }
        }

    }
    .timeline-item:last-of-type .timeline-content {
        margin-bottom: 0;
    }


    .message-text{
      font-family: MicrosoftYaHei;
      font-size: 1rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 3rem;
      letter-spacing: 0rem;
      color: #333333;
      width: 50%;
    }
    .fontblack{
      color:#999999
    }
    .img2{
      width: .81rem;
      height: .8rem;
      float: right;
    }
    .addressshow2{
      height: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      width: 75%;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      word-wrap: break-word;
      word-break: break-all;
      font-size: 1rem;
    }
    .addressshow1{
      height: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      width: 75%;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      white-space: normal;
      word-wrap: break-word;
      word-break: break-all;
      font-size: 1rem;
    }
    .orderTitle{
      font-size: 1rem;
      color: #333333;
      height: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      word-wrap: break-word;
      word-break: break-all;
      height: 2.5rem;
    }
    .orderDetail{
      font-size: 0.8rem;
      color: #666666;
      text-align:left;
    }
    .border-ceter{
      width: 92%;
      padding-left: 15px;
      padding-right: 15px;
    }
    .pay-button{
      width: 88%;
      height: 2.6rem;
      position:relative;
      background-color: red;
      color: white;
  
      margin-left: 6%;
    }
    ul li{
      list-style:none;
      font-size: 1rem;
    }
    ul {
      padding-left: 1.5rem
    }
    .track-rcol{}
    .track-list{
      position:relative;
    }
    .track-list li{
      position:relative;
      padding:0px 0 1.5rem 25px;
      line-height:1rem;
      border-left:1px solid #d9d9d9;
      color: #999;
    }
    .track-list li.first{
      color:red;
      padding-top:0;
      width: 100%;
      text-align: left;
      border-left:1px solid #d9d9d9;
    }
    .track-list li .node-icon{
      position: absolute;
      left: -5.5px;
      border-radius: 0.25rem;
      width: 0.5rem;
      height: 0.5rem;
      top:4px;
      background-color: #999999;
    }
    .track-list li.first .node-icon{
      background-position:0-72px;
      background-color: red;
      width: 1rem;
      z-index: 2;
      height: 1rem;
      position: absolute;
      left: -9px;
      top: 0;
      border-radius: 0.5rem;
    }
    .track-list li .time{
      margin-right:20px;
      position:relative;
      top:4px;
      display:inline-block;
      vertical-align:middle;
      background-color: white;
      color: #999;
      width: 100%;
      text-align: left;
    }
    .track-list li .txt{
      position:relative;
      display:inline-block;
      vertical-align:top;
      color: #999;
    }
    .track-list li.first .time{
      text-align: left;
      width: 94%;
      color:red;
    }
    .track-list li.first .txt{
      color: red;
      text-align: left;
      width: 94%;
    }
    .track-list li.finall{
      position:relative;
      padding:0px 0 1.5rem 25px;
      line-height:18px;
      border-color: white;
      border-left:1px solid #ffffff;
      color: #999;
    }
    .track-list li.finall .div-spilander{
      width: 1px;
      position: absolute;
      position: absolute;
      left: -1.5px;
      height: 0.5rem;
      background-color: #d9d9d9;
    }
  
  </style>
