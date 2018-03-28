<template>
    <div class="login-tips-container">
        <div class="login-form">
            <div class="title">
                <span style="line-height: 45px; margin-left: 20px; font-size: 14px;">温馨提示</span>
                <div class="btn-login-tips-close" @click="closeLogin"></div>
            </div>
            <div class="body">
                <div>
                    <div v-if="shareState.login.hasTips" style="margin-bottom: 20px;">{{shareState.login.tips}}</div>
                    <img src="/static/images/login_error_icon.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginTips',
    props: ['showLoginTips'],
    data: function () {
        return {
            shareState: this.$root.store.state
        };
    },
    methods: {
        closeLogin: function () {
            this.$root.store.setLoginAction(Object.assign(this.shareState.login, {hasTips: false, tips: ''}));
        }
    }
};
</script>

<style scoped>
    .login-tips-container {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        color: #000;
    }

    .login-tips-container .login-form {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 720px;
        background-color: #ffffff;
    }

    .login-tips-container .login-form .title {
        height: 45px;
        border-bottom: 1px solid #d7d7d7;
        text-align: left;
    }

    .login-tips-container .login-form .body {
        padding-top: 120px;
        padding-bottom: 140px;
        font-size: 16px;
    }

    .login-tips-container .login-form .btn-login-tips-close {
        position: absolute;
        right: 30px;
        top: 11px;
        width: 20px;
        height: 20px;
        background-image: url("/static/images/btn_login_close.png");
    }

    .login-tips-container .login-form .btn-login-tips-close:hover {
        background-image: url("/static/images/btn_login_close_hover.png");
    }

</style>
