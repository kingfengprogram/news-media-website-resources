<template>
    <div class="root-container">
        <transition :name="transitionName"
                    appear
                    appear-class="custom-appear-class"
                    appear-to-class="custom-appear-to-class"
                    appear-active-class="custom-appear-active-class">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Root',
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
    .root-container {
        height: 100%;
        overflow: hidden;
    }


    .slideRightCover-enter-active, .slideRightCover-leave-active, .slideLeftCover-enter-active, .slideLeftCover-leave-active {
        position: relative;
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
