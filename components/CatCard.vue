<template>
    <div class="cat-card-container" :class="this.type" v-on:click="setFliped()" >
        <div class="cat-card-item front" v-if="this.fliped" :class="{'fliped': this.fliped}">
          <img width="140" height="210" :src="`/images/cat_${this.cats}.png`">
        </div>
        <div class="cat-card-item back" v-if="!this.fliped" :class="{'fliped': this.fliped}">
          <img width="140" height="210" :src="`/images/cat_back_type_${this.cats > 6 ? 'large' : 'small'}.png`" />
        </div>
    </div>
</template>

<style>
    div.cat-card-container {
        display: inline-block;
        width: 140px;
        height: 210px;
        perspective: 300px;
    }
    div.cat-card-container.left {
        transition: all 2s ease;
        transform: translateY(10px);
    }
    div.cat-card-container.right {
        transition: all 2s ease;
        transform: translate(10px, 10px);
    }
    div.cat-card-container div.cat-card-item {
        border: 1px solid #ff0000;
        width: 140px;
        height: 210px;
        transition: 1s;
        backface-visibility: hidden;
    }
    div.cat-card-container div.cat-card-item.front {
        transform: rotateY(360deg);
    }
    div.cat-card-container div.cat-card-item.front img.front-image {
        width: 140px;
        height: 210px;
        display: inline-block;
    }
    div.cat-card-container div.cat-card-item.back {
        position: absolute;
        transform: rotateY(0deg);
    }
    div.cat-card-container div.cat-card-item.back.fliped {
        transform: rotateY(180deg);
    }
</style>
<script>
export default {
  name: 'CatCard',
  props: [
      'catCount',
      'type'
  ],
  data() {
      return {
        cats: this.catCount,
        fliped: false
      }
  },
  methods: {
      setFliped() {
        this.fliped = true;
      }
  },
  mounted() {
      console.log(this.cats)
      this.fliped = false;
  }
}
</script>
