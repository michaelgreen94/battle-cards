<template>
  <div class="player">
    <h1>{{player.name}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Player",
    data() {
      return {}
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      player() {
        return this.game.players[0]
      }
    }
  }
</script>