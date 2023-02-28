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
          v-model="queryDetails.jobLocation"
        />
        <i class="fa-sharp fa-solid fa-location-dot"></i>
      </div>
      <div>
        <button @click="search">Search</button>
      </div>
    </div>
    <div id="jobs">
      <div id="feed">
        <div id="individual-cards" v-for="job in results.jobs" :key="job.id">
            <h3>{{ job.title }}</h3>
            <h3>{{ job.company.display_name }}</h3>
            <p>{{ job.location.display_name }}</p>
            <p> {{ job.description }}</p>
            <button id="apply" @click="visitJob(job.redirect_url)">Apply</button>
        </div>  
      </div>
    </div>
    <hr style="color: black;">
    <div>
      <button @click="handleSignOut">sign out</button>
    </div>
  </div>
</template>

<script setup>
import { async } from "@firebase/util";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { getTheJobs } from "../services/jobSearch"

const auth = getAuth();

const router = useRouter();

const queryDetails = reactive({
  occupation: "",
  jobLocation: ""
});

const results = reactive({
  jobs: [],
})

const search = () => {
  //we can pass queryDetails inside function searchJobs without passing it inside search as queryDetails is reactive and can be
  //accessed in a function inside another function
  getTheJobs({occupation: queryDetails.occupation, jobLocation: queryDetails.jobLocation})
  .then((response) => {
    console.log( 'responses are', response);
    results.jobs = response
    // results.jobs = results.jobs.json()
    console.log(results.jobs);
  }) 
}



const handleSignOut = async () => {
  await auth.signOut();
  router.push("/");
};

const visitJob = (url) => {
  window.open(url, '_blank').focus();
}
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

#jobs{
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  justify-items: center;
  justify-content: center;
  justify-content: space-between;
}

#individual-cards{
  display: grid;
  box-shadow: 0 4px 8px 0 grey;
  /* background-color: red; */
  border-radius: 10px;
  width: 80vw;
  text-align: left;
  padding: 1em;
  margin-bottom: 1em;
}

#details{
  box-shadow: 0 4px 8px 0 grey;
  background-color: blue;
  border-radius: 10px;
  width: 40vw;
}

#apply{
display: flex;
justify-self: flex-end;
background-color: yellow;
}
</style>

