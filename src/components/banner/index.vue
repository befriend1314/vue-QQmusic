<template>
    <swiper :options="swiperOption" class="banner_box">
        <swiper-slide v-for="(item, index) in indexMsg.slider" :key="item.id">
            <a :href="item.linkUrl">
                <img :src="item.picUrl">
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { apiHandler } from '@/api/index'
export default {
  data () {
    return {
      indexMsg: {},
      hotkeys: {},
      swiperOption: {
        autoplay: 3000,
        initialSlide: 1,
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  created () {
    apiHandler('indexMsg', (response) => {
      this.indexMsg = response.data
    })
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style>
    .banner_box img{
        display: block;
        width: 100%;
    }
</style>


