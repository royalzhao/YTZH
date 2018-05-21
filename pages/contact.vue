<template>
    <div>
        <div class="company_profile_banner hidden-xs">
            <img src="~assets/img/contact1.png" alt="联系我们">
        </div>
        <div class="company_profile_banner visible-xs">
            <img src="~assets/img/contact1_small.png" alt="联系我们">
        </div>
        <div class="company_profile_banner hidden-xs">
            <a href="https://shop554416026.taobao.com/index.htm?spm=2013.1.w5002-17416182051.2.1746efa7YdAJ37">
                <img src="~assets/img/contact1.jpg" alt="进入淘宝">
            </a>
            
        </div>
        <div class="company_profile_banner visible-xs">
            <a href="https://shop554416026.taobao.com/index.htm?spm=2013.1.w5002-17416182051.2.1746efa7YdAJ37">
                <img src="~assets/img/contact1_small.jpg" alt="进入淘宝">
            </a>
            
        </div>
        <div class="contact_info">
            <div class="contact_img">
                <img src="~assets/img/contact.png" alt="">
            </div>
            <div class="contact_content">
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
        </div>
        <div class="company_profile_banner" style="width:100%;height:400px;">
            <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
            
                <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
            </el-amap>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                zoom: 16,
                center: [116.54504,39.899738],
                markers: [
                    {
                    position: [116.54504,39.899738],
                    events: {
                        click: () => {
                        alert('北京盈泰正和生物科技有限公司地址：六洲大厦308A');
                        }
                    },
                    visible: true,
                    draggable: false,
                    
                    }
                ],
            }
        }
    }
</script>
<style scoped>
.company_profile_banner{
    width: 100%;
    
}
.company_profile_banner img{
    width: 100%;
}
.company_profile_content{
    margin: 4rem auto;
}
.contact_info{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
    background: #f8f8f8;
}
.contact_info .contact_img{
    margin-right: 50px;
}



.contact_info .contact_content h3{
    font-size: 1.8rem;
    color: #666;    
    font-weight: bold;
}
.contact_info .contact_content p{
    color: #666;
    line-height: 24px;
}
.contact_info .contact_content hr{
    margin: 15px 0;
    width: 30px;
    background-color: #666;
    height: 2px;
}
@media only screen and (max-width:750px ) {
    .contact_info .contact_content {
        width: 250px;
        text-align: center;
        margin-top: 20px;
     }
     .contact_info .contact_content hr{
         margin: 15px auto;
         background-color: #666;height: 1px;
         width: 30px;
     }
     .contact_info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem 0;
        background: #f8f8f8;
    }
    .contact_info .contact_img{
        margin-right: 0px;
    }
}
</style>