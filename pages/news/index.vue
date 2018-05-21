<template>
    <div>
        <div class="company_profile_banner hidden-xs">
            <img src="~assets/img/news.jpg" alt="新闻中心">
        </div>
        <div class="company_profile_banner visible-xs">
            <img src="~assets/img/news_small.jpg" alt="新闻中心">
        </div>
        <b-container>
            <div class="news_center">
                <div v-for="(item,index) in news" :key="index">
                    <b-row>
                        <b-col lg="3" md="3" sm="12">
                            <div class="media-img">
                                <img class="media-object" :src="item.n_img" alt="新闻缩略图">
                            </div>
                            
                        </b-col>
                        <b-col lg="9" md="9" sm="12">
                            <div class="media-content">
                            <h4 class="media-heading">{{item.n_title}}</h4>
                            
                            <hr width="30" style="background-color: #ccc;height: 1px;margin:15px 0;">
                            <p>
                                {{item.n_abstract}}
                            </p>
                            <nuxt-link :to="{name:'news-id',params:{id:item.n_id,title:item.n_title}}">
                                查看更多 <img src="~assets/img/more.png" alt="">
                            </nuxt-link>
                            </div>
                        </b-col>
                    </b-row>    
                </div>
               
                <b-pagination size="md" align="center" :total-rows="total" v-model="pageNum" :per-page="pageSize">
                    </b-pagination>
               
                
            </div>
        </b-container>
        
            
        
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
            total:0,
            
        }
    },
    watch:{
        pageNum:function(){
            this.loadingArticles()
        }
    },
    mounted: function () {
        this.loadingArticles()
    },
    methods: {
        loadingArticles () {
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
                    this.total = res.data[1].count
                    //console.log(this.count)
                    //console.log(res.data[1].count)
                }
            })
        },
    
    }
}

</script>
<style scoped>
.company_profile_banner img{
    width: 100%;
}
.news_center{
    margin-top: 30px;
    border-top: 3px solid #009ACB;
    padding: 30px 20px 10px 20px;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    margin-bottom: 30px;
}
.news_center .row{
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(240, 237, 237);
    width: 95%;
    margin: 0 auto;
    margin-bottom: 20px;
}
.news_center .row:nth-last-of-type(1){
    border: 0;
}
.news_center .row .col{
    padding: 0;
}
.news_center .row .media-img img{
    width: 100%;
}
.news_center .row .media-content{
    padding-top: 15px;
    margin-left: 30px;
}
.news_center .row .media-content h4{
    font-size: 1.2rem;
    font-weight: bold;
}
.news_center .row .media-content p{
    color: #666;
    line-height: 24px;
    margin-bottom: 20px;
}
.news_center .row .media-content a{
    text-decoration: none;
    color: #fff;
    background: #009acc;
    padding: 5px 15px;
}
.news_center .row .media-content a img{
    transition: all 0.45s;
    -webkit-transition: all 0.45s;
    -moz-transition: all 0.45s;
}
.news_center .row .media-content a:hover img{
    transform: translateX(5px);
}

.news_center center{
    margin-top: 20px;
}

.news_center .pagination li a{
    margin: 0 5px;
    border-radius: 5px;
    color: #009acc;
}
.news_center .pagination li.active a{
    background-color:#009acc;
    border-color:#009acc;
    color: #fff;
}


</style>
    