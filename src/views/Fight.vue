<template>
  <div class="world">
    <div v-if="!game.id">
      <StartGame/>
    </div>
    <div v-else>
      <battlefield></battlefield>
    </div>

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
    height: 100%;
  }
</style>