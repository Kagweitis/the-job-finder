<template>
    <div class="landing-page">
        <h2 style="padding-top: 0;">Welcome to Job Finder!</h2>
        <p>Enjoy the process and best of luck!</p>
        <div class="container">
            <div id="register-panel">
                <h2>Create Account</h2>
                <div class="social-container">
                    <i class="fa-brands fa-google fa-2x"></i>
                    <i class="fa-brands fa-linkedin fa-2x"></i>
                    <i class="fa-brands fa-facebook fa-2x"></i>
                </div>
                <p>or sign up with one of these options</p>
                <form @submit.prevent="onSubmit">
                        <label>
                            Name:
                        <input v-model="name" type="text" />
                        </label>
                        <label>
                            Email:
                        <input v-model="email" type="email" />
                        </label>
                        <label>
                            Password:
                        <input v-model="password" type="password" />
                        </label>
                    <label>
                        Confirm Password:
                    <input v-model="password" type="password" />
                    </label>
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
            <div id="login-panel">
                <h2>Welcome Back!</h2>
                <div class="social-container">
                    <i class="fa-brands fa-google fa-2x"></i>
                    <i class="fa-brands fa-linkedin fa-2x"></i>
                    <i class="fa-brands fa-facebook fa-2x"></i>
                </div>
                <p>or sign in with one of these options</p>
                <form @submit.prevent="onSubmit">
                    <label>
                        Email:
                        <input v-model="email" type="email" />
                    </label>
                    <br />
                    <label>
                        Password:
                    <input v-model="password" type="password" />
                    </label>
                    <br />
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';


const details = reactive({
    name: '',
    email: '',
    password: '',
})

const onSubmit = () => {
    console.log(details)
}

</script>

<style scoped>

body{
    display: flex;
    justify-content: center;
}
 .landing-page{
    /* background-image: url('../assets/imgs/dbz-dragon-ball-z-goku-dragon-ball-super-wallpaper-preview.jpg'); */
    font: 'Montserrat';
    background-color: white;
    background-size: cover;
    min-height: 98vh;
    align-content: center; 
    justify-content: center;
} 

/* body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
    align-items: center;
	flex-direction: column;
	height: 100vh;
	margin: -20px 0 50px;
    text-align: left;
} */

h2{
    text-align: center;
    padding-top: 5vh;
}

p{
    text-align: center;
}

label{
    font-size: smaller4;
}

.container{
    display: grid;
    grid-template-columns: 50% 50%;
    font-family: 'Montserrat', sans-serif;
    background-color: red;
    height: 70vh;
    max-width: 140vh;
    min-height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 grey;
    justify-content: space-between;
}

#login-panel{
   text-align: left;
   background-color: aliceblue;
   max-height: 70vh;
}

#register-panel{
    justify-items: center;
    align-items: center;
    text-align: end;
    padding-bottom: 10vh;
    max-height: 80vh;
}

form{
    /* padding-left: 10vh; */
    font: 'Montserrat', sans-serif;
    justify-content: center;
    align-self: center;
    display: flex;
    text-align: left;
    flex-direction: column;
    background-color: transparent;
    overflow: hidden;
    color:black;
    padding: 8vh;
    height: fit-content;
    padding-top: 0px;
}

.social-container{
    display: grid;
    grid-template-columns: 20% 20% 20%;
    cursor: pointer;
    align-items: center;
    justify-content: center;
}
br{
    color: white;
}
input
{
    border-radius: 5px;
    background-color: whitesmoke;
	border: none;
	padding: 12px 15px;
	margin: 0;
	width: 100%;
    height: min-content;
    /* background: transparent; */
    /* border: none; */
    outline:invert;
}

label{
    align-content: flex-start;
}

button{
    background-color: rgba(0,0,0,0.4);
    color: aliceblue;
    height: 6vh;
    width: 80%;
    border-radius: 8px;
    font-weight: bold;
    text-transform: uppercase;
	transition: transform 80ms ease-in;
    align-self: center;
}


</style>

