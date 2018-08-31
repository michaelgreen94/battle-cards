<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: 'sans-serif', Helvetica, Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    margin: 0;
    padding: 0;
    background: url('./assets/darkroom.jpg');
    background-color: rgba(0, 0, 0, 0.65);
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    font-family: sans-serif;
  }

  html {
    height: 100%
  }
</style>