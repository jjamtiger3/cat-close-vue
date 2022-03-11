<template>
    <div class="scene">
      <div class="cube" ref="cube">
        <div class="cube__face cube__face--front">
            <span class="dot dot-1 align-self-center"></span>
        </div>
        <div class="cube__face cube__face--back">
            <span class="dot dot-1 align-self-start m-2"></span>
            <span class="dot dot-2 align-self-end m-2"></span>
        </div>
        <div class="cube__face cube__face--right">
            <span class="dot align-self-start m-2"></span>
            <span class="dot align-self-center"></span>
            <span class="dot align-self-end m-2"></span>
        </div>
        <div class="cube__face cube__face--left">
            <div class="w-100 align-self-start d-flex justify-content-between">
                <span class="dot m-2"></span>
                <span class="dot m-2"></span>
            </div>
            <div class="w-100 align-self-end d-flex justify-content-between">
                <span class="dot m-2"></span>
                <span class="dot m-2"></span>
            </div>
        </div>
        <div class="cube__face cube__face--top">
            <div class="w-100 align-self-start d-flex justify-content-between">
                <span class="dot dot-1 m-2 half"></span>
                <span class="dot dot-2 m-2 half"></span>
            </div>
            <div class="w-100 align-self-center d-flex justify-content-center">
                <span class="dot m-2 half"></span>
            </div>
            <div class="w-100 align-self-end d-flex justify-content-between">
                <span class="dot m-2 half"></span>
                <span class="dot m-2 half"></span>
            </div>
        </div>
        <div class="cube__face cube__face--bottom">
            <div class="w-50 d-flex flex-column">
                <span class="dot align-self-start m-auto"></span>
                <span class="dot align-self-center m-auto"></span>
                <span class="dot align-self-bottom m-auto"></span>
            </div>
            <div class="w-50 d-flex flex-column">
                <span class="dot align-self-start m-auto"></span>
                <span class="dot align-self-center m-auto"></span>
                <span class="dot align-self-bottom m-auto"></span>
            </div>
        </div>
      </div>
    </div>
</template>

<style>
@import "@/assets/css/dice-style.css";
</style>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CatDice',
  methods: {
    throwDice() {
      const cube = this.$refs.cube;
      cube.classList = [];
      cube.classList.add('cube');
      cube.classList.add('cube-roll');
      setTimeout((_cube) => {
        const className = this.randomNumber();
        _cube.classList.remove('cube-roll');
        _cube.classList.add(className);
        this.$store.className = className;
      }, 100, cube);
    },
    randomNumber() {
        return `face-${Math.floor(Math.random() * 6) + 1}`;
      },
      ...mapMutations({
        setSpinning: 'setSpinning',
        setReSelected: 'setReSelected'
      })
  },
  mounted() {
  }
}
</script>
