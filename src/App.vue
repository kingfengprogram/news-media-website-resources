<template>
    <div id='app' class="app-container" v-cloak>
        <root></root>
    </div>
</template>

<script>
import Root from '@/components/Root';

export default {
    name: 'App',
    components: {
        Root
    }
};
</script>

<style scoped>
.app-container {
    height: 100%;
}
</style>
