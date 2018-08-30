<template>
  <div class="row player">
    <h1>{{player.name}}</h1>
    <div class="col card bg-secondary" v-for="(target, key) in player.hand" @click="playerCard(player.id, player.hand[key].id)">
      <img class="card-img-top" :src="player.hand[key].img" alt="">
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
    computed: {
      game() {
        return this.$store.state.game
      },
      player() {
        return this.game.players[0]
      }
    },
    methods: {
      playerCard(playerId, playerCardId) {
        this.$emit("addPlayerParams", { playerId, playerCardId })
        // debugger
      }
    }
  }
</script>

<style></style>