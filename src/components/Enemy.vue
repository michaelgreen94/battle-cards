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
    </div>
    <div class="enemy-name">{{enemy.name}}</div>
  </div>
</template>

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

  .enemy-name {
    width: 100%;
    padding: 2px;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }

  .e-card {
    width: 250px;
    height: 350px;
    background: linear-gradient(to top, #3a0704, #a51715, white);
    transition: box-shadow .2s;
    border-radius: 15px;
  }

  .h-img {
    width: 250px;
    height: 350px;
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
    width: 250px;
    background-color: #00000080;
    line-height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    flex-wrap: wrap;
    color: white;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    transform: translate(0%, -46%);
  }

  .card-img {
    width: 100%;
    transform: translate(0%, -10%);
  }

  .stats {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    transform: translate(5%, 35%);
    color: black;
  }
</style>