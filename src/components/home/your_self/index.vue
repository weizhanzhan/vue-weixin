<template>
    <div ref="list">
         <div>
            <div class="list-menu"></div>
            <div 
                class="list_item"
                v-for="user in users"
                :key="user.id"
            >
                <div class="list-img ">
                    <img :src="user.avatar">
                </div>
                <div class="list-content">
                    <div class="list_user">
                        <div class="user_name">{{user.name}}</div>
                    </div>
                    <div class="list_msg">微信号:{{user.weixin_num}}</div>
                </div>
                <div class="list_ewm">
                    <span class="iconfont">&#xe668;</span>
                </div>
            </div>       
          </div>
          <div v-for="(menu,index) in menu_list" :key="'m'+index">
              <div class="list-menu"></div>
              <user-item
                  v-for="list in menu"
                  :key="list.id"
                  :info="list"
              ></user-item>
          </div>
    </div>
</template>

<script>
import userItem from '../../common/user_item'
export default {
    data () {
        return {
            users:[
              {
                  name:"zhanwei",
                  id:"001",
                  date:"2018-9-2",
                  avatar:require('@/assets/imgs/me.jpg'),
                  weixin_num:"weizhan675398552"
                 
              }
           ],
           menu_list:[
                [
                    {
                        name:"钱包",
                        avatar:"&#xe649;",
                        id:'01',
                        font_color:'#7EC0EE',
                    }
                ],
                [
                    {
                        name:'收藏',
                        avatar:"&#xe646;",
                        id:'02',
                        font_color:'#4169E1'
                    },
                    {
                        name:'相册',
                        avatar:"&#xe621;",
                        id:'03',
                        font_color:'royalblue'
                    },
                    {
                        name:"卡包",
                        avatar:'&#xe61d;',
                        id:'04',
                        font_color:'#4169E1'
                    }
                ],
                [
                    {
                        name:'设置',
                        avatar:'&#xe64e;',
                        id:'05',
                        font_color:'darkorange'
                    }
                ]
            ] 
        }
    },
    components :{
        userItem
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

.list_msg{
    margin: .2rem 0 .2rem .1rem;
    font-size: .38rem;
    color: #C5C1AA
}
.list_ewm{
    flex: 0 0 2rem;
    line-height: 2rem;
    text-align: center
}
.list-menu{
    width: 100%;
    background: #eeeeee;
    height: .4rem;
    padding: .1rem .2rem
}
</style>
