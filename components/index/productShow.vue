<template>
    <!-- 主页产品展示组件 -->
    <div class="productShow">
        <b-container>
            <section-title ytitle="产品展示" class="title" ytitleEn="PRODUCT DSIPLAY"></section-title>
            <div class="hidden-xs">
                <cascade-loop :list="list" :cur-width="555" :all-width="1110" :all-height="445"
                :cur-height="362" :scale="0.8"
                ></cascade-loop>
            </div>
            
            <div class="visible-xs">
                <div v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="banner in banners" :key="banner">
                        <img :src="banner">
                        </div>
                    </div>
                    <div class="swiper-pagination swiper-pagination-bullets"></div>
                </div>
            </div>
            

        </b-container>
    </div>
</template>
<script>
    import axios from 'axios'

    import sectionTitle from '~/components/index/sectionTitle.vue'
    import cascadeLoop from '~/components/index/carousel3D.vue'
    
    export default {
        data(){
            return{
                list:[
                    {content:'http://www.bjytzh.cn/img/product1.jpg'},
                    {content:'http://www.bjytzh.cn/img/product2.jpg'},
                    {content:'http://www.bjytzh.cn/img/product3.jpg'}
                ],
                banners: [
                    'http://www.bjytzh.cn/img/product1.jpg',
                    'http://www.bjytzh.cn/img/product2.jpg',
                    'http://www.bjytzh.cn/img/product3.jpg'
                ],
                swiperOption: {
                    loop: true,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    },
                    on: {
                        slideChange() {
                        console.log('onSlideChangeEnd', this);
                        },
                        tap() {
                        console.log('onTap', this);
                        }
                    }
                }
            }  
        },
        mounted(){
            //this.getImgData()
        },
        methods:{
            // async getImgData(){
            //     return axios.get('http://www.bjytzh.cn/jxc/showOfficialList.thtml?key=bg')
            //     .then((res)=>{
            //          console.log(res)
            //         // return {list:res.data}
            //         let listArr = [];
            //         for(let i of res.data){
            //             listArr.push({'content':i.c_img})
            //         }
            //         console.log(listArr)
            //         this.list = listArr
            //     })
                
            // },
        },
        
        components: {
            sectionTitle,cascadeLoop
        }
    }
</script>
<style scoped>
.productShow{
    background: url('~assets/img/product_bg.jpg');
    padding-bottom: 30px;
}
.title{
    padding-top: 40px;
}
.swiper-container .swiper-wrapper .swiper-slide img{
    width: 100%;
}
</style>