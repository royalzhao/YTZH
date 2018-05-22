<template>
    <div class="loading" v-if="flag">
        <img src="./loading-cylon.svg" alt="loading">
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['flag']
    }
</script>

<style scoped>
    .loading{
        text-align: center;
    }
    .loading img{
        width: 80px;
        height: 80px;
        margin: 0 auto;
    }
</style>
