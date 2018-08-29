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
    data() {
      return {
        attackObj: {}
      }
    },
    computed: {

    },
    methods: {
      eAttack(key) {
        debugger
        attackObj.enemy.id
        attackObj.enemy.hand[key].id
        this.$store.dispatch("attack", this.attackObj)
        debugger
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