<template>
    <div class="toplist_wrap mod_topic">
        <ul>
            <li v-for="item in topList" :key="item.id">
                <div class="topic_main">
                    <a href="javascript:;" class="topic_media">
                        <img :src="item.picUrl" alt="">
                        <span class="listen_count"><i class="icon icon_listen"></i>{{item.listenCount | listenFormat}}万</span>
                    </a>
                    <div class="topic_info">
                        <div class="topic_cont">
                            <h3 class="topic_tit">{{item.topTitle}}</h3>
                            <p v-for="(songItem, index) in item.songList" :key="index">{{index + 1}}<span class="text_name">{{songItem.singername}}</span>{{songItem.songname}}</p>
                        </div>
                        <i class="topic_arrow"></i>
                    </div>
                </div>
            </li>
        </ul>
        <p class="topic_more"><a href="javascript:;">去客户端发现更多好音乐 &gt;</a></p>
    </div>
</template>
<script>
    import { apiHandler } from '@/api/index'
    export default {
      data () {
        return {
          topList: {}
        }
      },
      created () {
        let self = this
        apiHandler('topList', (response) => {
          self.topList = response.data.topList
        })
      }
    }
</script>
<style lang="less">
    @import './index.less';
</style>

