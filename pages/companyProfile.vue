<template>
    <div>
        <div class="company_profile_banner hidden-xs">
            <img src="~assets/img/company_profile.jpg" alt="企业概况">
        </div>
        <div class="company_profile_banner visible-xs">
            <img src="~assets/img/company_profile_small.jpg" alt="企业概况">
        </div>
        
        <b-container>
            <div class="company_profile_content">
                <b-card no-body>
                    <b-tabs pills card vertical  nav-wrapper-class="w-25">
                        <b-tab title="企业概况" disabled></b-tab>
                        <b-tab title="公司简介" active>
                            <div class="jianjie">
                                <h2>北京盈泰正和生物科技有限公司</h2>
                                <span class="jianjie_img">
                                    <img src="~assets/img/company_info.jpg" alt="">
                                </span>
                                <p>
                                        北京盈泰正和生物科技有限公司是一家以互联网+营养大健康产业为发展起点，集研发、生产、销售的综合性企业。公司在北京、内蒙、无锡、哈尔滨等地设立近百人运营销售团队，并在内蒙建立技术研发、生产基地。承载崇尚科学，关爱生命，以人为本，服务大众，至诚至信的秉性理念，改善人类生活品质，实现健康新生活。
                                </p>
                                <p>
                                        “普及营养健康知识，提高营养健康服务，让每一个生命更有质量与意义。”北京盈泰正和生物科技有限公司以最先进生物科技为基础，以“健康中国人、强壮中国人”为己任。让科技创新与生命健康并行，提高全民健康水平，以健康梦托起中国梦。
                                </p>
                            </div>
                                
                        </b-tab>
                        <b-tab title="资质荣誉">
                            <div class="rongyu">
                                <div class="rongyu_item">
                                    <img src="~assets/img/award_17.jpg" alt="">
                                    <p>中国食品行业安全放心承诺单位</p>
                                </div>
                                <div class="rongyu_item">
                                    <img src="~assets/img/award_19.jpg" alt="">
                                    <p>
                                        
                                        中国食品公信力品牌
                                    </p>
                                </div>
                                <div class="rongyu_item">
                                    <img src="~assets/img/award_21.jpg" alt="">
                                    <p>全国食品行业诚信经营示范单位</p>
                                </div>
                                <div class="rongyu_item">
                                    <img src="~assets/img/award_23.jpg" alt="">
                                    <p>
                                            2017中国最具投资价值科技型企业
                                    </p>
                                </div>
                                <div class="rongyu_item">
                                    <img src="~assets/img/award_25.jpg" alt="">
                                    <p>
                                            2017中国科技创新最佳发明成果奖
                                    </p>
                                </div>
                                <div class="rongyu_item">
                                    <img src="~assets/img/award_26.jpg" alt="">
                                    <p>
                                            2018重质守信－315满意单位
                                    </p>
                                </div>
                            </div>
                                
                        </b-tab>
                        <b-tab title="专家介绍">
                            <div class="jieshao">
                                <div class="person">
                                    <div class="person_img thumbnail">
                                        <img src="~assets/img/person.jpg" alt="">
                                    </div>
                                    <div class="person_info">
                                        <ul>
                                            <li>
                                                <h1>刘新旗<small>教授</small></h1>
                                            </li>
                                            <li>
                                                国家千人计划专家
                                            </li>
                                            <li>
                                                国家特聘专家
                                            </li>
                                            <li>
                                                国家863国家级科研项目专家
                                            </li>
                                            <li>
                                                原中粮营养健康研究院首席科学家
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                        刘新旗教授1962年9月生，1996年于日本国立东京农工大学获得博士学位，日本国立食品综合研究所博士后。曾任日本不二富吉（北京）科技有限公司副总经理，日本不二制油株式会社食品研究所首席研究员等重要职务。
                                </p>
                                <p>
                                        刘新旗教授长期从事蛋白质的分子构造和功能性的研究工作。特别是近十年来专注大豆的深加工和利用，在营养价值极高的植物性大豆蛋白，大豆肽，大豆多糖等的生产技术和应用技术研究领域有很高的造诣。
                                </p>
                                        
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </b-container>
        
        
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>
<style scoped>

.company_profile_banner img{
    width: 100%;
}
.company_profile_content{
    margin: 30px 0;
}
.company_profile_content p{
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
}
.company_profile_content .card{
    border: 0;
}
.company_profile_content .card .nav-pills{
    border: 1px solid #ccc;
}

.jianjie h2{
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
}
.jianjie .jianjie_img{
    width: 80%;
    margin:20px auto;
    display: block;
    text-align: center;
}
.jianjie p{
    text-indent: 2rem;
    line-height: 26px;
    margin-bottom: 20px;
    color: #666;
    font-size: 1rem;
    font-weight:normal;
}
.rongyu{
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
    
}
.rongyu .rongyu_item{
    width: 33.333%;
    text-align: center;
    margin: 10px 0;
}
.rongyu .rongyu_item p{
    margin-top: 10px;
    font-size: 1rem;
    font-weight:normal;
}
.jieshao{
    padding: 45px 25px;
    color: #666;
}
.jieshao .person{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.jieshao .person .person_img{
    margin-right:50px; 
}
.jieshao .person .person_info ul li{
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
}
.jieshao .person .person_info ul li:nth-of-type(1) h1{
    font-size: 2rem;
    font-weight: bold;
    color: #000;
}
.jieshao .person .person_info ul li:nth-of-type(1) h1 small{
    margin-left: 5px;
}
.jieshao .person .person_info ul li:nth-last-of-type(1){
    border: 0;
}
.jieshao p{
    margin: 20px 0;
    line-height: 25px;
    text-indent: 2em;
    font-size: 1rem;
    font-weight:normal;
    text-align: left;
}

</style>