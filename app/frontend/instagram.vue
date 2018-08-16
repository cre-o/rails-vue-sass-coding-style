<template>
  <div class="grid-x grid-margin-x small-up-3 medium-up-6">
    <div class="cell" v-for="(n, index) in imageList" :data-index="index">
      <img @click="open($event)" :src="n.url">
    </div>
  </div>
</template>

<script>
  import fancyBox from 'vue-fancybox'

  export default {
  data () {
    return {
      imageList: [
        { width: 113, height: 113, url: require('images/instagram/1.png') },
        { width: 113, height: 113, url: require('images/instagram/2.png') },
        { width: 113, height: 113, url: require('images/instagram/3.png') },
        { width: 113, height: 113, url: require('images/instagram/4.png') },
        { width: 113, height: 113, url: require('images/instagram/5.png') },
        { width: 113, height: 113, url: require('images/instagram/6.png') },
      ]
    }
  },
  methods: {
    open (e) {
      fancyBox(e.target, this.imageList);
    }
  }
}
</script>
