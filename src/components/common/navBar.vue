<template>
    <wv-tabbar style="position:fixed;height:1.5rem">
      <wv-tabbar-item to="/msg" :is-on="is_select('微信')" class="wx_tabbar_item"> 
        <span slot="icon" style="display: inline-block; position: relative;">
          <span class="iconfont wx_icon" :style="[is_select('微信')?select_color:'']">&#xe61c;</span>
          <wv-badge class="wx_badge"  style="position: absolute;top: -2px;right: -13px;">8</wv-badge>
        </span>
        <span class="wx_navbar_text">微信</span>
      </wv-tabbar-item>
      <wv-tabbar-item to="/users" :is-on="is_select('通信录')" class="wx_tabbar_item">
          <span slot="icon" style="display: inline-block; position: relative;">
          <span class="iconfont" :style="[is_select('通信录')?select_color:'']">&#xe655;</span>
        </span>
        <span class="wx_navbar_text">通信录</span>
      </wv-tabbar-item>
      <wv-tabbar-item to="/find" :is-on="is_select('发现')"  class="wx_tabbar_item">
        <span slot="icon" style="display: inline-block; position: relative;">
          <span class="iconfont" :style="[is_select('发现')?select_color:'']">&#xe609;</span>
          <wv-badge class="wx_badge" is-dot style="position: absolute;top: 0;right: -6px;">8</wv-badge>
        </span>
        <span class="wx_navbar_text">发现</span>
      </wv-tabbar-item>
      <wv-tabbar-item to="/mine" :is-on="is_select('我')" class="wx_tabbar_item">
        <span slot="icon" style="display: inline-block; position: relative;">
          <span class="iconfont" :style="[is_select('我')?select_color:'']">&#xe648;</span>
        </span>
        <span class="wx_navbar_text">我</span>
      </wv-tabbar-item>
  </wv-tabbar>
</template>

<script>
export default {
  data () {
    return {
      is_on:"",
      select_color:{
        'color':'#32CD32'
      }
    }
  },
  watch:{
    '$route': {
       handler(newValue,oldValue){
          this.is_on=newValue.name
       },
       immediate:true
    }
  },
  methods:{
    is_select (name) {
      if(name===this.is_on)
        return true
      else
        return false
    }
  }

}
</script>

<style scoped>
.wx_navbar_text{
    font-size: 0.35rem
}
.wx_badge{
    font-size: .3rem;
    border-radius: 50%
}
.wx_tabbar_item{
    padding: .2rem 0 0
}
</style>
