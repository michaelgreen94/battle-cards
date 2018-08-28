<template>
  <div class="select">
    <Player/>
    <Enemy/>
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

    },
    components: {
      Enemy,
      Player
    }
  }
</script>

<style>
  * {
    outline: 1px solid red;
  }
</style>