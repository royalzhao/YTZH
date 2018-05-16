<template>
    <div class="award">
        <b-container>
            <section-title ytitle="荣誉证书" class="title" ytitleEn="CERTIFICATES"></section-title>
            <div class="award_body">
                <div class="award_img">
                    <img src="~assets/img/award_17.jpg" alt="">
                </div>
                <div class="award_img">
                    <img src="~assets/img/award_19.jpg" alt="">
                </div>
                <div class="award_img">
                    <img src="~assets/img/award_21.jpg" alt="">
                </div>
                <div class="award_img">
                    <img src="~assets/img/award_23.jpg" alt="">
                </div>
                <div class="award_img">
                    <img src="~assets/img/award_25.jpg" alt="">
                </div>
            </div>
        </b-container>
    </div>
</template>
<script>
    import sectionTitle from '~/components/index/sectionTitle.vue'
    export default {
        data(){
            return{

            }
        },
        components: {
            sectionTitle
        },
    }
</script>
<style scoped>
.award{
    margin: 50px 0;
    background: #f5f5f5;
    padding: 50px 0;
}
.award .award_body{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.award .award_body .award_img img{
    transition: all 0.45s;
    -webkit-transform: all 0.45s;
    -moz-transform:all 0.45s;
}
.award .award_body .award_img:hover img{
    transform: scale(1.2)
}

@media only screen and (max-width:996px ) {
    .award .award_body .award_img{
        margin-top: 20px;
    }
}

@media only screen and (max-width:750px ) {
    .award .award_body .award_img {
        width: 200px;
        margin: 0 auto;
        margin-top: 20px;
    }
}
    
</style>