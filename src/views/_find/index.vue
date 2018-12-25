<template>
    <div>
      <div v-for="(list,index) in find_list" :key="index">
        <list-item></list-item>
        <user-item 
            v-for="list in list" 
            :key="list.id" 
            :info="list">
        </user-item>
      </div>
    </div>
</template>

<script>
import userItem from '../../components/common/user_item'
import listItem from '../../components/common/list_item'
export default {
    data () {
        return {
            find_list:[
                [
                    {
                        name:"朋友圈",
                        avatar:"&#xe73b;",
                        id:'01',
                        font_color:'#7EC0EE',
                        info_img:require('@/assets/imgs/me.jpg')
                    }
                ],
                [
                    {
                        name:'扫一扫',
                        avatar:"&#xe650;",
                        id:'02',
                        font_color:'#4169E1'
                    },
                    {
                        name:'摇一摇',
                        avatar:"&#xe622;",
                        id:'03',
                        font_color:'royalblue'
                    }
                ],
                [
                    {
                        name:'附近的人',
                        avatar:'&#xe62c;',
                        id:'04',
                        font_color:'#CD0000'
                    },
                    {
                        name:'漂流瓶',
                        id:'05',
                        font_color:'',
                        img:require('@/assets/imgs/plp.png')
                    }
                ]
            ]
        }
    },
    components : {
        userItem,
        listItem
    }

}
</script>

<style scoped>

</style>
