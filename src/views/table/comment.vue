<template>
    <div class="comments-con">
        <div class="comments-send">
            <div class="user-face">
                <img src="./images/icon.webp" alt="">
            </div>
            <div class="textarea-container">
                <el-input
                type="textarea"
                :rows="3"
                class="ipt-txt"
                autofocus
                placeholder="发一条友善的评论"></el-input>
                 <el-button type="submit" style="height:60px;">发表评论</el-button>
            </div>
        </div>
        <div class="comments-list">
            <div class="list-item" v-for="(item, index) in comments" :key="index">
                <div class="user-face">
                    <div class="avatar">
                        <img :src="item.fromAvatar" alt="">
                    </div>
                </div>
                <div class="con">
                    <div class="user">
                        <span style="color: #6d757a;">{{item.fromName}}</span>
                    </div>
                    <p class="text">{{item.content}}</p>
                    <div class="info">
                        <span class="time">{{item.date}}</span>
                        <span class="like">
                            <img src="./images/dianzan.png" alt="">
                            <span>{{item.likeNum}}</span>
                        </span>
                        <span class="like-replay" @click="showCommentInput(0,item)">回复</span>
                    </div>
                    <!-- 回复 -->
                    <div class="replay-box" v-for="(replay, index_replay) in item.reply" :key="index_replay">
                        <div class="replay-item">
                            <img :src="replay.fromAvatar" alt="">
                            <div class="replay-con">
                                <div class="users">
                                    <span style="color: #6d757a;">{{replay.fromName}}</span>
                                    <span class="text-con"> 回复</span>
                                    <span class="replay-cons">@{{replay.toName}} :</span>
                                    <span>{{ replay.content}}</span>
                                </div>
                            </div>
                            <div class="info">
                                <span class="time">{{replay.date}}</span>
                                <span class="like">
                                    <img src="./images/dianzan.png" alt="" class="replay-img">
                                    <span>{{replay.likeNum}}</span>
                                </span>
                                <span class="like-replay" @click="showCommentInput(1,replay)">回复</span>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
             <div class="comments-send" v-if="replayIndex == 1">
                <div class="user-face">
                    <img src="./images/icon.webp" alt="" class="user-head">
                </div>
                <div class="textarea-container">
                    <el-input
                    type="textarea"
                    :rows="3"
                    class="ipt-txt"
                    autofocus
                    :placeholder="placeholderTitle"></el-input>
                    <el-button type="submit" style="height:60px;">发表评论</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            replayIndex:0,
            placeholderTitle:"",
            comments:[
                {
                id: 'comment0001', //主键id
                date: '2018-07-05 08:30',  //评论时间
                ownerId: 'talents100020', //文章的id
                fromId: 'errhefe232213',  //评论者id
                fromName: '犀利的评论家',   //评论者昵称
                fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
                likeNum: 39, //点赞人数
                content: '非常靠谱的程序员',  //评论内容
                reply: [  //回复，或子评论
                    {
                    id: '34523244545',  //主键id
                    commentId: 'comment0001',  //父评论id，即父亲的id
                    fromId: 'observer223432',  //评论者id
                    fromName: '夕阳红',  //评论者昵称
                    fromAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', //评论者头像
                    toId: 'errhefe232213',  //被评论者id
                    toName: '犀利的评论家',  //被评论者昵称
                    likeNum: 20, //点赞人数
                    toAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',  //被评论者头像
                    content: '赞同，很靠谱，水平很高',  //评论内容
                    date: '2018-07-05 08:35'   //评论时间
                    },
                    {
                    id: '34523244545',
                    commentId: 'comment0001',
                    fromId: 'observer567422',
                    fromName: '清晨一缕阳光',
                    fromAvatar: 'http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg',
                    toId: 'observer223432',
                    toName: '夕阳红',
                    likeNum: 19, //点赞人数
                    toAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg',
                    content: '大神一个！',
                    date: '2018-07-05 08:50'
                    }
                ]
                },
                {
                id: 'comment0002',
                date: '2018-07-05 08:30',
                ownerId: 'talents100020',
                
                fromId: 'errhefe232213',
                fromName: '爱哭鼻子的小女孩',
                fromAvatar: 'http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg',
                likeNum: 0,
                content: '从没见过这么优秀的人',
                reply: []
                }
            ]
        }
    },
    methods:{
         showCommentInput(count,item){
             this.replayIndex = count;
             this.placeholderTitle = '回复 '+'@'+item.fromName+':';
             console.log(this.replayIndex);
             console.log(count,item);
         }
      
    
        // dateStr(date){
        //     //获取js 时间戳
        //     var time=new Date().getTime();
        //     //去掉 js 时间戳后三位，与php 时间戳保持一致
        //     time=parseInt((time-date)/1000);
        //     //存储转换值 
        //     var s;
        //     if(time<60*10){//十分钟内
        //         return '刚刚';
        //     }else if((time<60*60)&&(time>=60*10)){
        //         //超过十分钟少于1小时
        //         s = Math.floor(time/60);
        //         return  s+"分钟前";
        //     }else if((time<60*60*24)&&(time>=60*60)){ 
        //         //超过1小时少于24小时
        //         s = Math.floor(time/60/60);
        //         return  s+"小时前";
        //     }else if((time<60*60*24*30)&&(time>=60*60*24)){ 
        //         //超过1天少于30天内
        //         s = Math.floor(time/60/60/24);
        //         return s+"天前";
        //     }else{ 
        //         //超过30天ddd
        //         var date= new Date(parseInt(date));
        //         return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
        //     }
        //     }
    }
}
</script>

<style lang="less" scoped>
.comments-con{
    width: 100%;
    height: 100% ;
    .comments-send{
        margin: 10px 0;
        .user-face{
            float: left;
            margin: 7px 0 0 5px;
            position: relative;
        }
        // .textarea-container{
            .ipt-txt{
                font-size: 12px;
                display: inline-block;
                box-sizing: border-box;
                // background-color: #f4f5f7;
                // border: 1px solid #e5e9ef;
                overflow: auto;
                border-radius: 4px;
                color: #555;
                width: 600px;
                height: 65px;
                transition: 0s;
                padding: 5px 10px;
                line-height: normal;
                outline: none;
            }

        // }
        .comment-submit{
            width: 70px;
            height: 64px;
            position: absolute;
            right: -80px;
            top: 0;
            padding: 4px 15px;
            font-size: 14px;
            color: #fff;
            border-radius: 4px;
            text-align: center;
            min-width: 60px;
            vertical-align: top;
            cursor: pointer;
            background-color: #00a1d6;
            border: 1px solid #00a1d6;
            transition: 0.1s;
            user-select: none;
            outline: none;
        }
    }
    // background: pink !important;
    .comments-list{
        padding-top: 80px;
        width: 800px;
        height: 800px;
        .comments-send{
        margin: 10px 0;
        .user-facez{
            margin: 7px 0 0 5px;
            .user-head{
                width: 48px;
                height: 48px;
                border-radius: 50%;
            }
        }
        .textarea-container{
            display: flex;
            position: relative;
            margin-left: 85px;
            margin-right: 80px;
        }
        
    }
        .user-face{
            float: left;
            margin: 24px 0 0 5px;
            position: relative;
            .avatar{
                display: block;
                width: 100%;
                height: 100%;
                position: relative;
                // background-image: url(data:image/gif;base64,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);
                background-size: cover;
                border-radius: 50%;
                margin: 0;
                padding: 0;
                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }
        }
        .con{
            position: relative;
            margin-left: 85px;
            padding: 22px 0 14px 0;
            // border-top: 1px solid #e5e9ef;
            .user{
                font-size: 12px;
                font-weight: bold;
                line-height: 18px;
                padding-bottom: 4px;
                display: block;
                word-wrap: break-word;
                position: relative;
            }
            .text{
                line-height: 20px;
                padding: 2px 0;
                font-size: 14px;
                text-shadow: none;
                overflow: hidden;
                word-wrap: break-word;
                word-break: break-word;
                white-space: pre-wrap;
            }
            .info{
                color: #99a2aa;
                line-height: 26px;
                font-size: 12px;
                .time{
                    margin-right: 20px;
                }
                .like{
                    cursor: pointer;
                    margin-right: 20px;
                    img{
                        width: 14px;
                        height: 14px;
                        margin-right: 5px;
                        display: inline-block;
                        vertical-align: middle;
                        margin-top: -5px;
                    }
                }
                .like-replay{
                    cursor: pointer;
                }
            }
            .replay-box{
                
                .replay-item{
                    margin: 30px 0;
                    img{
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .replay-con{
                        display: inline-block;
                        padding-left: 20px;
                        // width: calc(100% - 34px);
                        .users{
                            font-size: 12px;
                            // font-weight: bold;
                            line-height: 18px;
                            padding-bottom: 4px;
                            display: block;
                            word-wrap: break-word;
                            position: relative;
                            .text-con{
                                font-weight: normal;
                                font-size: 14px;
                                line-height: 20px;
                                white-space: pre-wrap;
                            }
                            .replay-cons{
                                color:#00a1d6;
                            }
                        }
                    }
                    .info{
                        .replay-img{
                            width: 14px;
                            height: 14px;
                            margin-right: 5px;
                            display: inline-block;
                            vertical-align: middle;
                            margin-top: -5px;
                        }
                    }
                }
            }
            
        }
    }
}
</style>
