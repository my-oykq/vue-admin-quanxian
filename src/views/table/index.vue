<template>
  <div class="container">
    <a href="http:www.baidu.com" target="_blank" rel="noopener noreferrer"></a>
    <div>
      <p>实现根据后台数据如果这个数据不超过四行就不显示更多按钮，超过四行就显示更多按钮</p>
      <div class="list" v-for="(item, index) in dataList" :key="index">
        <div class="wrap">
          <div class="preview">
            <ul>
              <li ref="detailDom">{{ item.text }}</li>
            </ul>
            <!-- <div class="content" >
              <div ref="detailDom">{{ item.text }}</div>
            </div> -->
          </div>
          <span class="btn" v-if="item.isShow">更多>></span>
        </div>
      </div>
    </div>
    <div>
      <p style="color:red">实现评论回复</p>
      <comment></comment>
    </div>
     <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <div :class="(tabIndex == 0 ? 'tabName' : '')"></div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理
        <div :class="(tabIndex == 1 ? 'tabName' : '')"></div>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理
        <div :class="(tabIndex == 2 ? 'tabName' : '')"></div>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿
        <div :class="(tabIndex == 3 ? 'tabName' : '')"></div>
      </el-tab-pane>
    </el-tabs>

     <h2>公告栏文字停顿滚动</h2>
    <div class="marquee_box">
            
            <ul class="marquee_list" :class="{'marquee_up': animateUps, 'marquee_down': animateDown}">
                <li v-for="(item, index) in marqueeList" :key="index">
                    <span>{{item.name}}</span>
                    <span>在</span>
                    <span class="red"> {{item.city}}</span>
                    <span>杀敌</span>
                    <span class="red"> {{item.amount}}</span>
                    <span>万</span>
                </li>
            </ul>
           <div class="option" >
            <button @click="up">▲</button>
            <button @click="down">▼</button>
        </div>
        </div>
        <!--    -->
       
  </div>
</template>

<script>
import comment from './comment.vue'
  export default {
    components:{comment},
    data() {
      return {
        timer:null,
        animateUps: false,
        animateDown:false,
            marqueeList: [
                {
                    name: '1军',
                    city: '北京',
                    amount: '10'
                },
                {
                    name: '2军',
                    city: '上海',
                    amount: '20'
                },
                {
                    name: '3军',
                    city: '广州',
                    amount: '30'
                },
                {
                    name: '4军',
                    city: '重庆',
                    amount: '40'
                }
            ],
        detailDom: "",
        tabIndex:0,
        activeName: 'second',
        textArr: [
        '1 第一条公告',
        '2 第二条公告第二条公告',
        '3 第三条公告第三条公告第三条公告'
      ],
      number: 0,


        dataList: [
        {
          text: `这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字`,
          id:0,
        },
        {
          id:1,
          text:
            "这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字",
        },
        {
          id:2,
          text: "这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字",
        },
        {
          id:3,
          text:
            "这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字",
        },
      ],
      };
    },
    computed:{
      text () {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    },
    },
    filters: {
      ellipsis (value) {
        // console.log(value.length);
        if (!value) return ''
        if (value.length > 90) {
          return value.slice(0,90) + '...'
        }
        return value
      }
    },
    methods: {
       handleClick(tab, event) {
         this.tabIndex = tab.index;
        console.log(tab.index, event);
      },
      getLoad(){
        for(var i = 0; i< this.dataList.length;i++){
          this.$set(this.dataList[i],'isShow',false)
          this.dataList[i].isShow = false;
        }
      },
      up(){
        if(this.animateUps) return;
        clearInterval(this.timer)
        this.scrollUpAnimate()
        this.timer = setInterval(this.scrollUpAnimate,3000);
      },
      down(){
        // console.log(this.marqueeList[[this.marqueeList.length - 1]]);
        clearInterval(this.timer)
         if(this.animateUps){
           setTimeout(() =>{
             this.scrollDownAnimate()
           },500)
         } else {
            this.scrollDownAnimate()
         }
         this.timer = setInterval(this.scrollUpAnimate,3000);
      },
      // 上轮播
    scrollUpAnimate(){
      this.animateUps = true;
       setTimeout(()=>{
          this.marqueeList.push(this.marqueeList[0]);
          this.marqueeList.shift();
          this.animateUps = false;
        },500)
         
    },
    // 下轮播
    scrollDownAnimate() {
      this.animateDown = true;
        setTimeout(()=>{
          this.marqueeList.unshift(this.marqueeList[this.marqueeList.length - 1]);
          this.marqueeList.pop();
          this.animateDown = false;
        },500)
      },
          
    },
    mounted() {
     this.timer =  setInterval(this.scrollUpAnimate, 3000)
      // this.startMove()
      this.getLoad()
      this.$nextTick(() =>{
        this.$refs.detailDom.forEach((e,i) =>{
          if(e.scrollHeight > e.clientHeight){
           this.$set( this.dataList[i],'isShow',true)
          }
        })
      })
    },
    destroyed(){
      clearInterval(this.timer)
    }
  };
</script>
<style scoped>
.option{
    text-align: right;
    margin: 5px;
}
ul, li{
	margin: 0;
	padding: 0;
	display: flex;
	box-sizing: border-box;
}
.marquee_box {
	display: block;
	position: relative;
	width: 60%;
	height: 30px;
  background: pink;
  /* 把多余的 截取 */
	overflow: hidden;
}

.marquee_list {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
}
/* 要使公告轮播，就得加上这段样式，*/
.marquee_up{
  transition: all 0.5s ease-in-out;
	/* margin-top: -30px; */
  transform: translateY(-30px);
}
.marquee_down{
  transition: all 0.5s ease-in-out;
	/* margin-top: 30px */
  transform: translateY(30px);
}



.marquee_list li {
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	padding-left: 20px;
}

.marquee_list li span {
	padding: 0 2px;
}

.red {
	color: #FF0101;
}
h2 {
    padding: 20px 0
  }
  .textBox {
    width: 100%;
    height: 40px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }
.container {
  padding: 40px;
}
.list {
  width: 500px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: left;
  margin-bottom: 20px;
  padding: 8px;
}
.wrap {
  padding-bottom: 30px;
}
.over {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.btn {
  font-size: 14px;
  color: rgb(75, 75, 216);
  float: right;
  cursor: pointer;
  margin-top: 10px;
}
.content{
  height: 95px;
}
.preview ul{
  /* height: 95px; */
}
.preview ul li{
  /* height: 95px; */
  font-size: 12px;
  letter-spacing: 0.2px;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>