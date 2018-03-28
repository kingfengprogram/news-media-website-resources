<template>
    <div class="template">
        <head-top></head-top>
        <div class="slide-wapper">
            <transition :name="transitionName">
                <keep-alive exclude="Index">
                    <router-view></router-view>
                </keep-alive>
                <!--<router-view @mousewheel.native="changeView($event)" @DOMMouseScroll.native="changeView($event)"></router-view>-->
            </transition>
        </div>
    </div>
</template>

<script>
const HeadTop = () => import('@/components/header/HeadTop');
export default {
    data: function () {
        return {
            transitionName: 'slideRight'
        };
    },
    components: {
        HeadTop
    },
    beforeRouteUpdate: function (to, from, next) {
        var toPosition, fromPosition;
        toPosition = to.meta.position;
        fromPosition = from.meta.position;
        if (toPosition > fromPosition) {
            this.transitionName = 'slideRight';
        } else {
            this.transitionName = 'slideLeft';
        }
        next();
    },
    methods: {
        changeView: function (event) {
            var direction = this.getDirection(event);
            var prevViewUrl;
            var nextViewUrl;
            if (direction === 'mouseup') {
                prevViewUrl = this.$route.meta.prevViewUrl;
                if (prevViewUrl) {
                    this.$router.push(prevViewUrl);
                }
            } else if (direction === 'mousedown') {
                nextViewUrl = this.$route.meta.nextViewUrl;
                if (nextViewUrl) {
                    this.$router.push(nextViewUrl);
                }
            }
        },
        getDirection: function (event) {
            var direction = null;
            if (event.detail) {
                if (event.detail > 0) {
                    direction = 'mousedown';
                } else {
                    direction = 'mouseup';
                }
            } else if (event.wheelDelta) {
                if (event.wheelDelta > 0) {
                    direction = 'mouseup';
                } else {
                    direction = 'mousedown';
                }
            } else {
                console.log('无法判断鼠标方向!');
            }
            return direction;
        }
    }
};
</script>

<style scoped>
    .slide-wapper {
        position: relative;
        height: 100%;
        overflow: hidden;
    }

    .slideRight-enter-active, .slideRight-leave-active, .slideLeft-enter-active, .slideLeft-leave-active {
        transition: 800ms ease;
    }

    .slideRight-enter {
        transform: translate3d(100%, -100%, 0);
    }

    .slideRight-enter-to {
        transform: translate3d(0, -100%, 0);
    }

    .slideRight-leave {
        transform: translate3d(0, 0, 0);
    }

    .slideRight-leave-to {
        transform: translate3d(-100%, 0, 0);
    }

    .slideLeft-enter {
        transform: translate3d(-100%, -100%, 0);
    }

    .slideLeft-enter-to {
        transform: translate3d(0, -100%, 0);
    }

    .slideLeft-leave {
        transform: translate3d(0, 0, 0);
    }

    .slideLeft-leave-to {
        transform: translate3d(100%, 0, 0);
    }

</style>
