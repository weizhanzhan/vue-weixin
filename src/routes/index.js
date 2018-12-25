import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)
export const router =new Router({
    routes:[
        {
            path:"/",
            name:"主页",
            component:()=>import('../views/layout.vue'),
            redirect:'/msg',
            children:[
                {
                    path:"/msg",
                    name:"微信",
                    component:()=>import('../views/_msg')
                },
                {
                    path:"/users",
                    name:"通信录",
                    component:()=>import('../views/_users') 
                },
                {
                    path:'/find',
                    name:"发现",
                    component:()=>import('../views/_find')
                },
                {
                    path:"/mine",
                    name:"我",
                    component:()=>import('../views/_self')
                }
            ]
        },
        {
            path:"/talk",
            name:"聊天",
            component:()=>import('../components/talkPage')
        },
        {
            path:'/info',
            name:"个人信息",
            component:()=>import('../views/_self/info.vue')
        },
        {
            path:'/wallet',
            name:'我的钱包',
            component:()=>import('../views/_self/wallet.vue')
        }
    ],
    mode:"history"
})

