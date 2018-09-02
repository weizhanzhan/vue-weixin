import Router from 'vue-router'
import Vue from 'vue'

import Home from '../components/home/home.vue'
import TalkPage from '../components/talkPage'

//二级目录
import MsgList from '../components/home/msg_list'
import UserList from '../components/home/user_list'
import FindList from '../components/home/Find_list'
import YourSelf from '../components/home/your_self'

Vue.use(Router)
export const router =new Router({
    routes:[
        {
            path:"/",
            name:"主页",
            component:Home,
            children:[
                {
                    path:"/msg",
                    name:"微信",
                    component:MsgList
                },
                {
                    path:"/users",
                    name:"通信录",
                    component:UserList 
                },
                {
                    path:'/find',
                    name:"发现",
                    component:FindList
                },
                {
                    path:"/mine",
                    name:"我",
                    component:YourSelf
                }
            ]
        },
        {
            path:"/talk",
            name:"聊天",
            component:TalkPage
        }
    ],
    mode:"history"
})

