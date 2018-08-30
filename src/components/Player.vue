<template>
  <div class="player">
    <div class="dead-cards">
      <h1>Graveyard</h1>
      <h1>{{player.deadCards.length}}</h1>
    </div>
    <div class="deck">
      <h1>Deck</h1>
      <h1>{{player.remainingCards}}</h1>
    </div>
    <h1>{{player.name}}</h1>
    <div class="visible">
      <div class="card bg-secondary" style="" v-for="(target, key) in player.hand" @click="playerCard(player.id, player.hand[key].id)">
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

<style>
  .visible {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }

  .player {
    display: flex;
    flex-wrap: wrap;
  }
</style>