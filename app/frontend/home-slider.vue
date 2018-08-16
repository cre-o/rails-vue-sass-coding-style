<template>
  <carousel-3d :disable3d="true" :border="0" :controlsPrevHtml="'&nbsp'" :controlsNextHtml="'&nbsp'":height="650" :width="1170" :clickable="true" :controls-visible="true" :animationSpeed="1000">
    <slide :index="0">
      <img src="~images/slider/home-slider-1.jpg">
      <div class="text">
        <span class="subtitle"> Студия </span>
        <span class="title"> Dизайна </span>
      </div>
    </slide>
    <slide :index="1">
      <img src="~images/slider/home-slider-2.jpg">
      <div class="text">
        <span class="subtitle"> Студия </span>
        <span class="title"> Dизайна </span>
      </div>
    </slide>
    <slide :index="2">
      <img src="~images/slider/home-slider-3.jpg">
      <div class="text">
        <span class="subtitle"> Студия </span>
        <span class="title"> Dизайна </span>
      </div>
    </slide>
    <slide :index="3">
      <img src="~images/slider/home-slider-1.jpg">
      <div class="text">
        <span class="subtitle"> Студия </span>
        <span class="title"> Dизайна </span>
      </div>
    </slide>
    <slide :index="4">
      <img src="~images/slider/home-slider-3.jpg">
      <div class="text">
        <span class="subtitle"> Студия </span>
        <span class="title"> Dизайна </span>
      </div>
    </slide>
  </carousel-3d>
</template>

<script>
  export default {
    data: () => ({
    })
  }
  import 'images/slider/home-slider-1.jpg'
  import 'images/slider/home-slider-2.jpg'
  import 'images/slider/home-slider-3.jpg'
</script>
