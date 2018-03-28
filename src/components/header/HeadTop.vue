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
            <img class="user-logo" :src="shareState.userinfo.headimgurl">
            <span class="username">{{shareState.userinfo.nickname}}</span>
            <div class="dropdown" v-show="showDropdown">
                <img class="user-logo" :src="shareState.userinfo.headimgurl">
                <div>{{shareState.userinfo.nickname}}</div>
                <button @click="logout">退出</button>
            </div>
        </div>
        <wechat-login v-if="showLogin && !shareState.login.hasLogin" :showLogin.sync="showLogin"></wechat-login>
        <login-tips v-if="shareState.login.hasTips"></login-tips>
    </div>
</template>

<script>
import WechatLogin from '@/components/wechat/WechatLogin';
import LoginTips from '@/components/wechat/LoginTips';

export default {
    name: 'headTop',
    data: function () {
        return {
            shareState: this.$root.store.state,
            showLogin: false,
            showDropdown: true,
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
        changeShowDropdown: function (status) {
        },
        logout: function () {
            this.$http.get('logout')
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

    .user-info .dropdown {
        transform-origin: center bottom 0px;
        position: absolute;
        border-radius: 4px;
        padding: 10px;
        z-index: 2000;
        font-size: 12px;
        line-height: 1.2;
    }
</style>
