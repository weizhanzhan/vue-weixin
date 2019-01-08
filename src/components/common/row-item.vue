<template>
    <div class="user_item border-bottom">
        <div class="user_avatar">
            <i 
                v-if="icon"
                class="iconfont avatar"         
                :style="{'color':iconColor,'background':bgColor,}" 
                v-html="icon"
            ></i>
            <img :src="image" v-if="image">
        </div>
        <div class="user_name">{{label}}</div>
    <div class="info_img">
        <slot name="right-img" ></slot>  
    </div>
   
    </div>
</template>

<script>
export default {
    props:{
        icon:{//左边图标
            type:String
        },
        label:{//中部名称
            type:String
        },
        iconColor:{//图标颜色
            type:String
        },
        bgColor:{//图标背景颜色
            type:String
        },
        image:{//左边图片
            type:String
        }
    }
}
</script>

<style scoped>
.user_item{
    display: flex;
    width: 100%;
    padding: .1rem .2rem
}
.user_avatar{
    flex: 0 0 1.25rem;
    text-align: center;
    line-height: 1rem
}
.user_avatar img{
    width: .8rem;
}
.avatar{
    width: 1rem;
    font-size: .7rem
}
.user_name{
    flex: 1;
    font-size: .4rem;
    line-height: 1rem
}
.info_img{
    flex: 0 0 1.5rem;
    line-height: 1rem;
}
.info_img img{
    width: .8rem;
}
.info_badge{
    width: .25rem;
    height: .25rem;
    background: red;
    position: absolute;
    right: .7rem;
    top: 0.1rem;
    border-radius: 50%
}
</style>
