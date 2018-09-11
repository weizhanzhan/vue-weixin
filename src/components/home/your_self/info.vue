<template>
    <div class="info">
        <header-bar :left_type="left_type"></header-bar>
        <div class="content">
            <listItem></listItem>
            <div class="menu_img_list border-bottom">
                <div class="list_img_title">头像</div>
                <div class="list_img_content">
                    <img  :src="require('@/assets/imgs/me.jpg')"/>
                </div>
            </div>
            <div class="menu_list border-bottom" v-for="list in listData" :key="list.id">
                
                <div class="list_title">{{list.title}}</div>
                <div class="list_content">
                    <div v-if="list.title=='二维码名片'" class="iconfont" v-html="list.value"></div>
                    <span v-else>{{list.value}}</span>
                </div>
            </div>
            <listItem></listItem>
            <div class="menu_list border-bottom" >              
                <div class="list_title">{{address.title}}</div>
                <div class="list_content">                
                   {{address.value}}
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import listItem from '../../common/list_item'
import HeaderBar from '../../common/headerBar'
export default {
    data () {
        return {
             left_type:{
                type:"left",
                content_type:"back",
                content:this.$route.name
            },
            address: {
                    title:'我的地址',
                    value:'',
                    id:'005'
                },
            listData:[
                {
                    title:'昵称',
                    value:'zhanwei',
                    id:'001'
                },
                {
                    title:'微信号',
                    value:'weizhan18005229695',
                    id:'002'
                },
                {
                    title:'二维码名片',
                    value:'&#xe668;',
                    id:'003'
                },
                {
                    title:'更多',
                    value:'',
                    id:'004'
                },
               
            ]
        }
    },
    components:{
        listItem,
        HeaderBar
    }
}
</script>

<style scoped>

.content{
    position: absolute;
    top:1.2rem;
    width: 100%;
    overflow: hidden;
}
.menu_img_list,.menu_list{
   padding: .3rem
}
.list_img_title{
    display: inline-block;
    line-height: 1.5rem;
    font-size: .4rem

}
.list_title{
    display: inline-block;
    font-size: .4rem
}
.list_img_content,.list_content{
    display: block;
    float: right;
    color: #B0B0B0
}
.list_img_content img{
    width: 1.5rem;
    margin-bottom: .3rem
}
</style>
