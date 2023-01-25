<template>
    <div id="home-layout">
        <Nav />
        <RouterView />

    </div>
</template>

<script>
import Nav from '../components/Nav.vue';


export default {
    components: {
    Nav
}
}

</script>

<style scoped>

</style>