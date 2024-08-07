<template>
    <div class="app">
        <a-config-provider size="small">
            <router-view></router-view>
        </a-config-provider>
    </div>
</template>
<script setup>
// 方法集
const $Method = {
    // 初始化数据
    async initData() {}
};

$Method.initData();
</script>

<style lang="scss">
@import '@/styles/global.scss';
</style>
