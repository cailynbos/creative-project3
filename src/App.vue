<template>
  <div id="app">
    <div id="header">
      <h1>Book Recs</h1>
      <nav>
        <router-link to="/">All Books</router-link> |
        <router-link to="/scifi">Sci-fi</router-link> |
        <router-link to="/fantasy">Fantasy</router-link>
      </nav>
    </div>
    <router-view/>
    <div id="footer">
      <a href="https://github.com/cailynbos/creative-project3">GitHub link</a>
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #393d3f;
}

#header {
  background-color: #c6c5b9;
  text-align: center;
}

#header h1 {
  margin-top: 0px;
  padding-top: 20px;
}

nav {
  margin: 0px;
  padding: 10px;
  display: flex;
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

#footer {
  text-align: left;
  background-color: #c6c5b9;
  height: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
}

#footer a {
  color: #393d3f;
  text-decoration: none;
}
</style>
