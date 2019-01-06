<template>
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
</template>

<script>
export default {
    props:{
        words:{
            type:Array
        }
    },
    data(){
        return {
           // words:[]
        }
    },
    created(){

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
</style>
