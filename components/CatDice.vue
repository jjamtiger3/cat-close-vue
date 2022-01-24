<template>
    <div class="cat-dice">
        <div class="dice-face dice-face-front">1</div>
        <div class="dice-face dice-face-back">2</div>
        <div class="dice-face dice-face-right">3</div>
        <div class="dice-face dice-face-left">4</div>
        <div class="dice-face dice-face-top">5</div>
        <div class="dice-face dice-face-bottom">6</div>
    </div>
</template>

<style>
    div.cat-dice {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: 1s;
    }
</style>
<script>
export default {
  name: 'CatDice',
  data() {
      return {
          numberList: [1, 2, 3, 4, 5, 6],
          displayedMarking: 1,
          rolling: false,
          reSelected: false
      }
  },
  methods: {
      throwDice() {
          return Math.floor(6 * Math.random()) + 1;
      }
  },
  mounted() {
  }
}
</script>
