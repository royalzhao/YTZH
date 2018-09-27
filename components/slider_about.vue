<template>
    <div>
        
        <div class="product_show_slider">
            <!-- 侧边栏关于盈泰正和 -->
            <div id="toolbar">
                <div class="slider_top">
                    <h3><span></span>关于盈泰正和</h3>
                </div>

                <div class="kefu">
                    <img src="~assets/img/footer_right.jpg" alt="">
                    <div class="p_right">
                        <p>派普肽</p>
                        <p>客服微信</p>
                        <p><i class="iconfont icon-rise"></i>扫一扫</p>
                        <p>关注更多</p>
                    </div>
                </div>
                <div class="guan">
                    <div class="guan_img">
                        <img src="~assets/img/footer_guanwei.jpg" alt="">
                    </div>
                    
                    <div class="p_right">
                        <p>微信公众号</p>
                        <span>派普肽官方微信</span>
                        <p><i class="iconfont icon-rise"></i>扫一扫关注更多</p>
                        
                    </div>
                </div>
                <div class="chidao">
                    <div class="chidao_img">
                        <img src="~assets/img/footer_gongzhonghao.jpg" alt="">
                    </div>
                    
                    <div class="p_right">
                        <p>派普肽</p>
                        <span>让爱不迟到</span>
                        <p><i class="iconfont icon-rise"></i>扫一扫关注更多</p>
                        
                    </div>
                </div>
            </div>
            

        </div>
        
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
               
                
            }
        },
        
    }
</script>
<style scoped>
.product_show_slider{
    margin-top: 30px;
    margin-bottom: 30px;
}
.product_show_slider .slider_top{
    border-bottom:1px solid #666;
}
.product_show_slider .slider_top h3{
    font-size: 1.2rem;
    margin-bottom: 5px;
}
.product_show_slider .slider_top h3 span{
    width: 3px;
    height: 1.2rem;
    background: #009acc;
    display: block;
    margin-right: 5px;
    float: left;
}
.product_show_slider ul{
    margin-left: -40px;
}
.product_show_slider ul li{
    margin: 15px 0;
    border-bottom: 1px solid #ccc;
    clear: both;
    overflow: auto;
    padding: 15px 0;
}
.product_show_slider ul li:nth-last-of-type(1){
    border-bottom: 0;
}
.product_show_slider ul li a{
    text-decoration: none;
    color: #666;
    display: flex;
}
.product_show_slider ul li a .news_img{
    width: 60%;
    margin-right: 15px;
}
.product_show_slider ul li a .news_img img{
    width: 100%;
}
.product_show_slider ul li a .news_title{
    
}
.product_show_slider .kefu{
    background: #83d0d6;
    padding: 15px;
    margin-top: 15px;
    overflow: auto;
}
.product_show_slider .kefu img{
    width: 60%;
    float: left;
}
.product_show_slider .kefu .p_right{
    text-align: center;
}
.product_show_slider .kefu .p_right p{
    margin-bottom: 0.5rem;
}

.product_show_slider .kefu .p_right p:nth-of-type(1){
    font-size: 1.3rem;
    margin-top: 10px;
}
.product_show_slider .kefu .p_right p:nth-of-type(2){
    font-size: 1.3rem;
    font-weight: bold;
}
.product_show_slider .kefu .p_right p:nth-of-type(3) i{
    margin-right: 5px;
    margin-top: 15px;
}
.product_show_slider .guan{
    margin-top: 15px;
    overflow: auto;
}
.product_show_slider .guan .guan_img{
    width: 40%;
    padding: 5px;
    background: #84aed8;
    float: left;
    margin-right: 15px;
}
.product_show_slider .guan .guan_img img{
    width: 100%;
    
}
.product_show_slider .guan .p_right p:nth-of-type(1){
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 8px;
    margin-top: 5px;
}
.product_show_slider .guan .p_right span{
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    background: #0099cb;
    padding: 5px 10px;
    
}
.product_show_slider .guan .p_right p:nth-of-type(2){
    margin-top: 15px;
}
.product_show_slider .guan .p_right p:nth-of-type(2) i{
    margin-right: 5px;
    margin-top: 15px;
}
.product_show_slider .chidao{
    margin-top: 15px;
    overflow: auto;
}
.product_show_slider .chidao .chidao_img{
    width: 40%;
    padding: 5px;
    background: #d5a58f;
    float: left;
    margin-right: 15px;
}
.product_show_slider .chidao .chidao_img img{
    width: 100%;
    
}
.product_show_slider .chidao .p_right p:nth-of-type(1){
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 8px;
    margin-top: 5px;
}
.product_show_slider .chidao .p_right span{
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    background: #0099cb;
    padding: 5px 10px;
    
}
.product_show_slider .chidao .p_right p:nth-of-type(2){
    margin-top: 15px;
}
.product_show_slider .chidao .p_right p:nth-of-type(2) i{
    margin-right: 5px;
    margin-top: 15px;
}

</style>