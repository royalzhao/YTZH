<template>
    <div>
        
        <div class="product_show_slider">
            <!-- 侧边栏新闻资讯 -->
            <div class="slider_top">
                <h3><span></span>新闻资讯</h3>
            </div>
            <ul>
                <li v-for="(item,index) in news" :key="index">
                    <nuxt-link :to="{name:'news-id',params:{id:item.n_id}}">
                        <div class="news_img">
                            <img :src="item.n_img" alt="">
                        </div>
                        <div class="news_title">
                                {{item.n_title}}
                        </div>
                    </nuxt-link>
                </li>
            </ul>
            
            

        </div>
       
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                news:[],
                pageNum:1,
                pageSize:5,
                n_type:'news',
                key:'bg',
                
            }
        },
        mounted: function () {
            this.loadingArticles()
        },
        methods:{
            loadingArticles () {
                axios.get('http://www.bjytzh.cn/jxc/showNewsList.thtml', {
                    params: {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        n_type: this.n_type,
                        key: this.key,
                    }
                }).then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        this.news = res.data[0]
                    }
                })
            },
        }
    }
</script>
<style scoped>
.product_show_slider{
    margin-top: 30px;
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
    padding-bottom: 15px;
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

</style>