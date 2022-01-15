<template>
  <div>
    <div v-on:click="_draw()" class="card-dummy">
      <img width="140" height="210" :src="`/images/cat_back_type_${this.numberList[0] > 6 ? 'large' : 'small'}.png`">
    </div>
    <div v-if="this.currentLift > 0">
      <cat-card v-bind:cat-count="this.numberList[0]" type="left"></cat-card>
      <cat-card v-bind:cat-count="this.numberList[1]" type="right"></cat-card>
    </div>
  </div>
</template>

<style scoped>
  .card-dummy {
    display: inline-block;
  }
</style>

<script>
import CatCard from '../components/CatCard.vue'
import { mapMutations } from 'vuex'

export default {
  components: { CatCard },
  name: 'IndexPage',
  data() {
    return {
      drawCnt: 9,
      numberList: []
    }
  },
  computed: {
    currentLift () {
      return this.$store.state.lift
    }
  },
  mounted() {
    this._setNumberList();
  },
  methods: {
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
      this.numberList.splice(0, 2);
      this.incrementLift();
    },
    ...mapMutations({
      incrementLift: 'incrementLift'
    })
  }
}
</script>
