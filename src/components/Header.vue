<template>
  <header>
    <div id="header-wrapper">
      <div id="logo-title">
        <div id="logo">
          <img src="/icons/compass.svg" alt="LOGO" />
        </div>
        <div id="blog-title">
          <h1 class="text-4xl">The Travel Bug</h1>
        </div>
      </div>
      <nav>
        <div class="nav-item">
          <router-link to="/"
            ><img src="/icons/home.svg" /><span> Home</span>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/contact"
            ><img src="/icons/at-sign.svg" /><span> Contact</span></router-link
          >
        </div>
        <div class="nav-item">
          <router-link to="/new-post">
            <img src="/icons/edit.svg" /><span> New Post</span></router-link
          >
        </div>
        <div class="nav-item">
          <router-link to="/login"
            ><img src="/icons/log-in.svg" /><span> Log In</span></router-link
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  min-width: 300px;
  background-color: #e6d5b8;
}

#header-wrapper {
  max-height: 80px;
  max-width: 2800px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

#logo-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

#blog-title > h1 {
  font-family: "Lobster", cursive;
  margin: 0;
  color: #e45826;
  display: none;
}

@media only screen and (min-width: 600px) {
  #blog-title > h1 {
    display: flex;
  }
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  height: 50%;
  /* vertical-align: middle; */
  margin-left: 15px;
  display: flex;
  align-items: center;
}

.nav-item img {
  height: 20px;
  vertical-align: middle;
  stroke: #4a3933;
}

.nav-item img:hover {
  height: 25px;
}

.nav-item span {
  display: none;
}

@media only screen and (min-width: 800px) {
  .nav-item span {
    vertical-align: middle;
    display: inline;
  }
  .nav-item img:hover {
    height: 20px;
  }
}

#logo {
  height: 40px;
  width: 40px;
}

#logo img {
  height: 100%;
  width: 100%;
  /* object-fit: cover; */
  border-radius: 10px;
  color: #e45826;
}
</style>
