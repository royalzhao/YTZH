<template>
    <div class="footer">
        <b-container>
            <div class="container">
                <div class="footer_1">
                    <div class="footer_1_img">
                        <img src="~assets/img/logo_footer.png" alt="">
                    </div>
                    <div class="footer_1_bottom">
                        <div class="fuwuhao">
                            <img src="~assets/img/footer_guanwei.jpg" alt="">
                            <p>派普肽官微</p>
                        </div>
                        <div class="gongzhonghao">
                            <img src="~assets/img/footer_gongzhonghao.jpg" alt="">
                            <p>让爱不迟到</p>
                        </div>
                    </div>
                </div>
                <div class="line hidden-xs"></div>
                <div class="footer_2">
                    <h3>联系我们</h3>
                    <hr>
                    <p>
                        客服电话：010-57203556
                    </p>
                    <p>
                        传真：57203556
                    </p>
                    <p>
                        邮编：570000
                    </p>
                    <p>
                        地址：北京市朝阳区高碑店乡高碑店村民俗文化街
                    </p>
                    
                </div>
                <div class="footer_3 hidden-sm hidden-xs">
                    <h3>企业概况</h3>
                    <hr width="30" style="background-color: #ccc;height: 1px;margin:15px 0;">
                    <p>
                        <nuxt-link :to="{name:'companyProfile'}">公司简介</nuxt-link>
                    </p>
                    <p>
                        <nuxt-link :to="{name:'companyProfile'}">专家介绍</nuxt-link>
                    </p>
                    <p>
                        <nuxt-link :to="{name:'companyProfile'}">资质荣誉</nuxt-link>
                    </p>
                    
                </div>
                <div class="footer_4 hidden-sm hidden-xs">
                    <h3>在线购买</h3>
                    <hr width="30" style="background-color: #ccc;height: 1px;margin:15px 0;">
                    <p>
                        <a href="https://shop554416026.taobao.com/index.htm?spm=2013.1.w5002-17416182051.2.1746efa7YdAJ37">淘宝</a>
                    </p>
                    <p>
                        <a href="https://weidian.com/s/1255864727?wfr=c&ifr=shopdetail">微店</a>
                    </p>
                </div>
                <div class="footer_5 visible-lg">
                    <h3>派普肽客服微信</h3>
                    <hr width="30" style="background-color: #ccc;height: 1px;margin:15px 0;">
                    <div class="fuwuhao">
                        <img src="~assets/img/footer_guanwei.jpg" alt="">
                    </div>
                </div>
            </div>
        </b-container>
        <div class="footer-bottom">
            <p>
                Copyright © 2002-2017 北京盈泰正和生物科技有限公司 版权所有 <span class="hidden-xs">京ICP备17069116号</span>
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
.footer{
    background: #3a3a3a;
    
}
.footer .container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 30px 0;
}
.footer .container .line{
    width: 1px;
    background: #666;
    margin: 0 30px;
}
.footer .footer_1{
    
    text-align: center;
}
.footer .footer_1 .footer_1_bottom{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #292929;
    padding: 10px;
    text-align: center;
}
.footer .footer_1 .footer_1_bottom img{
    width: 80px;
}
.footer .footer_1 .footer_1_bottom p{
    color: #ccc;
    margin-top: 5px;
}
.footer .footer_2{
    width: 250px;
}
.footer .footer_2 h3,.footer .footer_3 h3,.footer .footer_4 h3,.footer .footer_5 h3{
    font-size: 1.2rem;
    color: #fff;    
    font-weight: bold;
}
.footer .footer_2 p,.footer .footer_3 p,.footer .footer_4 p,.footer .footer_5 p{
    color: #ccc;
    line-height: 24px;
}
.footer .footer_2 hr{
    margin: 15px 0;
    background-color: #ccc;height: 1px;
    width: 30px;
}
.footer .footer_3 p a,.footer .footer_4 p a{
    color: #ccc !important;
}
.footer .footer_3 p a:hover,.footer .footer_4 p a:hover{
    color: #999;
    text-decoration: none;
}
.footer .footer_3{
    
    margin-left: 15px;
}
.footer .footer_4{
    
    margin-left: 15px;
}
.footer .footer_5{
    
    margin-left: 15px;
}
.footer .footer_5 img{
    width: 120px;
}
.footer .footer-bottom{
    background: #292929;
    color: #666;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 0.8rem;

}
.footer .footer-bottom p{
    margin-bottom: 0;
}
@media screen and (max-width:750px ) {
    .footer .footer_2 {
        width: 250px;
        text-align: center;
        margin: 0 auto;
        margin-top: 0px;
        margin-top: 20px;
    }
    .footer .footer_2 hr{
        margin: 15px auto;
        background-color: #ccc;height: 1px;
        width: 30px;
    }
    .footer .footer_1 {
        text-align: center;
        width: 200px;
        margin: 0 auto;
    }
}

</style>