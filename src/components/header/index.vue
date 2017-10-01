<template>
    <div>
        <header class="mod_header">
            <i class="music_logo">QQ音乐</i>
        </header>
        <nav class="mod_nav">
            <router-link :to="{name: 'recom'}">推荐</router-link>
            <router-link :to="{name: 'toplist'}">排行榜</router-link>
            <router-link :to="{name: 'search'}">搜索</router-link>
        </nav>
    </div>
</template>
<script>
</script>
<style lang="less" scoped>
@import './index.less';
</style>


