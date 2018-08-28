<template>
  <div class="start">
    <h3>Whats your name Traveler?</h3>
    <form @submit.prevent=addName>
      <input type="text" placeholder="Your name here">
      <input type="number" placeholder="1-4" min="0" max="4">
    </form>
    <button @click="startGame">Start Game</button>
  </div>
</template>

<script>
  export default {
    name: 'StartGame',
    data() {
      return {}
    }
  }
</script>