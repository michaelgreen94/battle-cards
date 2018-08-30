<template>
  <div class="battlefield">
    <Enemy v-on:addParams="addParams" />
    <button v-if="attackObj.playerCardId && attackObj.opponentCardId">Attack</button>
    <Player v-on:addPlayerParams="addPlayerParams" />
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

    },
    methods: {
      addParams(payload) {
        this.attackObj.opponentId = payload.opponentId
        this.attackObj.opponentCardId = payload.opponentCardId
      },
      addPlayerParams(payload) {
        this.attackObj.playerId = payload.playerId
        this.attackObj.playerCardId = payload.playerCardId
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
</style>