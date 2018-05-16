<template>
  <div>
    <div id='swiper_img_box'>

      <ul class='swiper_img_ul'>
          
          <div v-for="(item, index) in json" :key="index" @mouseover='stop' @mouseout='start'>
                <img :style="{top:item.top,left:item.left,width:item.width,height:item.height,zIndex:item.zIndex,opacity:item.opacity}"  :src="imgs[index].src">
          </div>
        
      </ul>

    </div>
  </div>
</template> 
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        imgs: [{
          src: 'http://www.bjytzh.cn/img/product1.jpg',
          alt: '1',
         
        }, {
          src: 'http://www.bjytzh.cn/img/product2.jpg',
          alt: '2',
          
        }, {
          src: 'http://www.bjytzh.cn/img/product3.jpg',
          alt: '3',
          
        }],
        showIndex: 0,
        json:[
            {//图1 
                top:'42.5px', 
                left:'0', 
                width:'510px', 
                height:'340px', 
                zIndex:6, 
                opacity:0.8 
            }, 
            {//图2 
                top:'0px', 
                left:'260px', 
                width:'650px', 
                height:'425px', 
                zIndex:8, 
                opacity:1 
            }, 
            {//图3
                top:'42.5px', 
                left:'690px', 
                width:'510px', 
                height:'340px', 
                zIndex:6, 
                opacity:0.8 
            }, 
        ]

      }
    },
    mounted: function () {
      this.timer = setInterval(this.changeIndex, 2000)
    },
    methods: {
      changeIndex() {        
        this.json.push(this.json.shift());
      },
      stop() {
        console.log('1')
        clearInterval(this.timer)
      },
      start() {
        this.timer = setInterval(this.changeIndex, 2000)
      }

    }
  }

</script>
<style scoped>
  .swiper_img_ul {
    width: 1200px;
    height: 425px;
    margin: 0 auto;
    position: relative;
    display: flex;
  }

  .swiper_img_ul img {
   position: absolute;
    
    transition: all 1s;
  }
  /* .swiper_img_ul img.active{
    transform: scale(1);
    z-index: 999;
    
  } */

/* 
  .image-enter-active {
    transform: translateX(0);
    transition: all 1s ease;
  }

  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1s ease;
  }

  .image-enter {
    transform: translateX(100%)
  }

  .image-leave {
    transform: translateX(0)
  } */

</style>
