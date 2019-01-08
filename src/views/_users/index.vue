<template>
    <div ref="userlist">
        <div>
            <row-item
                v-for="m in user.menu" 
                :key="m.id"
                :icon="m.avatar"
                :label="m.name"
                :bg-color="m.bg_color"
            >
            </row-item>
            <div class="user_list" v-for="(user,index) of userItems" :key="index" :ref="index+'s'">
                <div class="list_word">{{index}}</div>
                <row-item
                    v-for="m in user" 
                    :key="m.id"
                    :image="m.img"
                    :label="m.name"
                >
                </row-item>
            </div>       
        </div>
        <right-list @touch-word="changeWord" :word="word"></right-list>
    
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import RowItem from '../../components/common/row-item'
import RightList from './right-list.vue'
import User from '../../mock/user.js'

export default {
    data () {
        return {
            url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURQWvEP///53Xn9Lr0rjhuqvcren16Su1MW3GcEW7St3w3n7MgY7RkPT69FrBXsXmxhFC35IAAAI7SURBVGje7ZVBbtpQEIYnLqQNhMKPsQEHIswJsLiAuUHpCcINjNQDwA2gUtUtUVV1C+tu4AbJDcINyg06Y5OoNij1k7qpNN8CGb3//Z43M29MpCiKoiiKoiiKoiiKoiiKovynjBARvUWDH6u4syDUk6VJ91nhQx4s1CglOMsOM6IyXH68RJjSj2WJ6NEjE8MlekRFSJxLbFP6vSzRe/5rYljBL6I3kGA2iGTPH0srkpe1U4a1v+SQE0d04UowYy+tL6DJvyW2NTG0ZNfcwYDo3knry+gcc2Ji+A43RH4LD0T8lNIntd9hYWRIkuGgNrll62ZGf5C+OXhkZhjYbLoKOqxdZfQ+npIXGhn6XY4t9Btcng8ZvaSvjFtDwzkWFrYbj7tkfWyz5z0lLlVBuiDbh6+aTrGuYjEFxxNl9EXO6iXHbWZYQq/i8r7ZzpM99nA4HNDnfr/f40tyw9flKW2YCF6hiMGywSfrjR16SdE8CWPikO+SYQ6v8bCTEodB68Rw5FLgmBpeoTlu8+kGIs3oN/gqRebmjuKz3OUxpEkr4EKiLbcvo7/ATykyB7w+Fj2P4aiOkPu7I/Mho6/io6yxcXhsyzyGvoct/9oywTL6a3yLY6vGBz/wrc5juAcLOV2gE8MroJtMkO6MPsmsyGNYief/FHZsGPOydh8PHPkauEPgx6ng/IhtxB+U+hlDX4ZbXGDGjvIZWvEcLaB1xnAvc1L4EuD7jPIZKoqiKIqiKIqiKIqiKIqiKP+O37IfYPcmpK6KAAAAAElFTkSuQmCC",
            userItems:{},
            word:[],
           
        }
    },
    methods:{
        changeWord(val){
            const e=this.$refs[val+'s']
            this.scroll.scrollToElement(e[0])
        }
    },
    created () {
        for(var i=0;i<26;i++){      
          let key=String.fromCharCode(65+i)
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
    },
    computed:{
        user(){return User}
    },
    components:{
        RowItem,
        RightList
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

</style>
