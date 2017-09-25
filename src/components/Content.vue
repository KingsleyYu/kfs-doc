<template>
    <div class="content-wrapper">
        <div class="container">
            <SideBar/>
            <div class="main-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from './SideBar'
export default {
    name: 'content',
    data() {
        return {

        }
    },
    components: {
        SideBar
    }
}
</script>

<style scoped lang="less">
.content-wrapper {
    margin-top: 16px;
    .container {
        &:after {
            clear: both;
            content: " ";
            display: block;
            font-size: 0;
            height: 0;
            visibility: hidden;
        }
    }
}

.main-content {
    width: 78%;
    float: left;
    margin-left: 15px;
    background: #FFFFFF;
}
</style>
