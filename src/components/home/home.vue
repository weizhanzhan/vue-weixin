<template>
    <div class="home">
        <header-bar :left_type="left_type"></header-bar>
        <router-view class="content"></router-view>
        <!-- <div ref="list" class="content" >
            <div>
                <div 
                    class="list_item border-bottom"
                    v-for="user in users"
                    :key="user.id"
                    @click="talkWithUser(user)"
                >
                    <div class="list-img ">
                        <img :src="user.avatar">
                    </div>
                    <div class="list-content">
                        <div class="list_user">
                            <div class="user_name">{{user.name}}</div>
                            <div class="list_date">{{user.date}}</div>
                        </div>
                        <div class="list_msg">{{user.msg}}</div>
                    </div>
                </div>
            
            </div>
        </div> -->
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import NavBar from '../common/navBar'
import HeaderBar from '../common/headerBar'
import BScroll from 'better-scroll'
export default {
  data(){
      return{
          url:"",
          left_type:{
              type:'left',
              content_type:"word",
              content:"微信（60）"
          },
          
      }
  },
  mounted(){
        // this.$nextTick(() => {
        //     let bscrollDom = this.$refs.list;
        //     this.aBScroll = new BScroll(bscrollDom,{
        //         click:true
        //     })
        // })   
    },
  components:{
      NavBar,
      HeaderBar
  }
}
</script>

<style scoped>
.home{
    /* position: relative; */
}
.content{
    position: absolute;
    overflow: hidden;
    top:1.2rem;
    bottom: 1.5rem;
    font-size: .4rem;
    width: 100%;
    /* overflow:scroll; */
}
.vx_item_img{
    width: 2rem;
    padding: .2rem
}

</style>
