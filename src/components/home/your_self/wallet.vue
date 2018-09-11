<template>
    <div>
        <header-bar 
            :left_type="left_type"
            :style="opacityStyle"
            :class="{'header':scroll_change}">
        </header-bar>
        <div class="content">
            <div class="content-wrapper" >
                <div>首付款</div>
                <div>零钱</div>
                <div>银行卡</div>
            </div>
            <div v-for="n in 70" :key="n">{{scroll_change}}</div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../../common/headerBar'
export default {
    data () {
        return {
            left_type:{
                type:"left",
                content_type:"back",
                content:this.$route.name
            },
            scroll_change:true,
            opacityStyle:{
                opacity:1
            }
        }
    },
    components : {
        HeaderBar
    },
    methods:{
        handle_scroll () {
            var t =document.documentElement.scrollTop||document.body.scrollTop;
            if(t<110){
                if(t>50){
                    let opacity= t/130
                    opacity=opacity>1||opacity<.55 ? 1 :opacity
                    this.opacityStyle={ opacity }
                }          
                this.scroll_change=true
            }           
            else{
                let opacity= t/180             
                opacity=opacity>1 ? 1 :opacity
                this.opacityStyle={ opacity }
                this.scroll_change=false
            }  
            console.log(123)  
        }
    },
    mounted(){
        window.addEventListener("scroll",this.handle_scroll)
    }

}
</script>

<style>
.header{
    background: #B0B0B0!important;
   
}
.content{
    position: absolute;
    top:1.2rem;
    width: 100%;
    overflow: hidden;
    top:1.2rem;
}
.content-wrapper{
    height: 2.5rem;
    width: 100%;
    background: #B0B0B0
}
</style>
