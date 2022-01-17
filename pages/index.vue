<template>
  <div>
    <div v-on:click="_draw()" class="card-dummy">
      <img width="140" height="210" :src="`/images/cat_back_type_${this.numberList[0] > 6 ? 'large' : 'small'}.png`">
    </div>
    <div v-if="this.currentLift > 0">
      <cat-card v-bind:cat-count="this.numberList[0]" type="left"></cat-card>
      <cat-card v-bind:cat-count="this.numberList[1]" type="right"></cat-card>
    </div>
    <div class="cat-dice-container"></div>
    <button v-on:click="drawDice()">주사위던지기</button>
  </div>
</template>

<style scoped>
  .card-dummy {
    display: inline-block;
  }
</style>

<script>
import Vue from 'vue'
import CatCard from '../components/CatCard.vue'
import CatDice from '../components/CatDice.vue'
import { mapMutations } from 'vuex'

export default {
  components: { CatCard, CatDice },
  name: 'IndexPage',
  data() {
    return {
      drawCnt: 9,
      numberList: [],
      diceList: []
    }
  },
  computed: {
    currentLift () {
      return this.$store.state.lift
    },
    cardIsExist () {
      return this.$store.state.cardIsExist;
    }
  },
  mounted() {
    this._setNumberList();
    this._setDices();
  },
  methods: {
    drawDice() {
      this.diceList.forEach((dice) => {
        const number = dice.throwDice();
        console.log(number);
      });
    },
    _setNumberList() {
      this.numberList = [
        2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11
      ];
      this._shuffle();
    },
    _setDices() {
      for(let i = 0; i < 4; i += 1) {
        const catDice = Vue.extend(CatDice);
        const cat_dice = new catDice();
        cat_dice.$mount('.cat-dice-container');
        this.diceList.push(cat_dice);
      }
    },
    _shuffle() {
      this.numberList.sort(() => Math.random() - 0.5);
    },
    _draw() {
      if (!this.cardIsExist) {
        this.numberList.splice(0, 2);
        this.incrementLift();
        this.setCardIsExist(true);
      }
    },
    ...mapMutations({
      incrementLift: 'incrementLift',
      setCardIsExist: 'setCardIsExist'
    })
  }
}
</script>
