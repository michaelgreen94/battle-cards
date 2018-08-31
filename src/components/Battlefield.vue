<template>
  <div class="battlefield">
    <div class="enemy-hand">
      <Enemy v-on:addParams="addParams" />
    </div>
    <div class="jungle">
      <a href="#" v-if="attackObj.playerCardId && attackObj.opponentCardId" @click.prevent="attack"><span></span>Fight</a>
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

  .jungle {
    height: 19vh;
  }

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 50px;
    background: #262626;
    text-transform: uppercase;
    text-align: center;
    line-height: 50px;
    color: #ff0;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 4px;
  }

  a:before,
  a:after,
  span:before,
  span:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #ff0;
    transition: 1s;
    mix-blend-mode: hue;
  }

  a:before {
    top: -2px;
    left: -2px;
  }

  a:after {
    top: -2px;
    right: -2px;
  }

  span:before {
    bottom: -2px;
    left: -2px;
  }

  span:after {
    bottom: -2px;
    right: -2px;
  }

  a:hover:before,
  a:hover:after,
  a:hover span:before,
  a:hover span:after {
    width: calc( 180px / 2);
    height: calc( 50px / 2);
  }

  .enemy-hand {
    transform: translate(0%, 6%);
  }

  .player-hand {
    transform: translate(0%, 12%);
  }
</style>