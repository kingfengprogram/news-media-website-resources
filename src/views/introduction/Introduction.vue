<template>
    <div class="template">
        <div class="bg">
            <swiper ref="introductionSwiper" :options="swiperOption">
                <!-- 这部分放你要渲染的那些内容 -->
                <swiper-slide v-for="(item, index) in swiperItems" :key="item.id" class="bg" :style="{backgroundImage: 'url(' + $loadRemoteFile(item.bannerImg) + ')'}">
                    <div v-if="item.contentImg" class="content-img">
                        <img :src="$loadRemoteFile(item.contentImg)" />
                        <router-link v-if="index === 0" to="/introduction/details" class="btn-middle"></router-link>
                    </div>
                </swiper-slide>
                <!-- 这是轮播的小圆点 -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import 'swiper';
import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
    name: 'Introduction',
    data: function () {
        return {
            swiperItems: [],
            swiperOption: {
                init: false,
                direction: 'vertical',
                speed: 800,
                grabCursor: true,
                watchOverflow: true,
                autoHeight: true,
                roundLengths: true,
                loop: false,
                followFinger: true,
                notNextTick: true,
                autoplay: false,
                uniqueNavElements: true,
                effect: 'slide',
                observer: true,
                observeParents: true,
                pagination: {
                    el: '.swiper-pagination',
                    renderBullet: function (index, className) {
                        return '<div class="' + className + '"></div>';
                    },
                    bulletClass: 'my-bullet',
                    bulletActiveClass: 'my-bullet-active',
                    clickable: true
                },
                paginationClickable: true,
                mousewheel: {
                    releaseOnEdges: false
                },
                centeredSlides: true,
                spaceBetween: 0
            }
        };
    },
    components: {
        swiper,
        swiperSlide
    },
    created: function () {
        this.loadData();
    },
    methods: {
        loadData: function () {
            this.$http.get('/portal/introductionBanner/listAll', {active: true})
                .then((res) => {
                    if (res.data.result === 'success') {
                        this.swiperItems = res.data.dataList;
                        this.$nextTick()
                            .then(() => {
                                this.$refs.introductionSwiper.swiper.init();
                            });
                    }
                });
        }
    }
};
</script>

<style scoped>
    .template >>> .content-img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        margin-top: -45px;
    }

    .template >>> .swiper-container {
        height: 100%;
    }

    .template >>> .swiper-container .swiper-slide {
        overflow: hidden;
    }

    .template >>> .btn-middle {
        position: relative;
        display: block;
        left: 50%;
        margin-top: 42px;
    }

    .template >>> .swiper-pagination {
        position: absolute;
        cursor: pointer;
        z-index: 10;
        right: 61px;
        margin-top: -45px;
    }

    .template >>> .swiper-pagination .my-bullet {
        cursor: pointer;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        margin-bottom: 20px;
        background-color: #d86730;
    }

    .template >>> .swiper-pagination .my-bullet-active {
        width: 12px;
        height: 36px;
        border-radius: 6px;
    }
</style>
