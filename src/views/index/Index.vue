<template>
    <div class="container-fluid">
        <div class="main bg">
            <video id="bgvideo" autoplay="true" loop>
                <source src="/static/video/index_center_bg.mp4" type="video/mp4">
                您的浏览器不支持 video 标签
            </video>
            <div class="center">
                <div class="center-bg">
                    <img src="/static/images/index_center_bg.png"/>
                </div>
                <router-link :to="'/video/play/' + playVideoId + '?url=' + playVideoUrl" class="btn-player"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data: function () {
        return {
            playVideoId: 'index-advertising-video',
            playVideoUrl: 'oss://resources/upload/1522115534876_身材有道宣传片.mp4'
        };
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        position: relative;
    }

    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -45px;
        transform: translate3d(-50%, -50%, 0);
    }

    .center .btn-player {
        left: 50%;
        bottom: 68px;
        margin-left: -60px;
    }

    #bgvideo {
        margin:0;
        padding:0;
        position: fixed;
        right: 0;
        bottom: 0;
        width: 100%;
        z-index: -100;
    }

</style>
