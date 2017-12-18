<template>
    <div class="recom_wrap">
        <swiper :options="swiperOption" class="banner_box">
            <swiper-slide v-for="(item, index) in indexMsg.slider" :key="item.id">
                <a :href="item.linkUrl">
                    <img :src="item.picUrl">
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="mod_twocol_list mod_twocol_list_normal">
            <h2 class="list_title">电台</h2>
            <ul id="radio_wrapper" class="list_container">
                <li class="js_play_radio" v-for="(item, index) in indexMsg.radioList" :key="item.radioid">
                    <a class="list_main" href="javascript:;">
                        <div class="list_media">
                            <img class="list_pic" :src="item.picUrl" alt="">
                            <span class="icon icon_play"></span>
                        </div>
                        <div class="list_info">
                            <h3 class="list_tit tit_two_row">{{item.Ftitle}}</h3>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="mod_twocol_list mod_twocol_list_special">
            <h2 class="list_title">热门歌单</h2>
            <ul class="list_container">
                <li data-tjname="recom_songlist" v-for="(item, index) in indexMsg.songList" :key="item.id">
                    <router-link :to="{name: 'channel', params: {id: item.id}}" class="list_main js_gotaoge">
                        <div class="list_media">
                            <img :src="item.picUrl">
                            <span class="listen_count"><i class="icon icon_listen"></i>{{item.accessnum | listenFormat }}万</span>
                            <span class="icon icon_play js_play_songlist"></span>
                        </div>
                        <div class="list_info">
                            <h3 class="list_tit">{{item.songListDesc}}</h3>
                            <p class="list_text">{{item.songListAuthor}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
            <p class="list_more"><a href="javascript:;">去客户端发现更多好音乐 &gt;</a></p>
        </div>
    </div>
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
<style lang="less">
    @import './index.less';
</style>

