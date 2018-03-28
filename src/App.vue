<template>
    <div id='app' class="app-container" v-cloak>
        <transition :name="transitionName"
                appear
                appear-class="custom-appear-class"
                appear-to-class="custom-appear-to-class"
                appear-active-class="custom-appear-active-class">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'App',
    data: function () {
        return {
            transitionName: ''
        };
    },
    beforeRouteUpdate: function (to, from, next) {
        var toCover;
        toCover = to.meta.cover;
        if (toCover) {
            this.transitionName = 'slideRightCover';
        } else {
            this.transitionName = 'slideLeftCover';
        }
        next();
    }
};
</script>

<style scoped>
.app-container {
    height: 100%;
    overflow: hidden;
}

.slideRightCover-enter-active, .slideRightCover-leave-active, .slideLeftCover-enter-active, .slideLeftCover-leave-active {
    transition: 800ms ease;
}

.slideRightCover-enter {
    transform: translate3d(100%, -100%, 0);
}

.slideRightCover-enter-to {
    transform: translate3d(0, -100%, 0);
}

.slideRightCover-leave {
    transform: translate3d(0, 0, 0);
}

.slideRightCover-leave-to {
    transform: translate3d(-100%, 0, 0);
}

.slideLeftCover-enter {
    transform: translate3d(-100%, -100%, 0);
}

.slideLeftCover-enter-to {
    transform: translate3d(0, -100%, 0);
}

.slideLeftCover-leave {
    transform: translate3d(0, 0, 0);
}

.slideLeftCover-leave-to {
    transform: translate3d(100%, 0, 0);
}

.custom-appear-class {
    transform: translate3d(100%, 0, 0);
}

.custom-appear-to-class {
    transform: translate3d(0, 0, 0);
}

.custom-appear-active-class {
    transition: 800ms ease;
}
</style>
