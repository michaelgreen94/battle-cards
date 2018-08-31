<template>
  <div class="enemy">
    <div class="e-visible">
      <div class="e-card" style="" v-for="(target, key) in enemy.hand" v-if="enemy.hand[key].visible" @click="enemyCard(enemy.id, enemy.hand[key].id)">
        <img class="v-img" :src="enemy.hand[key].img" alt="">
      </div>
      <div class="hidden" v-else>
        <img class="h-img" src="../assets/gamecard2Cropped.jpg" alt="" @click="enemyCard(enemy.id, enemy.hand[key].id)">
      </div>
    </div>
  </div>
</template>
<!-- <div class="dead-cards">
          <h1>Graveyard</h1>
          <h1>{{enemy.deadCards.length}}</h1>
        </div>
        <div class="deck">
          <h1>Deck</h1>
          <h1>{{enemy.remainingCards}}</h1>
        </div>
        <h1>{{enemy.name}}</h1> -->

<script>
  export default {
    name: "Enemy",
    computed: {
      game() {
        return this.$store.state.game
      },
      enemy() {
        return this.game.players[1]
      }
    },
    methods: {
      enemyCard(opponentId, opponentCardId) {
        this.$emit("addParams", { opponentId, opponentCardId })
        // debugger
      }
    }
  }
</script>

<style>
  /* .visible {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 25vh;
  }

  .h-img {
    display: block;
    max-width: 100px;
    max-height: 100px;
    height: auto;
    width: auto;
  }

  .enemy {
    display: flex;
    flex-wrap: wrap;
  }

  .v-img {
    display: block;
    max-width: 100px;
    max-height: 100px;
    height: auto;
    width: auto;
  }

  .e-card {
    border: 2px solid black;
    border-radius: 10px;
    background-color: rgb(141, 107, 43)
  } */
</style>