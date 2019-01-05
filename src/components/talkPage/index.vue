<template>
    <div>
        <HeaderBar :left_type="left_type"></HeaderBar>
        <div class="talk_list"  ref="talk_list" >
            <!-- 对方 -->
            <div v-for="(list,index) in all_msg" :key="index">
            <div  class="list_his_item"   v-if="list.role=='not_me'">
                <div class="item_his_img" >
                    <img :src="url" width="" >
                </div>
                <div class="item_his_msg">
                    <div class="item_his_border" v-if="list.msg">
                        <div class="item_his_text">{{list.msg}}</div>
                    </div>
                </div>
            </div>
            <!-- 自己 -->
            <div class="list_me_item"   v-if="list.role=='me'">
               
                <div class="item_me_msg">
                    <div class="item_me_border" v-if="list.msg">
                        <div class="item_me_text">{{list.msg}}</div>
                    </div>
                </div>
                 <div class="item_me_img">
                    <img :src="url" width="" >
                </div>
            </div>
            </div>
       </div>
    
   
        <wv-tabbar style="position:fixed;height:1.3rem;">
             <div class="tab_input">
        
                <div class="input_type border-bottom">
                   <input class="input_self"  v-model="msg" @keyup.enter="send" placeholder="请输入消息">
                </div>
  
             </div>
             <div class="tab_send">
                 <wv-button type="primary" class="send_btn" :mini="true" @click="send">发送</wv-button>
             </div>
             
        </wv-tabbar>
    </div>
</template>

<script>
import HeaderBar from '../common/headerBar'
import { getRobotMsg } from '@/apis/robot'
export default {
    data(){
        return {
            msg:"",
            all_msg:[],
            chat:"",
            left_type:{
                type:"left",
                content_type:"back",
                content:this.$route.query.name
            },
            url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURQWvEP///53Xn9Lr0rjhuqvcren16Su1MW3GcEW7St3w3n7MgY7RkPT69FrBXsXmxhFC35IAAAI7SURBVGje7ZVBbtpQEIYnLqQNhMKPsQEHIswJsLiAuUHpCcINjNQDwA2gUtUtUVV1C+tu4AbJDcINyg06Y5OoNij1k7qpNN8CGb3//Z43M29MpCiKoiiKoiiKoiiKoiiKovynjBARvUWDH6u4syDUk6VJ91nhQx4s1CglOMsOM6IyXH68RJjSj2WJ6NEjE8MlekRFSJxLbFP6vSzRe/5rYljBL6I3kGA2iGTPH0srkpe1U4a1v+SQE0d04UowYy+tL6DJvyW2NTG0ZNfcwYDo3knry+gcc2Ji+A43RH4LD0T8lNIntd9hYWRIkuGgNrll62ZGf5C+OXhkZhjYbLoKOqxdZfQ+npIXGhn6XY4t9Btcng8ZvaSvjFtDwzkWFrYbj7tkfWyz5z0lLlVBuiDbh6+aTrGuYjEFxxNl9EXO6iXHbWZYQq/i8r7ZzpM99nA4HNDnfr/f40tyw9flKW2YCF6hiMGywSfrjR16SdE8CWPikO+SYQ6v8bCTEodB68Rw5FLgmBpeoTlu8+kGIs3oN/gqRebmjuKz3OUxpEkr4EKiLbcvo7/ATykyB7w+Fj2P4aiOkPu7I/Mho6/io6yxcXhsyzyGvoct/9oywTL6a3yLY6vGBz/wrc5juAcLOV2gE8MroJtMkO6MPsmsyGNYief/FHZsGPOydh8PHPkauEPgx6ng/IhtxB+U+hlDX4ZbXGDGjvIZWvEcLaB1xnAvc1L4EuD7jPIZKoqiKIqiKIqiKIqiKIqiKP+O37IfYPcmpK6KAAAAAElFTkSuQmCC",
        }
    },
    methods:{
        async send () {
           this.all_msg.push({msg:this.msg,role:'me'})
           let msg=await getRobotMsg(this.msg)
           this.all_msg.push({msg:msg,role:'not_me'})
           this.msg=''
           this.scrollToBottm()
        },
        scrollToBottm () {
            this.$nextTick( () => {
                var e = this.$refs.talk_list;
                e.scrollTop = e.scrollHeight
            })
            
        }
    },
    components:{
        HeaderBar
    }

}
</script>

<style>
.tab_input{
    flex: 0 0 8rem;
    line-height: 1.3rem;
    text-align: center
}
.input_type{
    width: 80%;
    height: 1rem;
    background-color:#f7f7fa ;
    margin-top: .15rem;
    left: .9rem;
    border-bottom: 1px solid green

}
.input_type::before{
     /* border-bottom-color:green */
}
.input_self{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0.1rem;
    width: 100%;
    background-color:#f7f7fa ;
}
.tab_send{
    flex: 1;
    text-align: center;
    
    line-height: 1.3rem;
    
}
.send_btn{
    font-size: .3rem;
    height: 1rem;
}
.talk_list{
    position: absolute;
    overflow: hidden;
    top:1.2rem;
    bottom: 1.3rem;
    width: 100%;
    background: rgba(192, 192, 192, 0.5);
    overflow: scroll;
    padding-bottom: .3rem;
}
.list_his_item{
    display: flex;
    width: 100%;
    height: auto;
    /* height: 1.5rem; */
    
    
}
.item_his_img{
    flex: 0 0 1.5rem;
}
.item_his_img img{
    width: 1rem;
    padding: .25rem


}
.item_his_msg{
   /* flex: 1; */
   font-size: 0;
   line-height: 1rem;

}
.item_his_text{
    font-size: .4rem;
    padding:0 .25rem
}
.item_his_border{
    margin-left: .25rem;
    margin-top: .25rem;
    /* height: 1rem; */
    background: white;
    position: relative; 
    width: auto;
    border-radius: .1rem;
   
    max-width: 7rem;
}
.item_his_border::before{
    content:""; 
    position: absolute; 
    right: 100%; 
    top: 26px; 
    width: 0; 
    height: 0; 
    border-top: 13px solid transparent; 
    border-right: .2rem solid white; 
    border-bottom: 13px solid transparent; 
}

.list_me_item{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: auto;
    /* height: 1.5rem; */
    
    
}
.item_me_img{
    flex: 0 0 1.5rem
}
.item_me_img img{
    width: 1rem;
    padding: .25rem


}
.item_me_msg{
    /* flex:1; */
    margin-right: .25rem;
    font-size: 0;
    line-height: 1rem;

}
.item_me_text{
    font-size: .4rem;
    padding:0 .25rem;
   
}
.item_me_border{
     margin-top: .25rem;
    background: white;
    position: relative; 
    width: auto;
    /* right: 1.75rem; */
    border-radius: .1rem;
   
    max-width: 7rem;
}
.item_me_border::before{
    content:""; 
    position: absolute; 
    left: 100%; 
    top: 26px; 
    width: 0; 
    height: 0; 
    border-top: 13px solid transparent; 
    border-left: .2rem solid white; 
    border-bottom: 13px solid transparent; 
}
</style>
