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
        <h3>Job Feed</h3>
              <div id="individual-cards">
                <h4>Company Title</h4>
                <h4>Job Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium doloremque voluptas illum veniam autem iure vel inventore dignissimos numquam perspiciatis ratione 
                atque reprehenderit voluptatem minus iusto, tempora aperiam velit assumenda?
                </p>
                <button id="apply">Apply</button>
              </div>
              <div id="individual-cards">
                <h4>Company Title</h4>
                <h4>Job Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium doloremque voluptas illum veniam autem iure vel inventore dignissimos numquam perspiciatis ratione 
                atque reprehenderit voluptatem minus iusto, tempora aperiam velit assumenda?
                </p>
                <button id="apply">Apply</button>
              </div>
              <div id="individual-cards">
                <h4>Company Title</h4>
                <h4>Job Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium doloremque voluptas illum veniam autem iure vel inventore dignissimos numquam perspiciatis ratione 
                atque reprehenderit voluptatem minus iusto, tempora aperiam velit assumenda?
                </p>
                <button id="apply">Apply</button>
              </div>
              <div id="individual-cards">
                <h4>Company Title</h4>
                <h4>Job Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium doloremque voluptas illum veniam autem iure vel inventore dignissimos numquam perspiciatis ratione 
                atque reprehenderit voluptatem minus iusto, tempora aperiam velit assumenda?
                </p>
                <button id="apply">Apply</button>
              </div>
              <div id="individual-cards">
                <h4>Company Title</h4>
                <h4>Job Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium doloremque voluptas illum veniam autem iure vel inventore dignissimos numquam perspiciatis ratione 
                atque reprehenderit voluptatem minus iusto, tempora aperiam velit assumenda?
                </p>
                <button id="apply">Apply</button>
              </div>
          </div>
      <div id="details">
        <h3>Details </h3>
        <h4>Company Title</h4>
        <h4>Job title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam tempore rem optio magni saepe, 
        atque a provident veritatis dolores sit omnis fugit blanditiis nihil tempora dignissimos distinctio quia ratione!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, ad reiciendis cupiditate eius dolor voluptate at quaerat veritatis, 
        doloribus corrupti nisi officia in minima est pariatur necessitatibus accusamus nostrum. Corporis!</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi omnis porro, veritatis earum, accusantium dignissimos sapiente sit eius,
         harum debitis consectetur et? Laudantium debitis nemo aperiam quidem incidunt sed cupiditate.</p>
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
import { reactive } from "vue";
import { searchJobs } from "../services/jobSearch"

const auth = getAuth();

const router = useRouter();

const queryDetails = reactive({
  occupation: "",
  jobLocation: "",
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
  grid-template-columns: 1fr 1fr;
  text-align: center;
  justify-items: center;
  justify-content: center;
  justify-content: space-between;
}

#individual-cards{
  display: grid;
  box-shadow: 0 4px 8px 0 grey;
  background-color: red;
  border-radius: 10px;
  width: 40vw;
  text-align: left;
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

