<template>
    <div id="home-layout">
        <Nav />
        <RouterView />

        <Footer/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';


export default {
    components: {
    Nav,
    Footer
}
}

</script>

<style scoped>
#home-layout{
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>