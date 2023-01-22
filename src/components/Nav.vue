<template>
  <div id="navbar">
      <nav >
          <div id="logo">
              <img src="../assets/Finder-red-clear1.png" alt="logo" style="height: 12em; width: 11em;">
          </div>
          <div id="nav-links">
              <router-link to="/home">Home</router-link>
              <router-link to="/jobs">Jobs</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/profile">Profile</router-link>
          </div>
          <RouterView />
      </nav>
  </div>
  
</template>

<script>
</script>

<style scoped>



nav{
  display: grid;
  grid-template-columns: 1fr 4fr;
}

#nav-links{
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-column-gap: 30px;
  align-items: center;
  justify-content: flex-end;
}



</style>