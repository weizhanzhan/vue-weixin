<template>
    <div class="user_item border-bottom">
        <div class="user_avatar">
            <span 
                v-if="info.avatar"
                class="iconfont avatar" 
                :style="{'background':info.bg_color,'color':info.font_color}"
                v-html="info.avatar">
            </span>
            <img v-else :src="info.img">
        </div>
        <div class="user_name">{{info.name}}</div>
    <div class="info_img" v-if="info.info_img">
        <img :src="info.info_img" />
        <div class="info_badge"></div>
    </div>
    </div>
</template>

<script>
export default {
    props:['info']

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
