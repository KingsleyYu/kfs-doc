<template>
    <div class="side-nav">
        <div class="menu-list">
            <div class="menu-item">
                <div class="title">
                    <h1>
                        <i aria-hidden="true" class="glyphicon glyphicon-circle-arrow-down"></i>
                        下载
                    </h1>
                    <div class="right">
                        <i aria-hidden="true" class="fa fa-angle-down"></i>
                    </div>
                </div>
            </div>
            <div class="menu-item">
                <div class="title">
                    <h1>
                        <i aria-hidden="true" class="glyphicon glyphicon-circle-arrow-down"></i>
                        设计原则
                    </h1>
                    <div class="right">
                        <i aria-hidden="true" class="fa fa-angle-down"></i>
                    </div>
                </div>
                <div class="sub-list">
                    <ul>
                        <li>
                            <span class="line"></span>
                            <a href="subItem.url">设计原则1</a>
                        </li>
                        <li>
                            <span class="line"></span>
                            <a href="subItem.url">设计原则1</a>
                        </li>
                        <li>
                            <span class="line"></span>
                            <a href="subItem.url">设计原则1</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu-item">
                <div class="title">
                    <h1>
                        <i aria-hidden="true" class="glyphicon glyphicon-phone"></i>
                        APP 控件
                    </h1>
                    <div class="right">
                        <i aria-hidden="true" class="fa fa-angle-down"></i>
                    </div>
                </div>
                <div class="groups">
                    <div class="sub-list sub-group">
                        <h1>元素</h1>
                        <ul>
                            <li>
                                <span class="line"></span>
                                <a href="#">布局</a>
                            </li>
                            <li>
                                <span class="line"></span>
                                <a href="#">色彩</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="groups">
                    <div class="sub-list sub-group">
                        <h1>组件</h1>
                        <ul>
                            <li>
                                <span class="line"></span>
                                <a href="#">按钮</a>
                            </li>
                            <li>
                                <span class="line"></span>
                                <a href="#">导航</a>
                            </li>
                            <li>
                                <span class="line"></span>
                                <a href="#">表单</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="groups">
                    <div class="sub-list sub-group">
                        <h1>组件</h1>
                        <ul>
                            <li>
                                <span class="line"></span>
                                <a href="#">按钮</a>
                            </li>
                            <li>
                                <span class="line"></span>
                                <a href="#">导航</a>
                            </li>
                            <li>
                                <span class="line"></span>
                                <a href="#">表单</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.side-nav {
    width: 100%;
    background: #fff;
    min-height: 600px;
    float: left;

    .menu-list {
        overflow-y: auto;
        overflow-x: hidden;

        .menu-item {
            border-bottom: 1px solid #f3f3f3;

            &>.title {
                padding: 18px 15px;
                h1 {
                    display: inline-block;
                    width: 80%;
                    font-weight: 400;
                    font-size: 16px;
                    color: #333333;

                    .glyphicon {
                        margin-right: 10px;
                    }
                }

                .right {
                    cursor: pointer;
                    float: right;

                    .fa {
                        font-size: 18px;
                    }
                }
            }

            .sub-list {
                h1 {
                    padding-left: 45px;
                    font-weight: 400;
                    margin-bottom: 12px;
                    font-size: 14px;
                    color: #999;
                    margin-top: 12px;
                }

                ul {
                    li {
                        cursor: pointer;
                        padding: 12px 0 12px 45px;
                        list-style-type: none;
                        position: relative;

                        .line {
                            display: none;
                            position: absolute;
                            left: 0;
                            border-left: 2px solid #FF6633;
                            height: 100%;
                            top: 0;
                        }

                        a {
                            text-decoration: none;
                            font-size: 16px;
                            color: #333333;
                        }

                        &.ative,
                        &:hover {
                            background-color: #FFF1ED;
                            .line {
                                display: block;
                            }

                            a {
                                color: #FF6633
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
