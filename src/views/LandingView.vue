<template>
    <div class="landing-page">
        <h2>Welcome to Job Finder!</h2>
        <p>Enjoy the process and best of luck!</p>
        <div class="container">
            <div id="register-panel">
                <h2>Create Account</h2>
                <div class="social-container">
				    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			    </div>
                <form @submit.prevent="onSubmit">
                        <label>
                            Name:
                        <input v-model="name" type="text" />
                        </label>
                        <br />
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

<style>

.landing-page{
    /* background-image: url('../assets/imgs/dbz-dragon-ball-z-goku-dragon-ball-super-wallpaper-preview.jpg'); */
    background-color: white;
    background-size: cover;
    min-height: 98vh;
    align-content: center;
    justify-content: center;
}

.container{
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: red;
    min-width: 100vh;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 grey;
    justify-content: space-between;
}

#login-panel{
   text-align: center;
   background-color: aliceblue;
}

#register-panel{
    justify-items: center;
    align-items: center;
    padding-bottom: 10vh;
}

form{
    /* padding-left: 10vh; */
    font: 'Montserrat';
    justify-content: center;
    align-self: center;
    display: flex;
    text-align: left;
    flex-direction: column;
    background-color: transparent;
    border-radius: 8px;
    overflow: hidden;
    color: aliceblue;
    padding: 8vh;
    height: 100%;
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
	margin: 8px 0;
	width: 100%;
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
    height: 8vh;
    width: 80%;
    border-radius: 8px;
    font-weight: bold;
    text-transform: uppercase;
	transition: transform 80ms ease-in;
    align-self: center;
}
</style>