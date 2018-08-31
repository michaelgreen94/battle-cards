<template>
  <div class="start">
    <img class="game-name" src="../assets/dark.png" alt="">
    <div class="game-form">
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
    width: 320px;
    height: auto;
    background-color: #5a5a5a8a;
    color: #ffffff;
    padding: 2rem;
    text-align: left;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }

  .logo {
    width: 100px;
    height: 100px;
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
    margin-bottom: 20px
  }

  .game-form input[type="text"],
  input[type="number"] {
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
    outline: none;
    height: 40px;
    color: white;
    font-size: 16px
  }

  .game-button {
    width: 100%;
    border: none;
    background-color: black;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 15px;
    transition: background-color .3s;
    height: 40px
  }

  .game-button:hover {
    background-color: #4dba87;
  }

  .game-name {
    transform: translate(-62%, 186%);
  }
</style>