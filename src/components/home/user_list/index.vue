<template>
    <div ref="userlist">
      <div>
        <user-item 
            v-for="m in menu" 
            :key="m.id"
            :info="m"
        >
        </user-item>
        <div class="user_list" v-for="(user,index) of userItems" :key="index">
            <div class="list_word">{{index}}</div>
            <user-item 
                v-for="m in user" 
                :key="m.id"
                :info="m"
            >
            </user-item>
        </div>
        <div class="slider-menu">
          <div v-for="(user,index) of userItems" :key="'a'+index">{{index}}</div>
        </div>
      </div>
      
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
            userItems:{}
        }
    },
    created () {
        for(var i=0;i<26;i++){      
          let key=String.fromCharCode(65+i)
      //    key={}
        let name=""
     
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
        console.log(this.userItems)
    },
    mounted () {
        let e = this.$refs.userlist
        this.scroll = new BScroll (e,{})
        console.log(e)
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
    top: 0;
    right: 0;
}
</style>
