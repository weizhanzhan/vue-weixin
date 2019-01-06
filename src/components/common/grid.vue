<template>
    <div class="grid">
        <div class="grid-title">腾讯服务</div>
        <div 
            v-for="n in 30" 
            :key="n" 
            class="grid-item border">
            <div class="iconfont">&#xe64b;</div>
            <div class="grid-text">信用卡还款</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.grid{
    position: relative;
    overflow: hidden;
}
.grid-title{
    font-size: .45rem;
    padding: .2rem .4rem;
    color: #6E6E6E
}
.grid-item{
    float: left;
    width: 33.3333%;
    text-align: center;
    padding: .6rem 0
   
}
.grid-text{
    margin: .4rem 0 0 0
}
</style>
