<template>
    <div id="header">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-4 col-md-3 title">
                    <span aria-hidden="true" class="glyphicon glyphicon-th-list visible-xs-inline-block"></span>
                    <div class="name">
                        <h1>商家线 UI库</h1>
                        <h3>phoenix-ui</h3>
                    </div>
                </div>
                <div class="col-xs-0 col-sm-8 col-md-9 hidden-xs menu">
                    <ul>
                        <li class="active">
                            <a href="#">设计</a>
                        </li>
                        <li>
                            <a href="#">开发</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
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

<style lang="less" scoped >
#header {
    transition: opacity .5s;
    background: #393943;
    height: 90px;
    margin-bottom: 24px;
    padding: 0 48px;
    width: 100%;

    .title {
        padding-top: 20px;
        .glyphicon-th-list {
            display: inline;
            font-size: 30px;
            color: #fff;
            position: relative;
            top: -12px;
            margin-right: 20px;
            cursor: pointer;
            margin-left: -20px;
        }
        .name {
            display: inline-block;
            h1,
            h3 {
                margin: 0;
                color: #fff;
                font-weight: 400;
            }

            h1 {
                font-size: 22px;
                margin-bottom: 5px;
            }

            h3 {
                font-size: 16px;
            }
        }
    }

    .menu {
        text-align: right;

        ul {
            display: inline-block;
            list-style: none outside;

            li {
                float: left;
                margin-right: 60px;
                display: inline;
                min-width: 33px;
                &.active {
                    position: relative;
                    bottom: 2px;
                    border-bottom: 2px solid #FF6633;
                }

                &>a {
                    padding: 0 15px;
                    height: 90px;
                    line-height: 90px;
                    display: inline-block;
                    text-decoration: none;
                    cursor: pointer;
                    font-size: 20px;
                    color: #fff;
                    letter-spacing: 0;
                }
            }
        }
    }
}
</style>

