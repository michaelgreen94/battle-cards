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
    padding: 1.125rem;
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
  }

  .e-card {
    margin-top: 1rem;
    width: 15.625rem;
    height: 21.875rem;
    background: linear-gradient(to top, #3a0704, #a51715, white);
    transition: box-shadow .2s;
    border-radius: 0.9375rem;
  }

  .h-img {
    margin-top: 1rem;
    width: 15.625rem;
    height: 21.875rem;
    background-image: url('../assets/gamecard.gif');
    background-size: cover;
    background-position: center;
    border: 1px solid white;
    border-radius: 0.9375rem;
  }

  .h-img:hover {
    box-shadow: 0 0 1.25rem #ffffffb3;
    cursor: pointer;
  }

  .e-card:hover {
    box-shadow: 0 0 0.9375rem #ffffffb3;
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
    transform: translate(0%, -46%);
  }

  .card-img {
    width: 100%;
    transform: translate(0%, -10%);
  }

  .stats {
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    transform: translate(5%, 35%);
    color: black;
  }
</style>