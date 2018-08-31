<template>
  <div class="player">
    <div class="card" style="" v-for="(target, key) in player.hand" @click="playerCard(player.id, player.hand[key].id)">
      <div class="stats"><i class="fas fa-bolt"></i> {{player.hand[key].attack}}</div>
      <div class="stats"><i class="fas fa-shield-alt"></i> {{player.hand[key].defense}}</div>
      <div class="stats"><i class="fas fa-heart"></i> {{player.hand[key].health}}</div>
      <img class="card-img" :src="player.hand[key].img" alt="">
      <div class="name">{{player.hand[key].name}}</div>
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
  .player {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .card {
    width: 270px;
    height: 400px;
    background: linear-gradient(to top, #41b883, #50e09f, white);
    transition: box-shadow .2s;
    border-radius: 15px;
  }



  .card:hover {
    box-shadow: 0px 0px 20px #ffffffb3;
    cursor: pointer;
  }

  .name {
    height: 50px;
    width: 270px;
    background-color: #00000080;
    line-height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    flex-wrap: wrap;
    color: white;
  }

  .card-img {
    width: 100%;
  }

  .stats {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    transform: translate(5%, 35%);
  }

  /* .card-header img {
    height: 100%;
    display: block;
  } */







  /* .visible {
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
  } */
</style>