<template>
    <div ref="list">
         <div>
            <div 
                class="list_item border-bottom"
                v-for="user in msg"
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
    </div>
</template>

<script>
import Msg from '../../mock/msg.js'
export default {
     
    methods:{
        talkWithUser (user) {
            this.$router.push({
                path:'/talk',
                query:user
            })
      }
    },
    computed:{
        msg(){return Msg}
    }

}
</script>

<style scoped>
.list_item{
    /* background: #eee; */
    display: flex;
    height: 2rem;
    /* border-bottom: 1px solid #cccccc */
}
.list-img{
    flex: 0 0 2rem;
  
}
.list-img img{
    width: 1.6rem;
    padding: .2rem
}
.list-content{
    flex: 1
}
.list_user{
    margin: .4rem 0 .2rem .1rem;
    display: flex
}
.user_name{
    font-size: .5rem
}
.list_date{
    position: absolute;
    right: .1rem;
    font-size: .35rem;
    color: #C5C1AA
}
.list_msg{
    margin: .4rem 0 .2rem .1rem;
    font-size: .35rem;
    color: #C5C1AA
}

</style>
