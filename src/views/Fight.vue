<template>
  <div class="world">
    <StartGame v-if="!game.id" />
    <battlefield v-else></battlefield>
  </div>
</template>

<script>
  import StartGame from "@/components/StartGame"
  import Battlefield from "@/components/Battlefield"
  export default {
    name: 'Fight',
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    methods: {

    },
    components: {
      StartGame,
      Battlefield
    }
  }
</script>

<style>
  .world {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

  }
</style>