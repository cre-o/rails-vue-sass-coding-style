<template>
  <carousel-3d :disable3d="true" :display="4" :border="0" controlsPrevHtml="'&nbsp'" :controlsNextHtml="'&nbsp'" :height="304" :width="224" :space="350" :clickable="true" :controls-visible="true" :animationSpeed="1000">
    <slide v-for="(n, index) in imageList"  :index="index" :data-index="index" :key="n.id">
      <img :src="n.url">
      <a class="info" @click="open($event)" rel="nofollow"></a>
    </slide>
  </carousel-3d>
</template>

<script>
  import fancyBox from 'vue-fancybox'

  export default {
    data () {
      return {
        imageList: [
          { width: 390, height: 240, url: require('images/diploma-item.jpg') },
          { width: 390, height: 240, url: require('images/diploma-item.jpg') },
          { width: 390, height: 240, url: require('images/diploma-item.jpg') },
          { width: 390, height: 240, url: require('images/diploma-item.jpg') }
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
