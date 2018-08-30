<template>
  <div class="player">
    <div class="visible">
      <div class="p-card" style="" v-for="(target, key) in player.hand" @click="playerCard(player.id, player.hand[key].id)">
        <img class="p-img" :src="player.hand[key].img" alt="">
      </div>
    </div>
  </div>
</template>
<!-- <div class="dead-cards">
    <h1>Graveyard</h1>
    <h1>{{player.deadCards.length}}</h1>
  </div>
  <div class="deck">
    <h1>Deck</h1>
    <h1>{{player.remainingCards}}</h1>
  </div>
  <h1>{{player.name}}</h1> -->

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
    height: 37.2vh;
  }

  .player {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    bottom: 0;
    justify-content: space-evenly;
    width: 100%;
  }

  .p-card {
    border: 2px solid black;
    border-radius: 10px;
    background-color: rgb(141, 107, 43)
  }

  .p-img {
    display: block;
    max-width: 100px;
    max-height: 100px;
    height: auto;
    width: auto;
  }
</style>