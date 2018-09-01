<template>
  <div class="results">
    <div v-if="game.players[1].dead" class="win">
      <h1>You Win</h1>
      <button class="r-button" @click="reset"></button>
    </div>
    <div v-else class="lose">
      <h1>You Lose</h1>
      <button class="r-button" @click="reset"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Results',
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    methods: {

    }
  }
</script>

<style>
  .r-button {
    background-color: gold;
    color: white;
  }

  h1 {
    color: white;
  }
</style>