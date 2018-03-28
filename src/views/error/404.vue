<template>
    <div class="not-found-container">
        <div class="center-container">
            <img src="/static/images/404.jpg">
            <div class="back-home">
                <router-link to="/index">
                    <button class="button" icon="fa fa-home">返回首页</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    .not-found-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .not-found-container .center-container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .not-found-container .back-home {
        position: absolute;
        left: 50%;
        margin-left: -53px;
        bottom: 130px;
    }

    .not-found-container .back-home .button {
        color: #A69D98;
        border: 1px solid #A69D98;
        background-color: rgba(27,14,10,0.6);
        padding: 5px 20px;
        font-size: 16px;
    }

    .not-found-container .back-home .button:hover {
        color: #fff;
        border: 1px solid #fff;
    }

    .not-found-container >>> .fa {
        font-size: 1em;
        margin-right: 15px;
    }
</style>
