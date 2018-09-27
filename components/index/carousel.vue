<template>
    <!-- 这是主页的轮播图 -->
    <div>
        <b-carousel id="carousel1"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ababab"
        :interval="4000"
        img-width="1024"
        img-height="480"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >

            <!-- Text slides with image -->
            <b-carousel-slide img-src="http://www.bjytzh.cn/img/banner3.jpg"
            ></b-carousel-slide>
            <b-carousel-slide img-src="http://www.bjytzh.cn/img/banner4.jpg"
            ></b-carousel-slide>
            <b-carousel-slide img-src="http://www.bjytzh.cn/img/banner5.jpg"
            ></b-carousel-slide>

        </b-carousel>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                slide: 0,
                sliding: null,
                img:''
            }
        },
        methods:{
            onSlideStart (slide) {
                this.sliding = true
            },
            onSlideEnd (slide) {
                this.sliding = false
            }
        }
    }
</script>
<style scoped>

</style>