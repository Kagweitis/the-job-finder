<template>
    <div id="main">
        <h2>Welcome </h2>
        <div class="occupationInput">
            <label>What</label>
            <input type="text" placeholder="occupation" v-model="queryDetails.occupation">
            <i class="fa-solid fa-briefcase"></i>
        </div>
        <div class="locationInput">
            <label>Where</label>
            <input type="text" placeholder="location" v-model="queryDetails.location">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
        </div>
        <button @click="search"> Search </button>
        
        <button @click="handleSignOut">sign out</button>
    </div>
</template>

<script setup>
import { async } from "@firebase/util";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const auth = getAuth();

const router = useRouter()

const queryDetails = reactive({
    occupation: '',
    location: ''
})

const search = (queryDetails) => {
    console.log('search' ,queryDetails);
}

const handleSignOut = async () => {
    await auth.signOut()
    router.push('/')
    
}
</script>

<style scoped>

.occupationInput{
    position: relative;
}

.occupationInput i{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}

</style>