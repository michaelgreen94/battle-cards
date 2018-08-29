<template>
  <div class="row start">
    <div class="col">
      <h3>Whats your name Traveler?</h3>
      <form @submit.prevent='startGame'>
        <input v-model="gameConfig.playerName" type="text">
        <h3>Choose deck set</h3>
        <input v-model="gameConfig.set" type="number" min="0" max="4">
        <h3>Number of Opponents</h3>
        <input v-model="gameConfig.opponents" type="number" min="0" max="5">
        <button type="submit">Go</button>
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
      }
    }
  }
</script>