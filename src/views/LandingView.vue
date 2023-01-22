<template>
    <div class="landing-page">
        <h2 style="padding-top: 0;">Welcome to Job Finder!</h2>
        <p >Enjoy the process and best of luck!</p>
       
    <div class="container">
        <template v-if="showSignInForm" :style="loginStyle">
            <div id="login-panel" class= "animate__animated animate__slideInRight">
                <h2 style="margin-top: 5vh;">Welcome Back!</h2>
                <div class="social-container-login">
                    <i class="fa-brands fa-google fa-2x" @click="handleGoogleSignIn"></i>
                    <i class="fa-brands fa-twitter fa-2x" @click="handleTwitterSignIn"></i>
                    <i class="fa-brands fa-github fa-2x" @click="handleGithubSignIn"></i>               
                </div>
                <p>Or sign in with one of these options</p>
                <form @submit.prevent="loginUser" >
                    <label>
                        Email:
                        <input v-model="loginDetails.email" type="email" />
                    </label>
                    <br />
                    <label>
                    Password:
                    <div class="password-container">
                        <!-- <input v-model="password" type="password" :type="passwordType"/> -->
                        <input v-model="loginDetails.password" :type="showPassword ? 'text' : 'password'">
                        <i class="fas fa-eye" @click="showPassword = !showPassword"></i>
                    </div>
                    </label>
                    <br />
                    <button type="submit" 
                    value="login">Sign in</button>
                   
                </form>
                </div>
                <div id="login-panel-info" class= "animate__animated animate__slideInLeft">
                    <h1>Nice to see you again!</h1>
                    <h2>Lets continue our journey</h2>
                    <p>don't have an account? click Register</p>
                    <button @click="showSignInForm = !showSignInForm">
                    {{ showSignInForm ? 'Register' : 'Sign In' }}
                    </button>
                </div>
                </template>
                <template v-else>
                    <div id="register-panel-info" class= "animate__animated animate__slideInRight">
                        <h1>Hello there!</h1>
                        <h2>We're glad you chose us</h2>
                        <p>Lets get started!</p>
                        <p>have an account? click Sign In</p>
                        <!-- <div class="animate__animated animate__bounce animate__faster">Example</div> -->
                        <button @click="showSignInForm = !showSignInForm">
                        {{ showSignInForm ? 'Register' : 'Sign In' }}
                        </button>
                    </div>
                    <div id="register-panel" class= "animate__animated animate__slideInLeft">
                        <h2 style="margin-top: 4vh; margin-bottom: 4vh;">Create Account</h2>
                        <div class="social-container-register">
                            <i class="fa-brands fa-google fa-2x" @click="handleGoogleSignIn"></i>
                            <i class="fa-brands fa-twitter fa-2x" @click="handleTwitterSignIn"></i>
                            <i class="fa-brands fa-github fa-2x" @click="handleGithubSignIn"></i>
                        </div>
                        <p >Or sign up with one of these options</p>
                    <form @submit.prevent="registerUser">
                            <label>
                                Email:
                            <input v-model="registrationDetails.email" type="email" />
                            </label>
                            <label>
                            Password:
                            <div class="password-container">
                                <!-- <input v-model="password" type="password" :type="passwordType"/>
                                <i class="fas fa-eye" @click="togglePasswordVisibility"></i> -->
                                <input v-model="registrationDetails.password" :type="showPassword ? 'text' : 'password'">
                                <i class="fas fa-eye" @click="showPassword = !showPassword"></i>
                            </div>
                            </label>
                        <label>
                            Confirm Password:
                            <div class="password-container">
                                <!-- <input v-model="password" type="password" :type="passwordType"/>
                                <i class="fas fa-eye" @click="togglePasswordVisibility"></i> -->
                                <input v-model="password" :type="showPassword ? 'text' : 'password'">
                                <i class="fas fa-eye" @click="showPassword = !showPassword"></i>
                            </div>
                        </label>
                        <br />
                        <button type="submit" 
                        value="register">Register</button>
                    </form>
                </div>
                 </template>
            </div>
        </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useRouter } from 'vue-router';
import 'animate.css';


const registrationDetails = reactive({
    email: '',
    password: '',
})

const store = useStore()

const router = useRouter()

const providerTwitter = new TwitterAuthProvider();

const providerGit = new GithubAuthProvider();

const provider = new GoogleAuthProvider();

const auth = getAuth();

    const loginUser = () => {   
        store.dispatch('login', loginDetails)
    }

    const registerUser = () => {
        console.log(registrationDetails.value);
        store.dispatch('register', registrationDetails)
    }


const loginDetails = reactive({
    email: '',
    password: '',
})



const passwordType = ref('password');


function togglePasswordVisibility() {
      passwordType.value = passwordType.value === 'password' ? 'text' : 'password';
      console.log(passwordType.value);
    }

const showSignInForm = ref(true)

const showPassword = ref(false)

const handleGoogleSignIn = () => {
    console.log('google sign in');
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user.displayName);
            // provide('userName', user.displayName)
            router.push('/home')
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

const handleTwitterSignIn = () => {
    console.log('twitter');
    signInWithPopup(auth, providerTwitter)
    .then((result) => {
        console.log(result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            TwitterAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user.displayName);
            // provide('userName', user.displayName)
            router.push('/home')
            // ...
        }).catch((error) => {
            alert(error)
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

}

const handleGithubSignIn = () => {
    console.log('Git');
    signInWithPopup(auth, providerGit)
    .then((result) => {
        console.log(result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            GithubAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user.displayName);
            // provide('userName', user.displayName)
            router.push('/home')
            // ...
        }).catch((error) => {
            alert(error)
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

}




</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap'); 

 .landing-page{
    /* background-image: url('../assets/imgs/dbz-dragon-ball-z-goku-dragon-ball-super-wallpaper-preview.jpg'); */
    font: 'Quicksand';
    /* background-color: pink; */
    background-size: cover;
    min-height: 98vh;
    align-content: center; 
    justify-content: center;
} 

/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */

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
    font-style: oblique;
    margin-top: 0;
}


h1{
    margin: 0;
}

.password-container {
  position: relative;
}

.password-container i {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

#login-panel-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
}

#register-panel-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    background-color: white;
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
    font-family: 'Quicksand', sans-serif;
    background: transparent;
    height: 73vh;
    max-width: 160vh;
    min-width: 130vh;
    min-height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 grey;
    justify-content: space-between;
}

#login-panel{
   text-align: left;
   background-color: transparent;
   max-height: 73vh;
}

#register-panel{
    justify-items: center;
    align-items: center;
    text-align: end;
    padding-bottom: 10vh;
    max-height: 63vh;
    background-color: aliceblue;
}

form{
    /* padding-left: 10vh; */
    font: 'Quicksand', sans-serif;
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

.social-container-register{
    display: grid;
    grid-template-columns: 20% 20% 20%;
    padding-right: 4vh;
    cursor: pointer;
    align-items: center;
    justify-content: center;
}

.social-container-login{
    display: flex;
    flex-direction: row;
    padding-right: 3vh;
    cursor: pointer;
    align-items: center;
    justify-content: center;
}

i{
    margin-left: 8vh;
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
    align-self: center;
}


</style>

