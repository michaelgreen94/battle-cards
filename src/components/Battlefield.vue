<template>
  <div class="battlefield">
    <div class="enemy-hand">
      <Enemy v-on:addParams="addParams" />
    </div>
    <div class="jungle">
      <a href="#" v-bind:class="{fight : attackObj.playerCardId && attackObj.opponentCardId}" @click.prevent="attack"><span></span>Fight</a>
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
      },
      player() {
        return this.$store.state.game.player
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

<style scoped>
  /* * {
    outline: 1px solid red;
  } */

  .jungle {
    min-height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:not(.fight) {
    visibility: hidden;
  }

  a {
    width: 11.25rem;
    height: 3.125rem;
  }

  .fight {
    /* position: absolute; */
    position: relative;
    display: block;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    background: #262626;
    text-transform: uppercase;
    text-align: center;
    line-height: 3.125rem;
    color: #ff0;
    text-decoration: none;
    font-size: 1.25rem;
    letter-spacing: 4px;
    /* margin: 1.25rem 0 1.25rem 0; */
    /* z-index: 1; */
  }

  .fight:before,
  .fight:after,
  .fight span:before,
  .fight span:after {
    content: '';
    position: absolute;
    width: 0.625rem;
    height: 0.625rem;
    background: #ff0;
    transition: 1s;
    mix-blend-mode: hue;
  }

  .fight:before {
    top: -2px;
    left: -2px;
  }

  .fight:after {
    top: -2px;
    right: -2px;
  }

  .fight span:before {
    bottom: -2px;
    left: -2px;
  }

  .fight span:after {
    bottom: -2px;
    right: -2px;
  }

  .fight:hover:before,
  .fight:hover:after,
  .fight:hover span:before,
  .fight:hover span:after {
    width: calc( 11.25rem / 2);
    height: calc( 3.125rem / 2);
  }

  .battlefield {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* .enemy-hand {
    transform: translate(0%, 6%);
  }

  .player-hand {
    transform: translate(0%, 12%);
  } */
</style>