<template>
  <a href="javascript:void(0)" class="btn">
      <slot></slot>
  </a>
</template>


<script>
export default {
  name:'mtButton'
}
</script>


<style lang="less" scoped>
.btn{
    background-color:palevioletred;
    color: #fff;
    border-radius: 5px;
    padding:5px 10px;
}
</style>
