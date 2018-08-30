<template>
  <div class="enemy">
    <div class="card bg-secondary" style="width: 18rem;" v-for="(target, key) in enemy.hand" v-if="enemy.hand[key].visable" @click="enemyCard(enemy.id, enemy.hand[key].id)">
      <img class="card-img-top" :src="enemy.hand[key].img" alt="">
      <div class="card-body">
        <h5 class="card-title">{{enemy.hand[key].name}}</h5>
      </div>
      <ul class="list-group">
        <li class="list-group-item">Attack: {{enemy.hand[key].attack}}</li>
        <li class="list-group-item">Defense: {{enemy.hand[key].defense}}</li>
        <li class="list-group-item">Health: {{enemy.hand[key].health}}</li>
      </ul>
    </div>
    <div class="hidden" v-else>
      <img src="../assets/gamecard2.png" alt="">
    </div>
    <h1>{{enemy.name}}</h1>
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

<style></style>