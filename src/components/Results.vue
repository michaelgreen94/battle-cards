<template>
  <div class="results">
    <div v-if="game.players[1].dead" class="new">
      <h1 class="mess1">Voctory</h1>
      <a class="done" href="#" @click="reset"><span></span>New Game</a>
    </div>
    <div v-else class="new">
      <h1 class="mess2">You Lose</h1>
      <a class="done" href="#" @click="reset"><span></span>New Game</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Results',
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      reset() {
        this.$store.dispatch('reset')
      }
    }
  }
</script>

<style>
  .results {
    width: 100vw;
    height: 100vh;
  }

  .mess2 {
    color: red;
  }

  .mess1 {
    color: green;
  }

  .new {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    width: 11.25rem;
    height: 3.125rem;
  }

  .done {
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
    margin-left: 5rem;
  }

  .done:before,
  .done:after,
  .done span:before,
  .done span:after {
    content: '';
    position: absolute;
    width: 0.625rem;
    height: 0.625rem;
    background: #ff0;
    transition: 1s;
    mix-blend-mode: hue;
  }

  .done:before {
    top: -2px;
    left: -2px;
  }

  .done:after {
    top: -2px;
    right: -2px;
  }

  .done span:before {
    bottom: -2px;
    left: -2px;
  }

  .done span:after {
    bottom: -2px;
    right: -2px;
  }

  .done:hover:before,
  .done:hover:after,
  .done:hover span:before,
  .done:hover span:after {
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
</style>