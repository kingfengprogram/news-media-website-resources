<template>
    <div class="template">
        <div  class="tutor-container">
            <div class="tutor-bg-swiper">
                <swiper ref="tutorBgSwiper" :options="swiperBgOption">
                    <swiper-slide v-for="item in tutorList" :key="item.id" class="bg" :style="{backgroundImage: 'url(' + $loadRemoteFile(item.bgImg) + ')'}">
                    </swiper-slide>
                </swiper>
                <router-link :to="'/video/play/' + playVideoId + '?url=' + playVideoUrl" class="btn-player"></router-link>
            </div>
            <div class="tutor-poster-swiper">
                <swiper ref="tutorPosterSwiper" :options="swiperPosterOption">
                    <!-- 这部分放你要渲染的那些内容 -->
                    <swiper-slide v-for="item in tutorList" :key="item.id">
                        <img :src="$loadRemoteFile(item.posterImg)"/>
                        <div class="poster-bottom">
                            <img src="/static/images/poster_bottom_img.png" />
                            <div class="poster-tag">
                                <div class="name">{{item.name}}</div>
                                <div class="tag">
                                    {{item.category}}{{item.category ? ' · ' : ''}}{{item.tag}}
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <!-- 这是轮播的上一页下一页按钮 -->
                    <div class="swiper-button swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper';
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import GlobalConfig from '@/components/globalConfig/GlobalConfig';

export default {
    name: 'Tutor',
    data: function () {
        return {
            pagination: GlobalConfig.pagination,
            playVideoId: '2c9084d3621d264a01621d2ff0ce0004',
            playVideoUrl: '',
            tutorList: [
                {
                    id: '2c9084d3621d264a01621d2ff0ce0004',
                    name: 'Ellen',
                    category: '瑜伽',
                    tag: '气质主教',
                    bgImg: 'local:///resources/upload/image/tutor/bg/2c9084d3621d264a01621d2ff0ce0004/1521520052555_tutor_bg_1.png',
                    posterImg: 'local:///resources/upload/image/tutor/poster/2c9084d3621d264a01621d2ff0ce0004/1521520040013_tutor_poster_1.png',
                    introductionVideo: '',
                    active: true,
                    position: 0
                },
                {
                    id: '2c9084d3621d264a01621d30ec7e0005',
                    name: '李欢',
                    category: '健身',
                    tag: '比基尼女神',
                    bgImg: 'local:///resources/upload/image/tutor/bg/2c9084d3621d264a01621d30ec7e0005/1521520172386_tutor_bg_2.png',
                    posterImg: 'local:///resources/upload/image/tutor/poster/2c9084d3621d264a01621d30ec7e0005/1521520176524_tutor_poster_2.png',
                    introductionVideo: '',
                    active: true,
                    position: 1
                },
                {
                    id: '2c9084d3621d264a01621d318cd50006',
                    name: '丸子',
                    category: '健身',
                    tag: '青春活力少女',
                    bgImg: 'local:///resources/upload/image/tutor/bg/2c9084d3621d264a01621d318cd50006/1521520191714_tutor_bg_3.png',
                    posterImg: 'local:///resources/upload/image/tutor/poster/2c9084d3621d264a01621d318cd50006/1521520193094_tutor_poster_3.png',
                    introductionVideo: '',
                    active: true,
                    position: 2
                },
                {
                    id: '2c9084d3621d264a01621d3220f40007',
                    name: '刘宁',
                    category: '中国钢管舞',
                    tag: '资深教练员',
                    bgImg: 'local:///resources/upload/image/tutor/bg/2c9084d3621d264a01621d3220f40007/1521520205660_tutor_bg_4.png',
                    posterImg: 'local:///resources/upload/image/tutor/poster/2c9084d3621d264a01621d3220f40007/1521520213566_tutor_poster_4.png',
                    introductionVideo: '',
                    active: true,
                    position: 3
                },
                {
                    id: '2c9084d3621d264a01621d3289240008',
                    name: '陈雨田',
                    category: '健身',
                    tag: '全明星教练',
                    bgImg: 'local:///resources/upload/image/tutor/bg/2c9084d3621d264a01621d3289240008/1521520227955_tutor_bg_5.png',
                    posterImg: 'local:///resources/upload/image/tutor/poster/2c9084d3621d264a01621d3289240008/1521520232098_tutor_poster_5.png',
                    introductionVideo: '',
                    active: true,
                    position: 4
                },
                {
                    id: '2c9084d3621d264a01621d33312d0009',
                    name: '杨洋',
                    category: '瑜伽',
                    tag: '明星网红达人',
                    bgImg: 'local:///resources/upload/image/tutor/bg/2c9084d3621d264a01621d33312d0009/1521520244427_tutor_bg_6.png',
                    posterImg: 'local:///resources/upload/image/tutor/poster/2c9084d3621d264a01621d33312d0009/1521520250456_tutor_poster_6.png',
                    introductionVideo: '',
                    active: true,
                    position: 5
                }
            ],
            swiperBgOption: {
                direction: 'horizontal',
                speed: 800,
                roundLengths: true,
                centeredSlides: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
                simulateTouch: false,
                loop: true,
                loopAdditionalSlides: Number.MAX_VALUE,
                effect: 'slide',
                lazyLoading: true,
                observer: true,
                observeParents: true
            },
            swiperPosterOption: {
                initialSlide: 0,
                direction: 'horizontal',
                speed: 800,
                roundLengths: true,
                autoHeight: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                spaceBetween: 21,
                simulateTouch: false,
                loop: true,
                loopAdditionalSlides: Number.MAX_VALUE,
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                effect: 'slide',
                lazyLoading: true,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                },
                observer: true,
                observeParents: true,
                on: {
                    slideChangeTransitionEnd: () => {
                        if (this.$refs.tutorPosterSwiper.swiper !== null) {
                            this.playVideoId = this.tutorList[this.$refs.tutorPosterSwiper.swiper.realIndex].id;
                            this.playVideoUrl = this.tutorList[this.$refs.tutorPosterSwiper.swiper.realIndex].introductionVideo;
                        }
                    }
                }

            }
        };
    },
    components: {
        swiper,
        swiperSlide,
        GlobalConfig
    },
    methods: {
        loadData: function () {
            this.$http.get('/portal/tutor/list', {active: true, pageSize: this.pagination.pageSize, currentPage: this.pagination.currentPage})
                .then((res) => {
                    if (res.data.result === 'success') {
                        this.tutorList = res.data.pagination.dataList;
                        this.playVideoId = this.tutorList[0].id;
                        this.playVideoUrl = this.tutorList[0].introductionVideo;
                        this.$nextTick(() => {
                            this.$refs.tutorPosterSwiper.swiper.controller.control = this.$refs.tutorBgSwiper.swiper;
                        });
                    }
                });
        }
    },
    created: function () {
        this.loadData();
    }
};

</script>

<style scoped>
    .tutor-container {
        height: 100%;
    }

    .tutor-container .tutor-poster-swiper {
        position: absolute;
        bottom: 150px;
        width: 100%;
        height: 357px;
        overflow: hidden;
        z-index: 10;
    }

    .tutor-container .tutor-poster-swiper .swiper-button {
        margin-top: -32px;
    }

    .tutor-container .tutor-poster-swiper >>> .swiper-container {
        top: 50%;
        transform: translate3d(0, -50%, 0);
        overflow: visible;
    }

    .tutor-poster-swiper >>> .swiper-slide {
        width: 404px;
        height: 273px;
        background-color: #000000;
        z-index: 10;
    }

    .tutor-poster-swiper >>> .swiper-slide-active {
        z-index: 100;
    }

    .tutor-poster-swiper >>> .swiper-slide img {
        transition: opacity 800ms;
        opacity: 0.6;
        width: 100%;
    }

    .tutor-poster-swiper >>> .swiper-slide-active img {
        transition: opacity 800ms;
        opacity: 1;
    }

    .tutor-poster-swiper >>> .swiper-slide-next, .tutor-poster-swiper >>> .swiper-slide-prev, .tutor-poster-swiper >>> .swiper-slide-duplicate-prev, .tutor-poster-swiper >>> .swiper-slide-duplicate-next {
        transition-duration: 800ms;
        transform: scale(1, 1);
    }

    .tutor-poster-swiper >>> .swiper-slide-active, .tutor-poster-swiper >>> .swiper-slide-duplicate-active {
        transition-duration: 800ms;
        transform: scale(1.3, 1.3);
    }

    .tutor-poster-swiper >>> .swiper-slide .poster-bottom {
        position: absolute;
        bottom: 0px;
        width: 404px;
        height: 58px;
        transition: opacity 800ms;
        opacity: 0;
    }

    .tutor-poster-swiper >>> .swiper-slide-active .poster-bottom, .tutor-poster-swiper >>> .swiper-slide-duplicate-active .poster-bottom {
        transition: opacity 800ms;
        opacity: 1;
    }

    .tutor-poster-swiper >>> .poster-bottom .poster-tag {
        position: absolute;
        top: 5px;
        margin-left: 20px;
    }

    .tutor-poster-swiper >>> .poster-bottom .poster-tag .name {
        font-size: 23px;
        line-height: 1.3;
    }

    .tutor-poster-swiper >>> .poster-bottom .poster-tag .tag {
        font-size: 13px;
        line-height: 1.2;
    }

    .tutor-container .tutor-bg-swiper {
        height: 100%;
    }

    .tutor-container .tutor-bg-swiper >>> .swiper-container {
        height: 100%;
    }

    .tutor-container .tutor-bg-swiper .btn-player {
        position: absolute;
        left: 50%;
        top: 35%;
        transform: translate3d(-50%, -50%, 0);
        z-index: 11;
    }
</style>
