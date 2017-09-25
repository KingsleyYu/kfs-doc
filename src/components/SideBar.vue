<template>
    <div class="sidebar">
        <div class="menu-list">
            <Item :data="item" v-for="(item,index) in menus" :key="index"/>
        </div>
    </div>
</template>

<script>
import docConfig from '../utils/docConfig'
import Item from './MenuItem';

const menus=docConfig.getMenus();

export default {
    data() {
        return {
            menus: menus
        }
    },
    components:{
        Item
    }
}
</script>

<style scoped lang="less">
.sidebar {
    width: 20%;
    background: #fff;
    min-height: 600px;
    float: left;
    &>.menu-list {
        overflow-y: auto;
        overflow-x: hidden;
    }
}
</style>
