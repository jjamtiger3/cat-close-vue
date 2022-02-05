<template>
  <div>
    <div v-on:click="_draw()" class="card-dummy">
      <img width="140" height="210" :src="`/images/cat_back_type_${this.numberList[0] > 6 ? 'large' : 'small'}.png`">
    </div>
    <div v-if="this.currentLift > 0">
      <cat-card v-bind:cat-count="this.numberList[0]" type="left"></cat-card>
      <cat-card v-bind:cat-count="this.numberList[1]" type="right"></cat-card>
    </div>
    <div class="cat-dice-container">
      <!-- 
        주사위에 필요한 속성
        1. displayedMarking: 표시할 주사위 눈금
        2. rolling: 주사위가 굴러가는 상태
        3. reselected: 다시 굴리기를 해야할 때 필요한 선택됨 상태
        
        주사위에 필요한 method
        1. drawDice: 주사위를 던짐
        2. reselect: 주사위를 다시 선택함

        주사위를 위한 store가 필요할것같음
        1. dices: Array<CatDice>: 주사위들을 저장한 객체
        2. 각 dice에서 주사위의 속성상태를 제어함
       -->
       <div class="row align-self-center justify-content-center">
         <cat-dice ref="cat-dice1"></cat-dice>
         <cat-dice ref="cat-dice2"></cat-dice>
         <cat-dice ref="cat-dice3"></cat-dice>
         <cat-dice ref="cat-dice4"></cat-dice>
       </div>
    </div>
    <button id="roll" v-on:click="drawDice()">주사위던지기</button>
  </div>
</template>

<style scoped>
  .cat-dice-container {
    width: 50%;
  }
  .card-dummy {
    display: inline-block;
  }
</style>

<script>
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
  },
  methods: {
    drawDice() {
      // 카드가 세팅됐을때만 주사위가 굴러가도록 해야함
      for(var i in this.$refs) {
        var dice = this.$refs[i];
        dice.throwDice();
      }
    },
    _setNumberList() {
      this.numberList = [
        2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11
      ];
      this._shuffle();
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
