<template>
    <div class="template">
        <div class="video-container">
            <div class="video-bg-swiper">
                <swiper ref="videoBgSwiper" :options="videoBgOption">
                    <swiper-slide v-for="item in videoList" :key="item.id" class="bg" :style="{backgroundImage: 'url(' + $loadRemoteFile(item.bgImage) + ')'}"></swiper-slide>
                </swiper>
                <router-link :to="'/video/play/' + playVideoId + '?url=' + playVideoUrl" class="btn-player"></router-link>
            </div>
            <div class="video-poster-swiper">
                <swiper ref="videoPosterSwiper" :options="videoPosterOption">
                    <!-- 这部分放你要渲染的那些内容 -->
                    <swiper-slide v-for="item in videoList" :key="item.id">
                        <div class="poster-image">
                            <img :src="$loadRemoteFile(item.posterImage)"/>
                        </div>
                        <div class="poster-bottom">
                            <div class="title" :title="item.category + (item.category ? ' - ' : '') + item.title">{{item.category}}{{item.category ? ' - ' : ''}}{{item.title}}</div>
                            <div class="info">
                                <span>难度</span>
                                <div class="star">
                                    <img v-for="count in difficultyCount" :key="count" :src="'/static/images/difficulty_star' + (count <= item.difficulty ? '_hover' : '') + '.png'"/>
                                </div>
                                <span style="margin-left: 31px">{{item.totalNumber ? item.totalNumber : 0}}人训练过</span>
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
    name: 'Video',
    data: function () {
        return {
            pagination: GlobalConfig.pagination,
            playVideoId: 0,
            playVideoUrl: '2c9084d36222ab40016222ab76b90000',
            difficultyCount: [1, 2, 3],
            videoList: [
                {
                    id: '2c9084d36222ab40016222ab76b90000',
                    category: '瑜伽',
                    title: '快速燃烧脂肪瘦身',
                    difficulty: 1,
                    totalNumber: 1256000,
                    bgImage: 'local:///resources/upload/image/video/bg/2c9084d36222ab40016222ab76b90000/1521520460696_video_bg_1.png',
                    posterImage: 'local:///resources/upload/image/video/poster/2c9084d36222ab40016222ab76b90000/1521520464124_video_poster_1.png',
                    url: '',
                    active: true,
                    position: 0
                },
                {
                    id: '2c9084d36222ab400162232430da0001',
                    category: '健身',
                    title: '手臂增肌',
                    difficulty: 3,
                    totalNumber: 1521540,
                    bgImage: 'local:///resources/upload/image/video/bg/2c9084d36222ab400162232430da0001/1521520477635_video_bg_2.png',
                    posterImage: 'local:///resources/upload/image/video/poster/2c9084d36222ab400162232430da0001/1521520481302_video_poster_2.png',
                    url: '',
                    active: true,
                    position: 1
                },
                {
                    id: '2c9084d36222ab4001622324d78e0002',
                    category: '钢管舞赏析',
                    title: '红蔷薇',
                    difficulty: 1,
                    totalNumber: 221540,
                    bgImage: 'local:///resources/upload/image/video/bg/2c9084d36222ab4001622324d78e0002/1521520493159_video_bg_3.png',
                    posterImage: 'local:///resources/upload/image/video/poster/2c9084d36222ab4001622324d78e0002/1521520496954_video_poster_3.png',
                    url: '',
                    active: true,
                    position: 2
                },
                {
                    id: '2c9084d36222ab400162232553160003',
                    category: '养生',
                    title: '杨氏太极42式',
                    difficulty: 1,
                    totalNumber: 321540,
                    bgImage: 'local:///resources/upload/image/video/bg/2c9084d36222ab400162232553160003/1521520507407_video_bg_4.png',
                    posterImage: 'local:///resources/upload/image/video/poster/2c9084d36222ab400162232553160003/1521520511557_video_poster_4.png',
                    url: '',
                    active: true,
                    position: 3
                },
                {
                    id: '2c9084d36222ab4001622325dc0b0004',
                    category: '尊巴',
                    title: '有趣动感ZUMBA',
                    difficulty: 3,
                    totalNumber: 8945140,
                    bgImage: 'local:///resources/upload/image/video/bg/2c9084d36222ab4001622325dc0b0004/1521520527736_video_bg_5.png',
                    posterImage: 'local:///resources/upload/image/video/poster/2c9084d36222ab4001622325dc0b0004/1521520530728_video_poster_5.png',
                    url: '',
                    active: true,
                    position: 4
                },
                {
                    id: '2c9084d36222ab400162232688080005',
                    category: '养生',
                    title: '按摩理疗',
                    difficulty: 2,
                    totalNumber: 8945140,
                    bgImage: 'local:///resources/upload/image/video/bg/2c9084d36222ab400162232688080005/1521520540068_video_bg_6.png',
                    posterImage: 'local:///resources/upload/image/video/poster/2c9084d36222ab400162232688080005/1521520543267_video_poster_6.png',
                    url: '',
                    active: true,
                    position: 5
                },
                {
                    id: '2c9084d36222ab4001622327037d0006',
                    category: '养生',
                    title: '广场舞',
                    difficulty: 2,
                    totalNumber: 8945140,
                    bgImage: 'local:///resources/upload/image/video/bg/2c9084d36222ab4001622327037d0006/1521520558884_video_bg_7.png',
                    posterImage: 'local:///resources/upload/image/video/poster/2c9084d36222ab4001622327037d0006/1521520561655_video_poster_7.png',
                    url: '',
                    active: true,
                    position: 6
                }
            ],
            videoBgOption: {
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
            videoPosterOption: {
                initialSlide: 0,
                direction: 'horizontal',
                speed: 800,
                roundLengths: true,
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
                effect: 'coverflow',
                lazyLoading: true,
                coverflowEffect: {
                    rotate: 10,
                    stretch: 0,
                    depth: 1000,
                    modifier: 1,
                    slideShadows: false
                },
                observer: true,
                observeParents: true,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                },
                on: {
                    slideChangeTransitionEnd: () => {
                        if (this.$refs.videoPosterSwiper.swiper !== null) {
                            this.playVideoId = this.videoList[this.$refs.videoPosterSwiper.swiper.realIndex].id;
                            this.playVideoUrl = this.videoList[this.$refs.videoPosterSwiper.swiper.realIndex].url;
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
            this.$http.get('/portal/video/list', {active: true, pageSize: this.pagination.pageSize, currentPage: this.pagination.currentPage})
                .then((res) => {
                    if (res.data.result === 'success') {
                        this.videoList = res.data.pagination.dataList;
                        this.$nextTick(() => {
                            this.$refs.videoPosterSwiper.swiper.controller.control = this.$refs.videoBgSwiper.swiper;
                        });
                    }
                });
        }
    },
    activated: function () {
        this.loadData();
    },
    deactivated: function () {
        setTimeout(() => {
            this.$destroy();
        }, 800);
    }
};

</script>

<style scoped>
    .video-container {
        height: 100%;
    }

    .video-container .video-poster-swiper {
        position: absolute;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        width: 100%;
        z-index: 10;
        margin-top: 45px;
    }

    .video-container .video-poster-swiper .swiper-container {
        perspective: 5000px;
        transform-style: preserve-3d;
    }

    .video-container .video-poster-swiper .swiper-button {
        margin-top: -82px;
    }

    .video-poster-swiper .swiper-slide {
        width: 443px;
    }

    .video-poster-swiper .swiper-slide .poster-image {
        width: 100%;
        height: 327px;
        background-color: #333333;
    }

    .video-poster-swiper .swiper-slide .poster-image>img {
        width: 100%;
        opacity: 0.6;
        transition: opacity 800ms;
    }

    .video-poster-swiper .swiper-slide-active .poster-image>img, .video-poster-swiper .swiper-slide-duplicate-active .poster-image>img {
        opacity: 1;
        transition: opacity 800ms;
    }

    .video-poster-swiper .swiper-slide .poster-bottom {
        opacity: 0;
        transition: opacity 800ms;
    }

    .video-poster-swiper .swiper-slide .poster-bottom .title {
        margin-top: 20px;
        font-size: 36px;
        line-height: 1.33;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .video-poster-swiper .swiper-slide .poster-bottom .info {
        width: 100%;
        font-size: 20px;
        line-height: 1;
        color: #b3b3b3;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .video-poster-swiper .swiper-slide .poster-bottom .star {
        display: inline-block;
        margin-top: 5px;
    }

    .video-poster-swiper .swiper-slide .poster-bottom .star img {
        margin-left: 12px;
    }

    .video-poster-swiper .swiper-slide-active .poster-bottom, .video-poster-swiper .swiper-slide-duplicate-active .poster-bottom {
        opacity: 1;
        transition: opacity 800ms;
    }

    .video-container .video-bg-swiper {
        height: 100%;
    }

    .video-container .video-bg-swiper .swiper-container {
        height: 100%;
    }

    .video-container .video-bg-swiper .btn-player {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        z-index: 20;
        margin-top: -5px;
    }
</style>
