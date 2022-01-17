<template>
    <div class="cat-dice-container"></div>
</template>

<style>
    div.cat-dice-container {
        display: inline-block;
    }
</style>
<script>
export default {
  name: 'CatDice',
  data() {
      return {
          numberList: [1, 2, 3, 4, 5, 6],
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
