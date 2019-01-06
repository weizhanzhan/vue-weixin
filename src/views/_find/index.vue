<template>
    <div>
      <div v-for="(list,index) in find_list" :key="index">
        <list-item></list-item>
        <row-item
            v-for="list in list" 
            :key = "list.id"
            :icon="list.avatar"
            :label="list.name"
            :icon-color="list.font_color"
            :image="list.img"
        >
            <div  slot="right-img" v-if="list.info_img">
                <img  :src="list.info_img">
                <div class="info_badge"></div>
            </div>       
        </row-item>
      </div>
    </div>
</template>

<script>
import listItem from '../../components/common/list_item'
import RowItem from '../../components/common/row-item'
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
                        avatar:"&#xe642;",
                        id:'05',
                        font_color:'#7EC0EE',
                        // img:require('@/assets/imgs/plp.png')
                    }
                ]
            ]
        }
    },
    components : {
        listItem,
        RowItem
    }

}
</script>

<style scoped>

</style>
