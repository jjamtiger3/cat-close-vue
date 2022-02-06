<template>
    <div class="scene">
      <div class="cube">
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
                <span class="dot dot-1 m-2"></span>
                <span class="dot dot-2 m-2"></span>
            </div>
            <div class="w-100 align-self-center d-flex justify-content-center">
                <span class="dot"></span>
            </div>
            <div class="w-100 align-self-end d-flex justify-content-between">
                <span class="dot m-2"></span>
                <span class="dot m-2"></span>
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
          // this.setSpinning(true);
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
