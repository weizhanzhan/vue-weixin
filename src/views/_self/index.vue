<template>
    <div ref="list">
        <div>
            <list-item></list-item>
            <div class="list_item" v-for="user in self.user" :key="user.id">
                <div class="list-img " @click="$router.push('/info')">
                    <img :src="user.avatar">
                </div>
                <div class="list-content" @click="$router.push('/info')">
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
        <div v-for="(menu,index) in self.list" :key="'m'+index">
          <list-item></list-item>
          <row-item 
              v-for="list in menu" 
              :key="list.id"
              :label="list.name"
              :icon="list.avatar"
              :icon-color="list.font_color"
              @click.native="go(list.path)"
          ></row-item>
        </div>
    </div>
</template>

<script>
  import userItem from '../../components/common/user_item'
  import RowItem from '../../components/common/row-item'
  import listItem from '../../components/common/list_item'
  import Self from '../../mock/self.js'
  export default {
    methods: {
      go(path) {
        if (path)
          this.$router.push(path)
      }
    },
    computed:{
      self(){ return Self}
    },
    components: {
      userItem,
      listItem,
      RowItem
    }
  }

</script>

<style scoped>
  .list_item {
    /* background: #eee; */
    display: flex;
    height: 2rem;
    /* border-bottom: 1px solid #cccccc */
  }

  .list-img {
    flex: 0 0 2rem;

  }

  .list-img img {
    width: 1.6rem;
    padding: .2rem
  }

  .list-content {
    flex: 1
  }

  .list_user {
    margin: .4rem 0 .2rem .1rem;
    display: flex
  }

  .user_name {
    font-size: .5rem
  }

  .list_msg {
    margin: .2rem 0 .2rem .1rem;
    font-size: .38rem;
    color: #C5C1AA
  }

  .list_ewm {
    flex: 0 0 2rem;
    line-height: 2rem;
    text-align: center
  }

</style>
