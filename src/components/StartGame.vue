<template>
  <div class="start">
    <div class="game-form">
      <form @submit.prevent='startGame'>
        <label for="name">Your Name</label>
        <input id="name" v-model="gameConfig.playerName" type="text">
        <label for="deck">Deck #</label>
        <input id="deck" v-model="gameConfig.set" type="number" min="0" max="4">
        <label for="opponents">Select number of opponents</label>
        <input v-model="gameConfig.opponents" type="number" min="0" max="5">
        <input class="game-button" type="submit" value="StartGame">
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
    max-width: 500px;
    margin: 2rem auto;
    border: 2px solid black;
    padding: 2rem;
    text-align: left;
    border-radius: 5px;
  }

  label {
    display: block;
    width: 100%;
    padding: 1rem 0 .5rem;
    text-transform: uppercase;
    font-size: 14px;
  }

  input {
    display: block;
    width: 100%;
    border: 2px solid black;
    padding: .5rem;
    font-size: 18px;
    border-radius: 5px;
  }

  .game-button {
    border: 0;
    background-color: black;
    padding: .5rem;
    color: white;
    margin: 1rem;
    width: auto;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 15px;
    transition: background-color .3s;
  }

  .game-button:hover {
    background-color: red;
  }
</style>