<template>
    <div>
        <div class="company_profile_banner hidden-xs">
            <img src="~assets/img/healthy.jpg" alt="肽与健康">
        </div>
        <div class="company_profile_banner visible-xs">
            <img src="~assets/img/healthy_small.jpg" alt="肽与健康">
        </div>

        <b-container>
            <Loading :flag="loadingFlag"></Loading>
            <div class="product_show_page" v-if="!loadingFlag">
                <b-row>
                    <b-col lg="9" md="12" sm="12">
                        <div class="bread">
                            <b-breadcrumb :items="items"/>
                        </div>
                        <div class="news_content">
                            <h1 id="title">{{nTitle}}</h1>
                            <div class="title_info">
                                来源：<span id="from">{{from}}</span>
                                <span class="time" id="time">{{time}}</span>
                                <div class="share hidden-xs">
                                    <share :config="config"></share>
                                </div>
                                
                            </div>
                            <div class="news_body" v-html="content">
        
                            </div>
                        </div>
                        
                    </b-col>
                    <b-col lg="3" class="hidden-sm">
                            <slider-news></slider-news>
                        
                            <slider-about></slider-about>
                        
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>
<script>
    import axios from 'axios'
    import sliderNews from '~/components/slider_news.vue'
    import sliderAbout from '~/components/slider_about.vue'
    import Loading from '~/components/Loading/Loading'
    export default {
        validate ({params}){
            return /^\d+$/.test(params.id)
        },
        data(){
            return{
                title:this.$route.params.title,
                items: [{
                    text: '首页',
                    to: { name: 'index' }
                }, {
                    text: '肽与健康',
                    to: { name: 'healthy' },
                }, {
                    text: this.$route.params.title,
                    active: true
                }],
                content:'123',
                nTitle:'',
                from:'',
                time:'',
                config: {
                    
                    title               : this.$route.params.title, // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
                    description         : '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
                    image               : '', // 图片, 默认取网页中第一个img标签
                    disabled            : ['google', 'facebook', 'twitter','diandian','in'], // 禁用的站点
                    wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
                    wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>',
                    mobileSites: ['google', 'facebook', 'twitter','diandian','in']
                },
                loadingFlag:true
            }
        },
        components: {
            sliderNews,
            sliderAbout,
            Loading
        },
        mounted: function () {
            this.loadingArticles()
        },
        head(){
            return{
                title:this.$route.params.title,
                meta:[
                    {hid:'description',name:'news',content:this.config.description}
                ]
            }
        },
        methods:{
            
            loadingArticles () {
                axios.get('http://www.bjytzh.cn/jxc/showNewsById.thtml', {
                    params: {
                        n_id: this.$route.params.id
                    }
                }).then(res => {
                    //console.log(res)
                    if (res.status === 200) {
                        this.loadingFlag = false
                        
                        this.content = res.data.n_content
                        this.nTitle = res.data.n_title
                        this.from = res.data.n_from
                        this.time = res.data.n_time
                        this.config.image = res.data.n_img
                        this.config.description = res.data.n_abstract
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

.product_show_page .news_body img{
    width: 100%;
}
.bread{
    margin-top: 20px;
}
.news_content{
    border: 1px solid #ccc;
    border-top: 2px solid #009acc;
    padding: 35px 30px;
    margin-bottom: 30px;
}
.news_content h1{
    text-align: center;
    font-size: 1.8rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 30px;
}
.news_content .title_info{
    border-bottom: 1px solid #ccc;
    color: #666;
    line-height: 32px;
    padding-bottom: 10px;
}
.news_content .title_info .time{
    margin-left: 30px;
}
.news_content .title_info .share{
    float: right;
}
.news_content .title_info .share img{
    width: 30px;
    margin-right: 5px;
}

.news_content .title_info .share .jiathis_style_32x32{
    float: right;
    margin-left: 10px;
}



.news_content .news_body img{
    margin: 10px 0;
    width: 80%;
}
</style>