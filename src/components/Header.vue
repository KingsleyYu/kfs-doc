<template>
    <div class="header-wrapper">
        <header class="header">
            <div class="container">
                <div class="title">
                    <h1>{{data.name}}</h1>
                    <h3>{{data.description}}</h3>
                </div>
                <div class="right">
                    <ul class="menu">
                        <li v-for="(item,index) in data.navs" :key="item.name" :class="index==0?'active':''">
                            <a :href="item.url">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="less">
.header-wrapper {
    height: 97px;
    &>.header {
        height: 97px;
        background-color: #393943;
        color: #fff;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        position: fixed;
        .container {
            height: 100%;

            &:after {
                clear: both;
                content: " ";
                display: block;
                font-size: 0;
                height: 0;
                visibility: hidden;
            }

            .title {
                padding-top: 20px;
                float: left;
                color: #fff;
                h1 {
                    font-weight: 400;
                    font-size: 22px;
                }

                h3 {
                    font-weight: 400;
                    font-size: 16px;
                }
            }
        }

        .right {
            float: right;
            height: 100%;
            .menu {
                display: inline-block;
                list-style: none outside;
                li {
                    float: left;
                    margin-right: 60px;
                    display: inline;
                    min-width: 33px;
                    &>a {
                        padding: 0 15px;
                        height: 95px;
                        line-height: 95px;
                        display: inline-block;
                        text-decoration: none;
                        cursor: pointer;
                        font-size: 20px;
                        color: #fff;
                        letter-spacing: 0;
                    }
                    &.active {
                        border-bottom: 2px solid #FF6633;
                    }
                }
            }
        }
    }
}
</style>

