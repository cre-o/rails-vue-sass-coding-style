<template>
  <carousel-3d :disable3d="true" :border="0" :controlsPrevHtml="'&nbsp'" :controlsNextHtml="'&nbsp'" :height="240" :width="390" :space="390" :clickable="true" :controls-visible="true" :animationSpeed="1000">
    <slide v-for="(n, index) in imageList"  :index="index" :data-index="index" :key="n.id">
      <img @click="open($event)" :src="n.url">
    </slide>
  </carousel-3d>
</template>

<script>
  import fancyBox from 'vue-fancybox'

  export default {
    data () {
      return {
        imageList: [
          { width: 390, height: 240, url: require('images/slider/home-works-slide-1.jpg') },
          { width: 390, height: 240, url: require('images/slider/home-works-slide-2.jpg') },
          { width: 390, height: 240, url: require('images/slider/home-works-slide-3.jpg') },
          { width: 390, height: 240, url: require('images/slider/home-works-slide-1.jpg') },
          { width: 390, height: 240, url: require('images/slider/home-works-slide-2.jpg') },
          { width: 390, height: 240, url: require('images/slider/home-works-slide-3.jpg') },
        ]
      }
    },
    methods: {
      open (e) {
        fancyBox(e.target, this.imageList)
      }
    }
  }
</script>
