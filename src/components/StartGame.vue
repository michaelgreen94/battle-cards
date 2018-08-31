<template>
  <div class="start">
    <div class="game-form">
      <img class="game-name" src="../assets/dark.png" alt="">
      <img class="logo" src="../assets/logo.png" alt="">
      <form @submit.prevent='startGame'>
        <label for="name">Your Name</label>
        <input id="name" v-model="gameConfig.playerName" type="text">
        <label for="deck">Deck #</label>
        <input id="deck" v-model="gameConfig.set" type="number" placeholder="Choose 1 - 4" min="0" max="4">
        <label for="opponents">Select number of opponents</label>
        <input v-model="gameConfig.opponents" type="number" placeholder="Max 10 players" min="0" max="5">
        <button class="game-button" type="submit">StartGame</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StartGame',
    data() {
      return {
        gameConfig: {}
      }
    },
    methods: {
      startGame() {
        this.$store.dispatch("newGame", this.gameConfig)
        // this.$store.dispatch("getGames")
      }
    }
  }
</script>

<style>
  .game-form {
    width: 20rem;
    height: auto;
    background-color: #5a5a5a8a;
    color: #ffffff;
    padding: 2rem;
    text-align: left;
    border-radius: 0.3125rem;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }

  .logo {
    width: 6.25rem;
    height: 6.25rem;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
  }

  label {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  input {
    width: 100%;
    margin-bottom: 1.25rem
  }

  .game-form input[type="text"],
  input[type="number"] {
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
    outline: none;
    height: 2.5rem;
    color: white;
    font-size: 1rem
  }

  .game-button {
    width: 100%;
    border: none;
    background-color: black;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 0.9375rem;
    transition: background-color .3s;
    height: 2.5rem
  }

  .game-button:hover {
    background-color: #4dba87;
  }

  .game-name {
    width: 12rem;
    height: 10rem;
    position: absolute;
    top: -8rem;
    left: -4.5rem;
  }
</style>