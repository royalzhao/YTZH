<template>
    <div class="news">
        <b-container>
            <section-title ytitle="新闻资讯" class="title" ytitleEn="NEWS INFORMATION"></section-title>
            <div class="news_body">
                <b-row>
                    <b-col sm="12" md="5" lg="5">
                        <div class="news_img">
                            <img src="~assets/img/company_info.jpg" alt="">
                        </div>
                    </b-col>
                    <b-col  sm="12" md="7" lg="7">
                        <div class="news-top">
                            <h3>
                                盈泰正和荣膺“重质守信－315满意单位”
                            </h3>
                            <hr width="30" style="background-color: #ccc;height: 1px;margin:15px 0;">
                            <p>
                                2018年中国保护消费者基金会在全国开展3.15“维护消费者权益，诚信服务满意单位”大型推介活动。经过评审与筛选，北京盈泰正和生物科技有限公司以其优质满意的服务和良好的用户口碑赢得消费者的认同，荣获“重质守信—3·15满意单位”称号，以表彰公司在业界树立行业规范......
                            </p>
                            <nuxt-link :to="{name:'news-id',params:{id:16,title:'盈泰正和荣膺“重质守信－315满意单位”'}}">
                                查看更多 <img src="~assets/img/more.png" alt="">
                            </nuxt-link>
                        </div>
                        
                    </b-col>
                </b-row>
                <b-row>
                    <b-col  sm="12" md="4" lg="4" v-for="(item,index) in news" :key="index">
                        <div class="news_list">
                            <h3>{{item.n_title}}</h3>
                            <hr width="30" style="background-color: #ccc;height: 1px;margin:10px 0;">
                            <p>
                                {{item.n_abstract}}
                                <nuxt-link :to="{name:'news-id',params:{id:item.n_id,title:item.n_title}}">更多 >></nuxt-link>
                                
                            </p>
                            
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>
<script>
    import sectionTitle from '~/components/index/sectionTitle.vue'
    import axios from 'axios'
    export default {
        data(){
            return{
                news:[],
                pageNum:1,
                pageSize:3,
                n_type:'news',
                key:'bg',
            }
        },
        components: {
            sectionTitle
        },
        mounted: function () {
            this.loadingNews()
        },
        methods:{
            loadingNews () {
                axios.get('http://www.bjytzh.cn/jxc/showNewsList.thtml', {
                    params: {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        n_type: this.n_type,
                        key: this.key,
                    }
                }).then(res => {
                    //console.log(res)
                    if (res.status === 200) {
                        this.news = res.data[0]
                    }
                })
            },
        }
    }
</script>
<style scoped>
.news{
    margin: 50px 0;
}
.news .news_body .news_img{
    text-align: center;
}
.news .news_body .news_img img{
    width: 100%;
}
.news .news_body  .news-top h3{
    font-size: 1.3rem;
    margin-top: 40px;
    color: #444;
    font-weight: bold;
}
.news .news_body  .news-top p{
    color: #666;
    line-height: 24px;
    margin-bottom: 20px;
}
.news .news_body  .news-top a{
    text-decoration: none;
    color: #fff;
    background: #009acc;
    padding: 5px 15px;
}
.news .news_body  .news_list{
    background: #f5f5f5;
    padding: 20px 15px;
    box-sizing: border-box;
    margin-top: 40px;
    height: 90%;
}
.news .news_body  .news_list h3{
    font-size: 1.3rem;
    color: #444;
    font-weight: bold;
    line-height: 24px;
}
.news .news_body  .news_list p{
    line-height: 24px;
    color: #666;
    margin-bottom: 0;

}
.news .news_body  .news_list p a{
    text-align: center;
    color: #029acc;
    background: transparent;
}
.news .news_body  .news_list p a:hover{
    color: #037499;
    text-decoration: none;
}
.news .news_body  div:nth-of-type(2) a img{
    transition: all 0.45s;
    -webkit-transition: all 0.45s;
    -moz-transition: all 0.45s;
}
.news .news_body  div:nth-of-type(2) a:hover img{
    transform: translateX(5px);
}
</style>