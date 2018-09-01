<template>
  <div class="player">
    <div class="player-name">{{player.name}}</div>
    <div class="card" v-for="(target, key) in player.hand" @click="playerCard(player.id, player.hand[key].id)">
      <div class="stats"><i class="fas fa-bolt"></i> {{player.hand[key].attack}}</div>
      <div class="stats"><i class="fas fa-shield-alt"></i> {{player.hand[key].defense}}</div>
      <div class="stats"><i class="fas fa-heart"></i> {{player.hand[key].health}}</div>
      <img class="card-img" :src="player.hand[key].img" alt="">
      <div class="name">{{player.hand[key].name}}</div>
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
  .player {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .player-name {
    width: 100%;
    padding: 1.125rem;
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
  }

  .card {
    margin-bottom: 1rem;
    width: 15.625rem;
    height: 21.875rem;
    background: linear-gradient(to top, #41b883, #50e09f, white);
    transition: box-shadow .2s;
    border-radius: 0.9375rem;
  }



  .card:hover {
    box-shadow: 0 0 1.25rem #ffffffb3;
    cursor: pointer;
  }

  .name {
    height: 3.125rem;
    width: 15.625rem;
    background-color: #00000080;
    line-height: 5.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    flex-wrap: wrap;
    color: white;
    border-bottom-left-radius: 0.9375rem;
    border-bottom-right-radius: 0.9375rem;
  }

  .card-img {
    width: 100%;
  }

  .stats {
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    transform: translate(5%, 35%);
  }
</style>