<template>
    <wv-header title=" " class="wx_header">
        <div :slot="left_type.type">
            <span 
                v-if="left_type.content_type=='word'" 
                class="title_left "
            >
                {{left_type.content}}
            </span>   
            <span
                v-if="left_type.content_type=='back'" 
                class="iconfont title_left"
                @click="go_back"
            >
                &#xe605; 
                <span>{{left_type.content}}</span>
            </span>         
        </div>
    
    </wv-header>
  
</template>

<script>
export default {
    props : {
        left_type : Object
    },
    methods : {
        go_back () {
            this.$router.back(-1)
        }
    }

}
</script>

<style scoped>
.wx_header{
    height: 1.2rem;
}
.title_left{
    font-size: 0.5rem;
    line-height: .9rem
}
</style>
