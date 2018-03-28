<template>
    <div class="login_container">
        <div class="center-message">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
            <div class="tip">{{message}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data: function () {
        return {
            message: '登陆中'
        };
    },
    mounted: function () {
        var code, state, fullPath;
        code = this.$route.query.code;
        state = this.$route.query.state;
        fullPath = this.$route.query.fullPath;
        if (sessionStorage.getItem('wx_login_state') !== state) {
            this.$root.bus.$emit('clear_userinfo');
            this.$root.store.setLoginAction({
                hasLogin: false,
                hasTips: true,
                tips: '微信二维码已过期'
            });
            setTimeout(() => {
                this.$router.replace(fullPath);
            }, 1000);
        } else {
            this.$http.post('/portal/login', {code: code})
                .then((res) => {
                    if (res.data.result === 'success') {
                        this.$root.bus.$emit('refresh_userinfo', res.data.user);
                    } else {
                        this.$root.bus.$emit('clear_userinfo');
                        this.$root.store.setLoginAction({
                            hasLogin: false,
                            hasTips: true,
                            tips: res.data.message
                        });
                    }
                    setTimeout(() => {
                        this.$router.replace(fullPath);
                    }, 1000);
                });
        }
    }
};
</script>

<style scoped>
    .login_container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .login_container .center-message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #409EFF;
    }

    .login_container .center-message .tip{
        margin-top: 10px;
    }
</style>
