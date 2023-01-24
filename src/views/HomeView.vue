<template>
  <div id="main">
    <h2>Welcome</h2>
    <div id="search-div">
      <div class="occupationInput">
        <label>What</label>
        <input type="text" placeholder="job" v-model="queryDetails.occupation" />
        <span class="fa-solid fa-briefcase"></span>
      </div>
      <div class="locationInput">
        <label>Where</label>
        <input
          type="text"
          placeholder="location"
          v-model="queryDetails.location"
        />
        <i class="fa-sharp fa-solid fa-location-dot"></i>
      </div>
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
  font-family: 'Quicksand', sans-serif;
}

#search-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 4vh;
  background-color: red;
}


input[type="text"] {
  width: 20rem;
  height: 2rem;
  font-size: 20px;
  border-radius: 10px;
  margin-right: 2vh;
}

.occupationInput {
  position: relative;
}

.occupationInput i {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.fa-briefcase {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
/* input{
    margin-left: 4vh;
} */
</style>
