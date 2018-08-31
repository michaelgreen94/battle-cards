<template>
  <div class="battlefield">
    <div class="enemy-hand">
      <Enemy v-on:addParams="addParams" />
    </div>
    <div class="jungle">
      <button class="fight" v-if="attackObj.playerCardId && attackObj.opponentCardId" @click.prevent="attack">Attack</button>
    </div>
    <div class="player-hand">
      <Player v-on:addPlayerParams="addPlayerParams" />
    </div>
  </div>
</template>

<script>
  import Enemy from "@/components/Enemy"
  import Player from "@/components/Player"

  export default {
    name: 'Battlefield',
    data() {
      return {
        attackObj: {
          playerId: "",
          playerCardId: "",
          opponentId: "",
          opponentCardId: ""
        }
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      addParams(payload) {
        this.attackObj.opponentId = payload.opponentId
        this.attackObj.opponentCardId = payload.opponentCardId

      },
      addPlayerParams(payload) {
        this.attackObj.playerId = payload.playerId
        this.attackObj.playerCardId = payload.playerCardId
      },
      attack() {
        this.$store.dispatch('attack', { attackObj: this.attackObj, gameId: this.game.id })
        this.attackObj = {
          playerId: "",
          playerCardId: "",
          opponentId: "",
          opponentCardId: ""
        }
      }
    },
    components: {
      Enemy,
      Player
    }
  }
</script>

<style>
  /* * {
    outline: 1px solid red;
  } */

  /* .jungle {
    display: flex;
    justify-content: center;
    height: 10rem;
    align-items: center
  }

  .fight {
    height: 2rem;
    width: 6rem;
    justify-content: center;
    align-self: center;
    border-radius: 10px;
    background-color: red;
    border: none;
    transition: box-shadow 0.2s;
  }

  .fight:hover {
    box-shadow: 1px 2px 9px 1px black;
  }

  .battlefield {
    height: 100vh;
  } */
</style>