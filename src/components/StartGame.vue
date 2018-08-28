<template>
  <div class="start">
    <h3>Whats your name Traveler?</h3>
    <form @submit.prevent='startGame'>
      <input v-model="gameConfig.playerName" type="text" placeholder="Your name here">
      <h3>Choose deck set</h3>
      <input v-model="gameConfig.set" type="number" placeholder="1-4" min="0" max="4">
      <button type="submit">Go</button>
    </form>
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