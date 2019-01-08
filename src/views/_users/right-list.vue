<template>
    <div>
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

export default {
    props:{
        word:{
            type:Array
        }
    },
    data(){
        return {       
            startY:"",  
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
            const index=Math.floor((touchY-this.startY) /16 ) //除去每个的高度 判断index           
            if(this.word[index]){
                this.$nextTick(()=>{
                    if(this.timer)
                        clearTimeout(this.timer)
                    this.timer=setTimeout(()=>{ //节流减少move滑动频率 ，函数节流
                        const word=this.word[index]
                        this.$emit('touch-word',word)
                        this.touch_word=word           
                    })
                })
            }
        },
        handleTouchEnd () {
            this.touchStatus=false
            this.touch_word=''
        }
    },
    mounted(){
        this.$nextTick(()=>{
            console.log(this.$refs['A'][0].offsetTop)
            this.startY=this.$refs['A'][0].offsetTop//获取a 到顶部的距离
        })
    }
}
</script>

<style>
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
