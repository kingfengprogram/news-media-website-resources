<template>
    <div class="login-form-container">
        <div class="login-form">
            <div class="title">
                <div class="btn-login-form-close" @click="closeLogin"></div>
            </div>
            <div class="body">
                <div id="wx_qcode_container"></div>
            </div>
        </div>
        <remote-script src="http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js" @load="loadScriptEnd"></remote-script>
    </div>
</template>

<script>
import GlobalConfig from '@/components/globalConfig/GlobalConfig';

export default {
    name: 'WechatLogin',
    porps: ['showLogin'],
    methods: {
        loadScriptEnd: function () {
            var fullPath = this.$route.fullPath;
            var state = String(Math.ceil(Math.random() * 1000));
            sessionStorage.setItem('wx_login_state', state);
            console.log(sessionStorage.getItem('wx_login_state'));
            var obj = new window.WxLogin({
                id: 'wx_qcode_container',
                appid: GlobalConfig.wxAppid,
                scope: 'snsapi_login',
                redirect_uri: encodeURIComponent('http://jianshen-ott.lutongnet.com/thirdLogin_redirect_web.jsp?method=weixin&fullPath=' + fullPath),
                state: state,
                style: 'black',
                href: ''
            });
            console.log(obj);
        },
        closeLogin: function () {
            this.$emit('update:showLogin', false);
        }
    }
};
</script>

<style scoped>
    .login-form-container {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .login-form-container .login-form {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 720px;
        background-color: #ffffff;
    }

    .login-form-container .login-form .title {
        height: 45px;
        border-bottom: 1px solid #d7d7d7;
    }

    .login-form-container .login-form .body {
        padding-top: 20px;
        padding-bottom: 40px;
    }

    .login-form-container .login-form .btn-login-form-close {
        position: absolute;
        right: 30px;
        top: 11px;
        width: 20px;
        height: 20px;
        background-image: url("/static/images/btn_login_close.png");
    }

    .login-form-container .login-form .btn-login-form-close:hover {
        background-image: url("/static/images/btn_login_close_hover.png");
    }

</style>
