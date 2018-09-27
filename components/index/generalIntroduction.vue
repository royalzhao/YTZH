<template>
    <div class="function_info">
        <b-container>
            <section-title ytitle="产品简介" class="title" ytitleEn="GENERAL INTRODUCTION"></section-title>
            <div class="function_info_body">
                <div class="function_info_body_left">
                    <div class="jianzhi">
                        <img src="~assets/img/function_15.jpg" alt="">
                        <div class="jianzhi_info1">
                                好身材需要补充优质蛋白
                        </div>
                        <div class="jianzhi_info2">
                            <div class="jianzhi_info2_content">
                                <h3>好身材需要补充优质蛋白</h3>
                                <hr style="height:1px;background:#000;width: 30px;border:0;margin: 10px auto;">
                                <p>刺激脂肪组织的活性，增加散热量和能量代谢，抑制体内脂肪的贮存，减轻体重。</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="tigao">
                        <img src="~assets/img/function_26.jpg" alt="">
                        <div class="tigao_info1">
                                免疫力低下需要补充优质蛋白
                        </div>
                        <div class="tigao_info2">
                            <div class="tigao_info2_content">
                                <h3>免疫力低下需要补充优质蛋白</h3>
                                <hr style="height:1px;background:#000;width: 30px;border:0;margin: 10px auto;">
                                <p>快速补充营养，加速人体内免疫蛋白的合成，提高机体基础代谢，改善体质，增强人体免疫力。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="function_info_body_right">
                    <div class="right_top">
                        <img src="~assets/img/function_17.jpg" alt="">
                        <div class="shuimian_info1">
                                睡眠不好需要补充优质蛋白
                        </div>
                        <div class="shuimian_info2">
                            <div class="shuimian_info2_content">
                                <h3>睡眠不好需要补充优质蛋白</h3>
                                <hr style="height:1px;background:#000;width: 30px;border:0;margin: 10px auto;">
                                <p>调节身体代谢，促进人体内血清素、褪黑素等睡眠激素分泌，缩短入眠时间，提高睡眠质量。</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="right_bottom">
                        <div class="right_bottom_left">
                            <div class="huanjie">
                                <img src="~assets/img/function_20.jpg" alt="">
                                <div class="huanjie_info1">
                                        身体疲劳需要补充优质蛋白
                                </div>
                                <div class="huanjie_info2">
                                    <div class="huanjie_info2_content">
                                        <h3>身体疲劳需要补充优质蛋白</h3>
                                        <hr style="height:1px;background:#000;width: 30px;border:0;margin: 10px auto;">
                                        <p>增强和保持肌肉量，缓解运动引起的肌肉酸痛、红肿和疲劳，帮助体力迅速恢复。</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="shuhou">
                                <img src="~assets/img/function_27.jpg" alt="">
                                <div class="shuhou_info1">
                                        术后康复需要补充优质蛋白
                                </div>
                                <div class="shuhou_info2">
                                    <div class="shuhou_info2_content">
                                        <h3>术后康复需要补充优质蛋白</h3>
                                        <hr style="height:1px;background:#000;width: 30px;border:0;margin: 10px auto;">
                                        <p>补充身体能量，加速细胞的生长和修复，提升伤口愈合速度，缩短手术后恢复的时间。</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="meirong">
                            <img src="~assets/img/function_22.jpg" alt="">
                            <div class="meirong_info1">
                                    美容养颜需要补充优质蛋白
                            </div>
                            <div class="meirong_info2">
                                <div class="meirong_info2_content">
                                    <h3>美容养颜需要补充优质蛋白</h3>
                                    <hr style="height:1px;background:#000;width: 30px;border:0;margin: 10px auto;">
                                    <p>滋养肌肤，促进表皮细胞的生长和新陈代谢，增强胶原蛋白活性，抵抗氧化、延缓衰老。</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>
<script>
    import sectionTitle from '~/components/index/sectionTitle.vue'
    export default{
        data(){
            return{

            }
        },
        components: {
            sectionTitle
        }
    }
</script>
<style scoped>

.function_info {
    background: #fff;
    margin: 0px 0 50px 0;
    padding: 30px;
}

.function_info .function_info_body{
    display: flex;
    justify-content: space-between;
}
.function_info .function_info_body .function_info_body_left{
    flex-grow: 1;
    display: block;
}
.function_info .function_info_body .function_info_body_left .jianzhi,
.function_info .function_info_body .function_info_body_left .tigao,
.function_info .function_info_body .function_info_body_right .right_top,
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .huanjie,
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .shuhou,
.function_info .function_info_body .function_info_body_right .right_bottom .meirong 
{
    position: relative;
}

.function_info .function_info_body .function_info_body_left .jianzhi:hover .jianzhi_info2{
    opacity: 1;
}
.function_info .function_info_body .function_info_body_left .tigao:hover .tigao_info2{
    opacity: 1;
}
.function_info .function_info_body .function_info_body_right .right_top:hover .shuimian_info2{
    opacity: 1;
}
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .huanjie:hover  .huanjie_info2{
    opacity: 1;
}
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .shuhou:hover .shuhou_info2{
    opacity: 1;
}
.function_info .function_info_body .function_info_body_right .right_bottom .meirong:hover .meirong_info2{
    opacity: 1;
}


.function_info .function_info_body .function_info_body_left .jianzhi:hover .jianzhi_info1{
    opacity: 0;
}
.function_info .function_info_body .function_info_body_left .tigao:hover .tigao_info1{
    opacity: 0;
}
.function_info .function_info_body .function_info_body_right .right_top:hover .shuimian_info1{
    opacity: 0;
}
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .huanjie:hover  .huanjie_info1{
    opacity: 0;
}
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .shuhou:hover .shuhou_info1{
    opacity: 0;
}
.function_info .function_info_body .function_info_body_right .right_bottom .meirong:hover .meirong_info1{
    opacity: 0;
}
.function_info .function_info_body .function_info_body_left .jianzhi .jianzhi_info1,
.function_info .function_info_body .function_info_body_left .tigao .tigao_info1,
.function_info .function_info_body .function_info_body_right .right_top .shuimian_info1,
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .huanjie .huanjie_info1,
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .shuhou .shuhou_info1,
.function_info .function_info_body .function_info_body_right .right_bottom .meirong .meirong_info1
{
    position: absolute;
    bottom: 0;
    background: rgba(70, 173, 208, 0.8);
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding: 5px 0;
    transition: all 0.45s;
    -webkit-transition: all 0.45s;
    -moz-transition: all 0.45s;
    
}
.function_info .function_info_body .function_info_body_left .jianzhi .jianzhi_info2,

.function_info .function_info_body .function_info_body_left .tigao .tigao_info2,

.function_info .function_info_body .function_info_body_right .right_top .shuimian_info2,

.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .huanjie .huanjie_info2,

.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .shuhou .shuhou_info2,

.function_info .function_info_body .function_info_body_right .right_bottom .meirong .meirong_info2
{
    opacity: 0;
    background: -webkit-linear-gradient(left top, rgba(39, 233, 181, 0.8) , rgba(29, 216, 235,0.8)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right, rgba(39, 233, 181, 0.8), rgba(29, 216, 235,0.8)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right, rgba(39, 233, 181, 0.8), rgba(29, 216, 235,0.8)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right, rgba(39, 233, 181, 0.8) , rgba(29, 216, 235,0.8)); /* 标准的语法 */
    position: absolute;
    text-align: center;
    top: 0;
    height: 100%;
    padding: 0 20%;
    transition: all 0.45s;
    -webkit-transition: all 0.45s;
    -moz-transition: all 0.45s;
    display: flex;
    justify-content: center;
    align-items: center;
}
.function_info .function_info_body .function_info_body_left .jianzhi .jianzhi_info2 h3,

.function_info .function_info_body .function_info_body_left .tigao .tigao_info2 h3,

.function_info .function_info_body .function_info_body_right .right_top .shuimian_info2 h3,

.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .huanjie .huanjie_info2 h3,

.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .shuhou .shuhou_info2 h3,

.function_info .function_info_body .function_info_body_right .right_bottom .meirong .meirong_info2 h3
{
    font-weight: bold;
    font-size: 1.2rem;
}
.function_info .function_info_body .function_info_body_left{
    margin-right: 20px;
}
.function_info .function_info_body .function_info_body_left .jianzhi img{
    width: 100%;
    height: 422px;
}
.function_info .function_info_body .function_info_body_left .tigao{
    margin-top: 20px;
}
.function_info .function_info_body .function_info_body_left .tigao img{
    width: 100%;
    height: 200px;
}
.function_info .function_info_body .function_info_body_right .right_top img{
    width: 100%;
}
.function_info .function_info_body .function_info_body_right .right_bottom{
    margin-top: 20px;
}
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .huanjie img{
    width: 100%;
}
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .shuhou{
    margin-top: 20px;
}
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left .shuhou img{
    width: 100%;
}
.function_info .function_info_body .function_info_body_right .right_bottom .meirong{
    margin-left: 20px;
}
.function_info .function_info_body .function_info_body_right .right_bottom .meirong img{
    width: 100%;
}
.function_info .function_info_body .function_info_body_right .right_top img{
    height: 200px;
}




.function_info .function_info_body .function_info_body_right{
    flex-grow: 2;
}
.function_info .function_info_body .function_info_body_right .right_bottom{
    display: flex;
    flex-wrap: wrap;
}
.function_info .function_info_body .function_info_body_right .right_bottom .right_bottom_left{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.function_info .function_info_body .function_info_body_right .right_bottom .meirong{
    flex-grow: 1;
}
.function_info .function_info_body .function_info_body_right .right_bottom .meirong img{
    
}

@media screen and (max-width: 1199px) {
    .function_info .function_info_body {
        display: flex !important;
        justify-content: space-between !important;
        flex-direction: column-reverse !important;
    }
    .function_info .function_info_body .function_info_body_left {
        margin-left: 0px !important;
        display: flex !important;
        flex-direction: column !important;
    }
    
    .function_info .function_info_body .function_info_body_left {
        margin-right: 0px !important;
        margin-top: 20px !important; 
        display: none  !important;
    }
   
}
@media screen and (max-width: 768px) {
    .function_info .function_info_body .function_info_body_right .right_bottom .meirong {
        margin-left: 0 !important;
        margin-top: 20px !important; 
    }
}

</style>