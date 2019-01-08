<template>
    <div>
      <div v-for="(list,index) in find" :key="index">
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
import Find from '../../mock/find.js'
export default {
    computed:{
        find(){return Find}
    },
    components : {
        listItem,
        RowItem
    }

}
</script>

<style scoped>

</style>
