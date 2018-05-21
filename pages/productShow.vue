<template>
    <div>
        <div class="company_profile_banner hidden-xs">
            <img src="~assets/img/product_show.png" alt="产品展示">
        </div>
        <div class="company_profile_banner visible-xs">
            <img src="~assets/img/product_show_small.jpg" alt="产品展示">
        </div>
        <b-container>
            <div class="product_show_page">
                <b-row>
                    <b-col lg="9" md="12" sm="12">
                        <div class="product_show_content">
                            <img src="~assets/img/product_content.jpg" alt="">
                        </div>
                    </b-col>
                    <b-col lg="3"  class="hidden-sm">
                        <slider-news></slider-news>
                        <slider-about></slider-about>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>
<script>
    import sliderNews from '~/components/slider_news.vue'
    import sliderAbout from '~/components/slider_about.vue'
    export default {
        data(){
            return{
                sliderFixed:false
            }
        },
        components: {
            sliderNews,
            sliderAbout,
        },
        mounted(){
           
        },
        methods:{
           
        }
    }
</script>
<style scoped>
.company_profile_banner img{
    width: 100%;
}
.product_show_page .product_show_content{
    margin-top: 30px;
    border: 1px solid #ccc;
    border-top: 2px solid #009acc;
    padding: 35px 30px;
    margin-bottom: 30px;
}
.product_show_page .product_show_content img{
    width: 100%;
}
.Fixed{
    position: fixed;
    top: 0;
    width: 262px;
}
</style>