<template>
  <div class="select-deck">
    <StartGame/>
  </div>
</template>

<script>
  import StartGame from "@/components/StartGame"

  export default {
    name: 'SelectDeck',
    computed: {

    },
    methods: {
      startGame() {
        this.$router.push('/Battlefield')
      }
    },
    components: {
      StartGame
    }
  }
</script>