<template>
    <div class="aboutUs">
        <b-container>
            <section-title ytitle="关于我们" ytitleEn="ABOUT US"></section-title>
            <div class="aboutUs_body">
                <b-row>
                    <b-col sm="12" md="5" lg="5">
                        <div class="aboutUs_img">
                            <img src="~assets/img/company_info.jpg" alt="公司展示">
                        </div>
                    </b-col>
                    <b-col sm="12" md="7" lg="7">
                        <h3>
                            北京盈泰正和生物科技有限公司
                        </h3>
                        <hr width="30" style="background-color: #ccc;height: 1px;margin:15px 0;">
                        <p>
                            北京盈泰正和生物科技有限公司是一家以互联网+营养的大健康产业为发展起点，集研发、生产、销售的综合性企业。公司在北京、内蒙、哈尔滨等地设立近百人运营销售团队，并在内蒙建立技术研发、生产基地。承载崇尚科学，关爱生命，以人为本，服务大众，至诚至信的秉性理念，改善人类生活品质，实现健康新生活。
                        </p>
                        <nuxt-link :to="{name:'companyProfile'}">
                            查看更多 <img src="~assets/img/more.png" alt="">
                        </nuxt-link>
                        
                    </b-col>
                    
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
import sectionTitle from '~/components/index/sectionTitle.vue'

export default {
    components: {
        sectionTitle
    }
}
</script>

<style scoped>
.aboutUs{
    margin: 50px 0;
}
.aboutUs .aboutUs_body .aboutUs_img{
    text-align: center;
}
.aboutUs .aboutUs_body .aboutUs_img img{
    width: 100%;
}
.aboutUs .aboutUs_body .row div:nth-of-type(2) h3{
    font-size: 1.3rem;
    margin-top: 40px;
    color: #444;
    font-weight: bold;
}
.aboutUs .aboutUs_body .row div:nth-of-type(2) p{
    color: #666;
    line-height: 24px;
    margin-bottom: 20px;
}
.aboutUs .aboutUs_body .row div:nth-of-type(2) a{
    text-decoration: none;
    color: #fff;
    background: #009acc;
    padding: 5px 15px;

}
.aboutUs .aboutUs_body .row div:nth-of-type(2) a img{
    transition: all 0.45s;
    -webkit-transition: all 0.45s;
    -moz-transition: all 0.45s;
}
.aboutUs .aboutUs_body .row div:nth-of-type(2) a:hover img{
    transform: translateX(5px);
}

</style>
