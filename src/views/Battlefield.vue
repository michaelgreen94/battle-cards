<template>
  <div class="battlefield">
    <Enemy/>
    <Player/>
    <button @click="surrender">I Quit</button>
  </div>
</template>

<script>
  import Enemy from "@/components/Enemy"
  import Player from "@/components/Player"

  export default {
    name: 'Battlefield',
    computed: {

    },
    methods: {
      surrender() {
        this.$router.push('/')
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