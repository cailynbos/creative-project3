<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <div class="header">
      <h1 class="name">Book Recs</h1>
      <nav>
        <router-link to="/">All Books</router-link> |
        <router-link to="/scifi">Sci-fi</router-link> |
        <router-link to="/fantasy">Fantasy</router-link>
      </nav>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <a href="https://github.com/cailynbos/creative-project3">GitHub link</a>
    </div>
  </div>
</template>

<style>
html, body {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #393d3f;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #c6c5b9;
  text-align: center;
}

.name {
  margin-top: 0px;
  padding-top: 20px;
}

nav {
  margin: 0px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #393d3f;
}

nav a.router-link-exact-active {
  color: #62929e;
}

.content {
  flex: 1;
}

.footer {
  text-align: left;
  background-color: #c6c5b9;
  height: 20px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer a {
  color: #393d3f;
  text-decoration: none;
  padding: 10px;
}


@media (min-width: 48em) {
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
  }

  .name {
    margin-left: 40px;
  }

  nav {
    margin-right: 40px;
    width: 250px;
  }
}
</style>
