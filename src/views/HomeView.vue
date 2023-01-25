<template>
  <div id="main">
    <h2>Welcome</h2>
    <div id="search-div">
    <label> What
      <div class="occupationInput">
        <input type="text" placeholder="job" v-model="queryDetails.occupation" />
        <span class="fa-solid fa-briefcase"></span>
      </div>
    </label>
      <label >Where
      <div class="locationInput">
        <input
          type="text"
          placeholder="location"
          v-model="queryDetails.location"
        />
        <i class="fa-sharp fa-solid fa-location-dot"></i>
      </div>
      </label>
      <div>
        <button @click="search">Search</button>
      </div>
    </div>
    <div>
      <button @click="handleSignOut">sign out</button>
    </div>
  </div>
</template>

<script setup>
import { async } from "@firebase/util";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const auth = getAuth();

const router = useRouter();

const queryDetails = reactive({
  occupation: "",
  location: "",
});

const search = (queryDetails) => {
  console.log("search", queryDetails);
};

const handleSignOut = async () => {
  await auth.signOut();
  router.push("/");
};
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  font-family: 'Quicksand', sans-serif;
  align-items: center;
  justify-content: center;
  background-color: red;
}

#search-div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  padding: 4vh;
}

.occupationInput {
  position: relative;
} 
.occupationInput .fa-briefcase{
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
} 


.locationInput {
  position: relative;
} 
.locationInput .fa-location-dot{
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
} 



</style>

