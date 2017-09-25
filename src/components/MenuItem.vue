<template>
    <div class="menu-item">
        <div class="title">
            <h1>
                <i :class="data.iconClass" aria-hidden="true"></i>
                {{data.name}}
            </h1>
            <div class="right" v-if="showIcon" @click="toggle">
                <i :class="expandIconClass" aria-hidden="true"></i>
            </div>
        </div>
        <div class="sub-list" v-if="!data.isModule&&showDetail">
            <ul v-if="data.subMenus.length">
                <li v-for="(subItem ,index) in data.subMenus" :key="index">
                    <a :href="subItem.url">{{subItem.name}}</a>
                </li>
            </ul>
        </div>
        <div class="groups" v-if="data.isModule&&showDetail">
            <div class="sub-list sub-group" v-for="(subItem,index) in data.subMenus" :key="index">
                <h1>{{subItem.name}}</h1>
                <ul v-if="subItem.items.length">
                    <li v-for="(oItem ,index) in subItem.items" :key="index">
                        <a :href="oItem.name">{{oItem.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            showDetail: true,
            expandIconClass: 'fa fa-angle-down'
        }
    },
    computed: {
        showIcon: function() {
            return this.data.subMenus.length
        }
    },
    methods: {
        toggle: function(e) {
            this.showDetail = !this.showDetail;
            if (this.showDetail) {
                this.expandIconClass = "fa fa-angle-down"
            }
            else {
                this.expandIconClass = "fa fa-angle-up"
            }
        }
    }
}
</script>

<style lang="less" scoped>
.menu-item {
    border-bottom: 1px solid #f3f3f3;
    .title {
        padding: 18px 15px;
        h1 {
            display: inline-block;
            width: 80%;
            font-weight: 400;
            font-size: 16px;
            color: #333333;

            .fa {
                margin-right: 10px;
            }
        }
        .right {
            cursor: pointer;
            padding-top: 5px;
            float: right;
            .fa {
                font-size: 18px;
            }
        }
    }

    .sub-list {
        &>h1 {
            padding-left: 40px;
            font-weight: 400;
            margin-bottom: 12px;
            font-size: 14px;
            color: #999;
        }

        &>ul {
            li {
                cursor: pointer;
                padding: 12px 0 12px 40px;
                list-style-type: none;
                &>a {
                    text-decoration: none;
                    font-size: 16px;
                    color: #333333;
                }

                &.active {
                    border-left: 2px solid #FF6633;
                    background-color: #FFF1ED;
                    &>a {
                        color: #FF6633;
                    }
                }

                &:last-child {
                    margin-bottom: 10px;
                }

                &:hover {
                    border-left: 2px solid #FF6633;
                    background-color: #FFF1ED;
                }
            }
        }
    }
}
</style>
