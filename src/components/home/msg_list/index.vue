<template>
    <div ref="list">
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
    </div>
</template>

<script>
export default {
    data () {
        return {
            users:[
              {
                  name:"聊天机器人",
                  id:"001",
                  date:"2018-9-2",
                  avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURQWvEP///53Xn9Lr0rjhuqvcren16Su1MW3GcEW7St3w3n7MgY7RkPT69FrBXsXmxhFC35IAAAI7SURBVGje7ZVBbtpQEIYnLqQNhMKPsQEHIswJsLiAuUHpCcINjNQDwA2gUtUtUVV1C+tu4AbJDcINyg06Y5OoNij1k7qpNN8CGb3//Z43M29MpCiKoiiKoiiKoiiKoiiKovynjBARvUWDH6u4syDUk6VJ91nhQx4s1CglOMsOM6IyXH68RJjSj2WJ6NEjE8MlekRFSJxLbFP6vSzRe/5rYljBL6I3kGA2iGTPH0srkpe1U4a1v+SQE0d04UowYy+tL6DJvyW2NTG0ZNfcwYDo3knry+gcc2Ji+A43RH4LD0T8lNIntd9hYWRIkuGgNrll62ZGf5C+OXhkZhjYbLoKOqxdZfQ+npIXGhn6XY4t9Btcng8ZvaSvjFtDwzkWFrYbj7tkfWyz5z0lLlVBuiDbh6+aTrGuYjEFxxNl9EXO6iXHbWZYQq/i8r7ZzpM99nA4HNDnfr/f40tyw9flKW2YCF6hiMGywSfrjR16SdE8CWPikO+SYQ6v8bCTEodB68Rw5FLgmBpeoTlu8+kGIs3oN/gqRebmjuKz3OUxpEkr4EKiLbcvo7/ATykyB7w+Fj2P4aiOkPu7I/Mho6/io6yxcXhsyzyGvoct/9oywTL6a3yLY6vGBz/wrc5juAcLOV2gE8MroJtMkO6MPsmsyGNYief/FHZsGPOydh8PHPkauEPgx6ng/IhtxB+U+hlDX4ZbXGDGjvIZWvEcLaB1xnAvc1L4EuD7jPIZKoqiKIqiKIqiKIqiKIqiKP+O37IfYPcmpK6KAAAAAElFTkSuQmCC",
                  msg:"好久不见"
                 
              }
          ]   
        }
    },
      methods:{
      talkWithUser (user) {
        this.$router.push({
            path:'/talk',
            query:user
        })
      }
    },

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
