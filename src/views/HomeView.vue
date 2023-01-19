<template>
    <div>
        <h2>Welcome </h2>
        <h1>You are home</h1>
        <button @click="handleSignOut">sign out</button>
    </div>
</template>

<script setup>
import { async } from "@firebase/util";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();

const router = useRouter()

const handleSignOut = async () => {
    await auth.signOut()
    router.push('/')
    
}
</script>