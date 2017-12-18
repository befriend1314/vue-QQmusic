<template>
  <div>
      <common-header></common-header>
      <div class="content_wrapper">
          <router-view class="main-content-box"></router-view>
      </div>
  </div>
</template>

<script>
    import CommonHeader from '@components/header/index'
    export default {
      components: {
        CommonHeader
      }
    }
</script>

