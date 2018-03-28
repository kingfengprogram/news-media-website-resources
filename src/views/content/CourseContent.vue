<template>
    <div class="template">
        <div class="main bg">
            <div class="content-container">
                <div class="content-poster" v-for="(item, index) in contentItems" :key="item.id">
                    <div class="content-poster-img">
                        <img :src="$loadRemoteFile(item.thumbImage)"/>
                    </div>
                    <div class="content-poster-shade">
                        <div class="shade-bottom-img">
                            <img :src="$loadRemoteFile(item.thumbImage)"/>
                        </div>
                        <router-link :to="'/content/details/' + index">
                            <div class="shade-middle-div">
                                <img src="/static/images/content-poster-shade.png"/>
                            </div>
                            <div class="shade-top-title">
                                <div class="title">{{item.name}}</div>
                                <div class="code">{{item.code | toUpperCase}}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseContent',
    data: function () {
        return {
            contentItems: []
        };
    },
    created: function () {
        this.loadData();
    },
    methods: {
        loadData: function () {
            this.$http.get('/portal/course/listAll', {active: true})
                .then((res) => {
                    if (res.data.result === 'success') {
                        this.contentItems = res.data.dataList;
                    }
                });
        }
    }
};

</script>

<style scoped>
    .main {
        position: relative;
        height: 100%;
        background-image: url("/static/images/course_content_bg.png");
    }

    .content-container {
        position: absolute;
        width: 1140px;
        height: 760px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin-top: -45px;
        z-index: 9;
    }

    .content-container .content-poster {
        display: inline-block;
        width: 360px;
        height: 360px;
        margin: 10px;
        perspective: 2000px;
    }

    .content-container .content-poster img {
        width: 100%;
    }

    .content-container .content-poster .content-poster-shade {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
    }

    .content-container .content-poster .content-poster-img{
        transition-duration: 800ms;
        transform: rotateY(0deg);
    }

    .content-container .content-poster:hover .content-poster-img{
        transition-duration: 800ms;
        transform: rotateY(-90deg);
    }

    .content-container .content-poster .content-poster-shade{
        transition-duration: 800ms;
        transform: rotateY(90deg);
    }

    .content-container .content-poster:hover .content-poster-shade{
        transition-duration: 800ms;
        transform: rotateY(0deg);
    }

    .content-container .content-poster .content-poster-shade .shade-middle-div{
        position: absolute;
        left: 0px;
        top: 0px;
        opacity: 0.84;
        z-index: 10;
    }

    .content-container .content-poster .content-poster-shade .shade-top-title{
        position: absolute;
        top: 50%;
        width: 100%;
        text-align: center;
        transform: translate3d(0, -50%, 0);
        z-index: 20;
    }

    .content-container .content-poster .content-poster-shade .shade-top-title .title{
        font-size: 36px;
    }

    .content-container .content-poster .content-poster-shade .shade-top-title .code{
        font-size: 14px;
    }
</style>
