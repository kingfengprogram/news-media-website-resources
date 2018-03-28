<template>
    <div class="main bg">
        <div class="introduction">
            <div class="content">
                <img src="/static/images/introduction_details_content.png" />
                <router-link to="/introduction" class="btn-middle-default"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Details'
};
</script>

<style scoped>
    .main {
        background-image: url("/static/images/introduction_details_bg.png");
    }

    .introduction {
        position: relative;
        width: 50%;
        height: 100%;
        left: 50%;
    }

    .content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
    }

    .btn-middle-default {
        position: relative;
        display: block;
        left: 50%;
        margin-top: 76px;
        transform: translate3d(-50%, 0, 0);
    }
</style>
