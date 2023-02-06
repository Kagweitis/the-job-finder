<template>
  <div id="main">
    <div id="search-div">
      <div class="occupationInput">
        <label> What </label>
        <input type="text" placeholder="job title, company, keywords" v-model="queryDetails.occupation" />
        <span class="fa-solid fa-briefcase"></span>
      </div>
      <div class="locationInput">
        <label >Where </label>
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
    <div id="job-cards">
      <div id="feed">
        <h2>Job Feed</h2>
      </div>
      <div id="details">
        <h2>Details </h2>
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
  flex: 1;
  font-family: 'Quicksand', sans-serif;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0%;
}

#search-div {
  display: grid;
  grid-template-columns: 1fr 1fr 0.1fr;
  grid-column-gap: 5vw;
  justify-content: center;
  align-items: center;
  padding: 4vh;
}

.occupationInput {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
} 
.occupationInput .fa-briefcase{
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: red;

} 


.locationInput {
  position: relative;
  display: flex;
  flex-direction: row;
  /* direction: rtl;  */
  text-align: left;
  
} 
.locationInput .fa-location-dot{
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: red;
} 

input
{
  border-radius: 5px;
  background-color: whitesmoke;
	border: none;
	padding: 12px 8vw;
	margin: 0;
	width: 100%;
  height: min-content;
  outline:invert;
  text-align: left;
}

label{
  margin-right: 5px;
  align-self: center;
}

#job-cards{
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  text-align: center;
}

#feed{
  box-shadow: 0 4px 8px 0 grey;
  background-color: red;
  border-radius: 10px;
  width: 40vw;
}

#details{
  box-shadow: 0 4px 8px 0 grey;
  background-color: blue;
  border-radius: 10px;
  width: 40vw;
}
</style>

