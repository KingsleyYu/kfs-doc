<template>
    <a href="javascript:void(0)" class="btn">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name:'elButton'
}
</script>

<style lang="less" scoped>
.btn {
    color: #fff;
    background-color:palevioletred;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
}
</style>

