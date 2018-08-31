<!-- <template>
  <div class="enemy">
    <div class="visible">
      <div class="e-card" style="" v-for="(target, key) in enemy.hand" v-if="enemy.hand[key].visible" @click="enemyCard(enemy.id, enemy.hand[key].id)">
        <img class="v-img" :src="enemy.hand[key].img" alt="">
      </div>
      <div class="hidden" v-else>
        <img class="h-img" src="../assets/gamecard2Cropped.jpg" alt="" @click="enemyCard(enemy.id, enemy.hand[key].id)">
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="enemy">
    <div class="e-card" style="" v-for="(target, key) in enemy.hand" v-if="enemy.hand[key].visible" @click="enemyCard(enemy.id, enemy.hand[key].id)">
      <div class="stats"><i class="fas fa-bolt"></i> {{enemy.hand[key].attack}}</div>
      <div class="stats"><i class="fas fa-shield-alt"></i> {{enemy.hand[key].defense}}</div>
      <div class="stats"><i class="fas fa-heart"></i> {{enemy.hand[key].health}}</div>
      <img class="card-img" :src="enemy.hand[key].img" alt="">
      <div class="name">{{enemy.hand[key].name}}</div>
    </div>
    <div class="hidden" v-else>
      <div class="h-img" @click="enemyCard(enemy.id, enemy.hand[key].id)"></div>
      <!-- <img class="h-img" src="../assets/gamecard2Cropped.jpg" alt="" @click="enemyCard(enemy.id, enemy.hand[key].id)"> -->
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
  .enemy {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .e-card {
    width: 270px;
    height: 400px;
    background: linear-gradient(to top, #3a0704, #a51715, white);
    transition: box-shadow .2s;
    border-radius: 15px;
  }

  .h-img {
    width: 270px;
    height: 400px;
    background-image: url('../assets/gamecard.gif');
    background-size: cover;
    background-position: center;
    border: 1px solid white;
    border-radius: 15px;
  }

  .h-img:hover {
    box-shadow: 0px 0px 20px #ffffffb3;
    cursor: pointer;
  }

  .e-card:hover {
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
    color: black;
  }

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