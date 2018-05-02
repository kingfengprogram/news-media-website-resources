<template>
    <div class="container-fluid menu">
        <div class="logo">
            <router-link to="/index"><img src="/static/images/logo.png"></router-link>
        </div>
        <ul class="nav">
            <li :class="onRoutes === menu.code ? 'active' : ''" v-for="menu in menuList" :key="menu.id"><router-link :to="menu.url">{{menu.name}}</router-link></li>
        </ul>
        <div class="login-btn" v-if="!shareState.login.hasLogin">
            <div class="btn-primary" @click="showLogin = true;"></div>
        </div>
        <div v-else class="user-info" @mouseleave="changeShowDropdown(false)" @mouseenter="changeShowDropdown(true)">
            <img class="user-logo" :src="shareState.userinfo.headimgurl || '/static/images/none-headimage.png'">
            <span class="username">{{shareState.userinfo.nickname}}</span>
            <div class="dropdown" v-show="showDropdown">
                <div>
                    <img class="user-logo" :src="shareState.userinfo.headimgurl || '/static/images/none-headimage.png'">
                    <img class="sex" :src="shareState.userinfo.sex === '1' ? '/static/images/male.png' : '/static/images/female.png'">
                </div>
                <div class="username">{{shareState.userinfo.nickname}}</div>
                <div class="uuid">UID:{{shareState.userinfo.id.substring(0, 8)}}</div>
                <div class="bottom">
                    <a class="logout-btn" @click="logout">
                        <img src="/static/images/logout-icon.png"/>
                        <span style="margin-left: 5px; position: relative; top: -6px;">退出</span>
                    </a>
                </div>
                <div class="popper-arrow"></div>
            </div>
        </div>
        <wechat-login v-if="showLogin && !shareState.login.hasLogin" :showLogin.sync="showLogin"></wechat-login>
        <login-tips v-if="shareState.login.hasTips"></login-tips>
    </div>
</template>

<script>
import WechatLogin from '@/components/wechat/WechatLogin';
import LoginTips from '@/components/wechat/LoginTips';
var _ = require('lodash');

export default {
    name: 'headTop',
    data: function () {
        return {
            shareState: this.$root.store.state,
            showLogin: false,
            showDropdown: false,
            menuList: [
                {
                    id: 1,
                    name: '身材有道',
                    code: 'introduction',
                    url: '/introduction'
                },
                {
                    id: 2,
                    name: '明星导师',
                    code: 'tutor',
                    url: '/tutor'
                },
                {
                    id: 3,
                    name: '课程内容',
                    code: 'content',
                    url: '/content'
                },
                {
                    id: 4,
                    name: '视频赏析',
                    code: 'video',
                    url: '/video'
                }
            ]
        };
    },
    components: {
        WechatLogin,
        LoginTips
    },
    computed: {
        onRoutes: function () {
            return this.$route.meta.activeIndex;
        }
    },
    methods: {
        changeLoginFormStatus: function (status) {
            this.loginFormStatus = status;
        },
        changeShowDropdown: _.debounce(
            function (status) {
                this.showDropdown = status;
            },
            200
        ),
        logout: function () {
            this.$http.get('/portal/logout')
                .then((res) => {
                    if (res.data.result === 'success') {
                        this.$root.bus.$emit('clear_userinfo');
                    }
                });
        }
    }
};
</script>

<style scoped>
    .menu {
        position: relative;
        background-color: #27241E;
        height: 65px;
        text-align: center;
        z-index: 200;
    }

    .menu .logo {
        float: left;
        width: 30%;
        height: 100%;
    }

    .menu .logo a {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu .nav {
        float: left;
        line-height: 65px;
        width: 35%;
    }

    .menu .nav li {
        float: left;
        width: 25%;
    }

    .menu .nav li:hover {
        background-color: #37322B;
    }

    .login-btn {
        float: right;
        clear: right;
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu .nav li a {
        display: block;
    }

    li.active {
        background-color: #37322B;
    }

    .user-info {
        position: relative;
        float: right;
        clear: right;
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: #ffffff;
    }

    .user-info .username {
        margin-left: 20px;
    }

    .user-info .user-logo {
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }

    .user-info .dropdown .user-logo {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        margin-top: 10px;
    }

    .user-info .dropdown .sex {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-left: -35px;
    }

    .user-info .dropdown .username {
        margin-left: 0px;
        margin-top: 10px;
        color: #6A6255;
        font-size: 24px;
    }

    .user-info .dropdown .uuid {
        margin-left: 0px;
        margin-top: 10px;
        color: #A59986;
        font-size: 11px;
    }

    .user-info .dropdown .bottom {
        margin-top: 20px;
        border-top: 1px solid #FFF5D9;
        color: #A59986;
        padding: 10px;
    }

    .user-info .dropdown .logout-btn {
        display: inline-block;
        font-size: 16px;
        color: #AA9E8A;
        cursor: pointer;
    }

    .user-info .dropdown {
        position: absolute;
        width: 400px;
        transform-origin: center top 0px;
        z-index: 2000;
        top: 65px;
        margin-left: -100px;
        margin-top: 6px;
        background: #FFFDDF;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        line-height: 1.4;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }

    .user-info .dropdown .popper-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 8px solid #FFFDDF;
        top: -8px;
        left: 272px;
    }

</style>
