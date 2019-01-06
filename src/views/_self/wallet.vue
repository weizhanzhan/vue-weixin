<template>
    <div>
        <header-bar 
            :left_type="left_type"
            :style="opacityStyle"
            :class="{'header':scroll_change}">
        </header-bar>
        <div class="content" ref="list">
            <div class="content-wrapper" >
                <div class="wrapper-list">
                    <div class="iconfont">&#xe649;</div>
                    <div>首付款</div>
                </div>
                <div class="wrapper-list">                 
                    <div class="iconfont">&#xe625;</div>
                    <div>零钱</div>
                    <div class="price">￥ 8888</div>                            
                </div>
                <div class="wrapper-list">
                    <div class="iconfont">&#xe66a;</div>
                    <div>银行卡</div>  
                </div>
            </div>
            <list-item class="item-list"></list-item>
            <grid></grid>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../../components/common/headerBar'
import Grid from '../../components/common/grid'
import listItem from '../../components/common/list_item'
// import BScroll from 'better-scroll'
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
        HeaderBar,
        listItem,
        Grid
    },
    methods:{
        handle_scroll () {
            var t =document.documentElement.scrollTop||document.body.scrollTop;
            if(t<110){
                if(t>50){
                    let opacity= t/130
                    opacity=opacity>1||opacity<.75 ? 1 :opacity
                    this.opacityStyle={ opacity }
                    console.log(1)
                }
                else{
                    let opacity=1
                    this.opacityStyle={ opacity }
                }         
                this.scroll_change=true
            }           
            else{
                console.log(2)
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
    //    this.bscroll= new BScroll(this.$refs.list)
    }

}
</script>

<style>
.header{
    background: #6E6E6E!important;
}
.content{
    position: absolute;
    top:1.2rem;
    /* bottom: 0; */
    width: 100%;
    overflow: hidden;
}
.content-wrapper{
    height: 2.8rem;
    width: 100%;
    background: #6E6E6E;
    display: flex
}
.wrapper-list{
    width: 33.3%;
    text-align: center;
    line-height: .9rem;
    color: #ffffff;
    font-size: .4rem
}
.price{
    font-size: .3rem;
    color: #D8D8D8
}
.item-list{
    height: .2rem!important;
}
</style>
