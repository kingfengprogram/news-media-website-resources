// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import routes from './router/router';
import VueVideoPlayer from 'vue-video-player';
import http from './utils/http';
import commonUtil from './utils/commonUtil';
import '../static/css/icon/font-awesome-4.7.0/css/font-awesome.min.css';
import '../static/css/animate.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
Vue.use(VueVideoPlayer);
Vue.use(commonUtil);

Vue.prototype.$http = http;

Vue.filter('toUpperCase', function (value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.toUpperCase();
});

Vue.component('remote-script', {
    render: function (createElement) {
        var self = this;
        return createElement('script', {
            attrs: {
                type: 'text/javascript',
                src: this.src
            },
            on: {
                load: function (event) {
                    self.$emit('load', event);
                },
                error: function (event) {
                    self.$emit('error', event);
                },
                readystatechange: function (event) {
                    if (this.readyState === 'complete') {
                        self.$emit('load', event);
                    }
                }
            }
        });
    },
    props: {
        src: {
            type: String,
            required: true
        }
    }
});

const router = new VueRouter({
    routes
});

var store = {
    debug: false,
    state: {
        userinfo: {},
        login: {
            hasLogin: false,
            hasTips: false,
            tips: ''
        }
    },
    setUserinfoAction: function (newValue) {
        if (this.debug) {
            console.log('setUserinfoAction triggered with', newValue);
        }
        this.state.userinfo = newValue;
    },
    clearUserinfoAction: function () {
        if (this.debug) {
            console.log('clearUserinfoAction');
        }
        this.state.userinfo = {};
    },
    setLoginAction: function (newValue) {
        if (this.debug) {
            console.log('setLoginAction triggered with', newValue);
        }
        this.state.login = newValue;
    }
};

/* eslint-disable no-new */
new Vue({
    name: 'App',
    router,
    components: {App},
    template: '<App/>',
    data: {
        bus: new Vue(),
        store: store
    },
    beforeCreate: function () {
        var userinfo = this.$getUserinfo();
        if (userinfo) {
            this.$http.post('/portal/checkCurrentUserinfo')
                .then((res) => {
                    if (res.data.result === 'success' && res.data.user !== null) {
                        this.refreshUserinfo(res.data.user);
                    } else {
                        this.clearUserinfo();
                    }
                });
        }
    },
    created: function () {
        this.bus.$on('refresh_userinfo', this.refreshUserinfo);
        this.bus.$on('clear_userinfo', this.clearUserinfo);
    },
    methods: {
        refreshUserinfo: function (user) {
            this.$setUserinfo(user);
            this.store.setUserinfoAction(user);
            this.store.setLoginAction({
                hasLogin: true,
                hasTips: false,
                tips: ''
            });
        },
        clearUserinfo: function () {
            this.$clearStorage();
            this.store.clearUserinfoAction();
            this.store.setLoginAction(Object.assign({}, this.store.state.login, {
                hasLogin: false
            }));
        }
    }
}).$mount('#app');
