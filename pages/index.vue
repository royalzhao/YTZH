<template>
  <div>
      
      <y-carousel></y-carousel>
      <about-us></about-us>
      <product-show></product-show>
      <general-introduction></general-introduction>
      <technical-expert></technical-expert>
      <news-information></news-information>
      <certificates></certificates>
  </div>
</template>

<script>
import axios from 'axios'

import yCarousel from '~/components/index/carousel.vue'
import aboutUs from '~/components/index/aboutUs.vue'
import productShow from '~/components/index/productShow.vue'
import generalIntroduction from '~/components/index/generalIntroduction.vue'
import technicalExpert from '~/components/index/technicalExpert.vue'
import newsInformation from '~/components/index/newsInformation.vue'
import certificates from '~/components/index/certificates.vue'

export default {
  components: {
    yCarousel,
    aboutUs,
    productShow,
    generalIntroduction,
    technicalExpert,
    newsInformation,
    certificates,
  },
  async asyncData(){
        
        
  }
}
</script>

<style scoped>


</style>
