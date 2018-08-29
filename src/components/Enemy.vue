<template>
  <div class="row enemy">
    <h1>{{enemy.name}}</h1>
    <div class="col card" v-for="(target, key) in enemy.hand">
      <img class="card-img-top" src="//placehold.it/100x100" alt="">
      <div class="card-body">
        <h5 class="card-title">{{enemy.hand[key].name}}</h5>
      </div>
      <ul class="list-group">
        <li class="list-group-item">Attack: {{enemy.hand[key].attack}}</li>
        <li class="list-group-item">Defense: {{enemy.hand[key].defense}}</li>
        <li class="list-group-item">Health: {{enemy.hand[key].health}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Enemy",
    data() {
      return {};
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      enemy() {
        return this.game.players[1]
      }
    }
  }
</script>