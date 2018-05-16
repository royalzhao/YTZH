<template>
    <div class="skill">
        <b-container>
            <section-title ytitle="技术专家" class="title" ytitleEn="TECHNICAL EXPERT"></section-title>
            <div class="skill_body">
                <b-row>
                    <b-col sm="12" md="8" lg="4">
                        <div class="person_info">
                            <h1>刘新旗<small>教授</small></h1>
                            <img src="~assets/img/skill_03.png" alt="">
                            <p>
                                刘新旗教授，国家千人计划专家，国家特聘专家，国家863国家级科研项目专家，原中粮营养健康研究院首席科学家。1962年9月生，1996年于日本国立东京农工大学获得博士学位，日本国立食品综合研究所博士后。
                                <nuxt-link :to="{name:'companyProfile'}">详细 >></nuxt-link>
                            </p>
                        </div>

                    </b-col>
                    <b-col  sm="12" md="4" lg="2">
                        <div class="person_img img2">
                            <img src="~assets/img/skill_33.jpg" alt="">
                        </div>
                    </b-col>
                    <b-col  sm="12" md="4" lg="2">
                        <div class="person_img img3">
                            <img src="~assets/img/skill_35.jpg" alt="">
                        </div>
                    </b-col>
                    <b-col  sm="12" md="8" lg="4">
                        <div class="video_info video">
                            
                            <div class="video-player-box"
                                :playsinline="playsinline"
                                @play="onPlayerPlay($event)"
                                @pause="onPlayerPause($event)"
                                @ended="onPlayerEnded($event)"
                                @loadeddata="onPlayerLoadeddata($event)"
                                @waiting="onPlayerWaiting($event)"
                                @playing="onPlayerPlaying($event)"
                                @timeupdate="onPlayerTimeupdate($event)"
                                @canplay="onPlayerCanplay($event)"
                                @canplaythrough="onPlayerCanplaythrough($event)"
                                @ready="playerReadied"
                                @statechanged="playerStateChanged($event)"
                                v-video-player:myVideoPlayer="playerOptions">
                            </div>
        
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>
<script>
    import sectionTitle from '~/components/index/sectionTitle.vue'
    export default {
        data(){
            return{
                playsinline: true,
        
                // videojs options
                playerOptions: {
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "http://www.yingtaizhenghe.com/video/video.mp4"
                    }],
                    poster: "http://www.yingtaizhenghe.com/img/video.png",
                }
            }
        },
        components: {
            sectionTitle
        },
        methods:{
            // listen event
            onPlayerPlay(player) {
            // console.log('player play!', player)
            },
            onPlayerPause(player) {
            // console.log('player pause!', player)
            },
            onPlayerEnded(player) {
            // console.log('player ended!', player)
            },
            onPlayerLoadeddata(player) {
            // console.log('player Loadeddata!', player)
            },
            onPlayerWaiting(player) {
            // console.log('player Waiting!', player)
            },
            onPlayerPlaying(player) {
            // console.log('player Playing!', player)
            },
            onPlayerTimeupdate(player) {
            // console.log('player Timeupdate!', player.currentTime())
            },
            onPlayerCanplay(player) {
            // console.log('player Canplay!', player)
            },
            onPlayerCanplaythrough(player) {
            // console.log('player Canplaythrough!', player)
            },
            // or listen state event
            playerStateChanged(playerCurrentState) {
            //console.log('player current update state', playerCurrentState)
            },
            // player is ready
            playerReadied(player) {
            //console.log('example 01: the player is readied', player)
            }
        }

    }
</script>
<style scoped>
.skill{
    background: url('~assets/img/skill_33bg.png');
    margin: 0px 0 50px 0;
    padding-bottom: 30px;
    padding-top: 50px;
    background-size: cover;
}
.skill .skill_body{
    margin-bottom: 20px;
}
.skill .skill_body {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
}
/* .skill .skill_body .row div{
    background: #fff;
} */
.skill .skill_body .person_info{
    height: 100%;
    background: #fff;
    padding: 20px 20px;
}
.skill .skill_body div:nth-of-type(1) .person_info h1{
    font-size: 2rem;
    font-weight: bold;
}
.skill .skill_body div:nth-of-type(1) .person_info h1 small{
    font-size: 1rem;
    margin-left: 10px;
    color: #666;
}
.skill .skill_body  div:nth-of-type(1) .person_info img{
    width: 100%;
    margin: 10px 0;
}
.skill .skill_body  div:nth-of-type(1) .person_info p{
    color: #666;
    line-height: 24px;
}
.skill .skill_body div:nth-of-type(2) .person_img img,.skill .skill_body .row div:nth-of-type(3) .person_img img{
    width: 100%;
}
.skill .skill_body  .video_info{
    width: 100%;
    height: 100%;
}
.skill .skill_body  .video_info .video-player-box .vjs_video_3-dimensions{
    width: 100% !important;
    height: 242px !important;
}
.vjs_video_3-dimensions{
    width: 100% !important;
    height: 242px !important;
}
@media only screen and (max-width:996px ) {
   .skill .skill_body .img3{
       margin-top: 20px;
   }
   .skill .skill_body .video{
        margin-top: 20px;
    }
    
}
@media screen and (max-width: 768px) {
    .skill .skill_body .img2{
        margin-top: 20px;
    }
    .skill .skill_body .img3{
        margin-top: 20px;
    }
    .skill .skill_body .video{
         margin-top: 20px;
     }

}
</style>