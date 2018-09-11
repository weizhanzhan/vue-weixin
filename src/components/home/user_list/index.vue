<template>
    <div ref="userlist">
      <div>
        <user-item 
            v-for="m in menu" 
            :key="m.id"
            :info="m"
        >
        </user-item>
        <div class="user_list" v-for="(user,index) of userItems" :key="index" :ref="index+'s'">
            <div class="list_word">{{index}}</div>
            <user-item 
                v-for="m in user" 
                :key="m.id"
                :info="m"
            >
            </user-item>
        </div>       
      </div>
      <div class="slider-menu" :style="[touchStatus?touchBgColor:'']">
          <div
            class="menu_item"
            v-for="(user,index) in word" 
            :key="'a'+index"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            :ref="user"
            >{{user}}</div>
        </div>
        <div class="touch_word" v-if="touch_word">{{touch_word}}</div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import userItem from '../../common/user_item'
export default {
    data () {
        return {
            url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURQWvEP///53Xn9Lr0rjhuqvcren16Su1MW3GcEW7St3w3n7MgY7RkPT69FrBXsXmxhFC35IAAAI7SURBVGje7ZVBbtpQEIYnLqQNhMKPsQEHIswJsLiAuUHpCcINjNQDwA2gUtUtUVV1C+tu4AbJDcINyg06Y5OoNij1k7qpNN8CGb3//Z43M29MpCiKoiiKoiiKoiiKoiiKovynjBARvUWDH6u4syDUk6VJ91nhQx4s1CglOMsOM6IyXH68RJjSj2WJ6NEjE8MlekRFSJxLbFP6vSzRe/5rYljBL6I3kGA2iGTPH0srkpe1U4a1v+SQE0d04UowYy+tL6DJvyW2NTG0ZNfcwYDo3knry+gcc2Ji+A43RH4LD0T8lNIntd9hYWRIkuGgNrll62ZGf5C+OXhkZhjYbLoKOqxdZfQ+npIXGhn6XY4t9Btcng8ZvaSvjFtDwzkWFrYbj7tkfWyz5z0lLlVBuiDbh6+aTrGuYjEFxxNl9EXO6iXHbWZYQq/i8r7ZzpM99nA4HNDnfr/f40tyw9flKW2YCF6hiMGywSfrjR16SdE8CWPikO+SYQ6v8bCTEodB68Rw5FLgmBpeoTlu8+kGIs3oN/gqRebmjuKz3OUxpEkr4EKiLbcvo7/ATykyB7w+Fj2P4aiOkPu7I/Mho6/io6yxcXhsyzyGvoct/9oywTL6a3yLY6vGBz/wrc5juAcLOV2gE8MroJtMkO6MPsmsyGNYief/FHZsGPOydh8PHPkauEPgx6ng/IhtxB+U+hlDX4ZbXGDGjvIZWvEcLaB1xnAvc1L4EuD7jPIZKoqiKIqiKIqiKIqiKIqiKP+O37IfYPcmpK6KAAAAAElFTkSuQmCC",
            menu:[
                {
                    avatar:"&#xe617;",
                    name:"新的朋友",
                    id:'01',
                    bg_color:"#FFD700"
                },
                {
                    avatar:"&#xe61a;",
                    name:"群聊",
                    id:'02',
                    bg_color:"#00CD00"
                },
                {
                    avatar:"&#xe637;",
                    name:"标签",
                    id:'03',
                    bg_color:"#4876FF"
                },
                {
                    avatar:"&#xe68b;",
                    name:"公众号",
                    id:'04',
                    bg_color:"#79CDCD"
                },

                
            ],
            userItems:{},
            startY:"",
            word:[],
            touchStatus:false,
            touchBgColor:{
                "background": '#878787'
            },
            touch_word:''
        }
    },
    methods:{
        handleTouchStart () {
            this.touchStatus=true
            this.touch_word=''
        },
        handleTouchMove (e) {
            const touchY=e.touches[0].clientY-38  //触摸的高度
            const index=Math.floor((touchY-this.startY) /14.4 ) //除去每个的高度 判断index           
            if(this.word[index]){
                this.$nextTick(()=>{
                    if(this.timer)
                        clearTimeout(this.timer)
                    this.timer=setTimeout(()=>{ //节流减少move滑动频率 ，函数节流
                        const word=this.word[index]
                        this.touch_word=word
                        const e=this.$refs[word+'s']
                        this.scroll.scrollToElement(e[0])
                    })
                })
            }
        },
        handleTouchEnd () {
            this.touchStatus=false
            this.touch_word=''
        }
    },
    updated () {
        console.log("w")
    },
    created () {
        for(var i=0;i<26;i++){      
          let key=String.fromCharCode(65+i)
      //    key={}
          let name=""
          this.word.push(key)
          this.userItems[key]=[
              {
                 name:'张三',
                 img:this.url
              },
              {
                 name:'李四',
                 img:this.url
              },
              {
                 name:'王五',
                 img:this.url
              }
          ]
        }
    },
    mounted () {
        let e = this.$refs.userlist
        this.scroll = new BScroll (e,{})
        this.$nextTick(()=>{

            this.startY=this.$refs['A'][0].offsetTop//获取a 到顶部的距离
        })
    },
    components:{
        userItem
    }

}
</script>

<style scoped>
.list_word{
    width: 100%;
    background: #eeeeee;
    font-size: .35rem;
    color:gray;
    padding: .1rem .2rem
}
.slider-menu{
    position: fixed;
    top: 1.2rem;
    bottom: 1.5rem;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    /* font-size: .3rem; */
    width: .5rem;

}
.menu_item{
    line-height: .45rem
}
.touch_word{
    height: 2rem;
    width: 2rem;
    background: #8B8B83;
    position: fixed;
    top: 6rem;
    left: 4rem;
    text-align: center;
    line-height: 2rem;
    font-size: 1.5rem;
    color:white;
    border-radius: 0.2rem
}
</style>
