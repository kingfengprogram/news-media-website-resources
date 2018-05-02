<template>
    <div class="content-detail-container">
        <swiper ref="contentDetailsSwiper" :options="swiperOption">
            <!-- 这部分放你要渲染的那些内容 -->
            <swiper-slide v-for="(item, index) in contentItems" :key="item.id" class="bg" :style="{backgroundImage: 'url(' + $loadRemoteFile(item.posterImage) + ')'}">
                <div class="content-detail-desc" :style="{backgroundImage: 'url(/static/images/bg_block_' + getintroductionPostion(index) + '.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '' + getintroductionPostion(index) + ' center'}" >
                    <div :class="[getintroductionPostion(index)]">
                        <router-link to="/content" class="btn-back"></router-link>
                        <div class="detail">
                            <div class="title">{{item.name}}</div>
                            <div class="code">{{item.code | toUpperCase}}</div>
                            <div class="introduction" v-html="item.introduction"></div>
                            <div class="course" v-if="item.choicenessCourses && item.choicenessCourses.length !== 0">精选课程</div>
                            <div class="choiceness-course">
                                <ul>
                                    <li v-for="course in item.choicenessCourses" :key="course.id"><span></span>{{course.tag ? '【' + course.tag + '】' : ''}}{{course.title}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <!-- 这是轮播的上一页下一页按钮 -->
            <div class="swiper-button swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper';
import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
    name: 'ContentDetails',
    data: function () {
        return {
            contentItems: [],
            swiperOption: {
                init: false,
                initialSlide: parseInt(this.$route.params.index, 10),
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
                observer: true,
                observeParents: true,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                },
                on: {
                    slideChangeTransitionStart: () => {
                        if (this.$refs.contentDetailsSwiper.swiper) {
                            this.$router.replace('/content/details/' + this.$refs.contentDetailsSwiper.swiper.realIndex);
                        }
                    }
                }
            }
        };
    },
    components: {
        swiper,
        swiperSlide
    },
    methods: {
        getintroductionPostion: function (index) {
            if (index % 2 === 0) {
                return 'left';
            } else {
                return 'right';
            }
        },
        loadData: function () {
            this.$http.get('/portal/course/listAll', {active: true})
                .then((res) => {
                    if (res.data.result === 'success') {
                        this.contentItems = res.data.dataList;
                        this.$nextTick(() => {
                            this.$refs.contentDetailsSwiper.swiper.init();
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
    .content-detail-container {
        height: 100%;
    }

    .content-detail-container >>> .swiper-container {
        height: 100%;
    }


    .content-detail-container >>> .swiper-container .swiper-button {
        margin-top: -32px;
    }

    .content-detail-container >>> .swiper-container .swiper-button-prev {
        left: 20px;
        top: 50%;
    }

    .content-detail-container >>> .swiper-container .swiper-button-next {
        right: 20px;
        top: 50%;
    }

    .content-detail-container >>> .swiper-container .content-detail-desc {
        height: 100%;
    }

    .content-detail-container >>> .swiper-container .content-detail-desc .left .detail {
        position: absolute;
        width: 500px;
        left: 90px;
        bottom: 63px;
    }

    .content-detail-container >>> .swiper-container .content-detail-desc .right .detail {
        position: absolute;
        width: 500px;
        right: 110px;
        bottom: 63px;
    }

    .content-detail-container >>> .swiper-container .content-detail-desc .left .btn-back {
        z-index: 20;
        top: 32px;
        left: 32px;
    }


    .content-detail-container >>> .swiper-container .content-detail-desc .right .btn-back {
        z-index: 20;
        top: 32px;
        right: 32px;
    }

    .content-detail-container .detail .title {
        font-size: 36px;
    }

    .content-detail-container .detail .code {
        font-size: 14px;
    }

    .content-detail-container .detail .introduction {
        margin-top: 20px;
        font-size: 16px;
    }

    .content-detail-container .detail .course {
        margin-top: 25px;
        font-size: 24px;
    }

    .content-detail-container .detail .choiceness-course {
        margin-top: 10px;
        font-size: 16px;
    }

    .content-detail-container .detail .choiceness-course li {
        margin-bottom: 5px;
    }

    .content-detail-container .detail .choiceness-course li span {
        margin-right: 8px;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: white;
    }

</style>
