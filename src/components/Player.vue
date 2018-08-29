<template>
  <div class="row player">
    <div class="col card" v-for="(target, key) in player.hand">
      <img class="card-img-top" src="//placehold.it/100x100" alt="">
      <div class="card-body">
        <h5 class="card-title">{{player.hand[key].name}}</h5>
      </div>
      <ul class="list-group">
        <li class="list-group-item">Attack: {{player.hand[key].attack}}</li>
        <li class="list-group-item">Defense: {{player.hand[key].defense}}</li>
        <li class="list-group-item">Health: {{player.hand[key].health}}</li>
      </ul>
    </div>
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