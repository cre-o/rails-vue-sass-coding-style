<template>
  <carousel-3d :disable3d="true" :display="1" :border="0" :controlsPrevHtml="'&nbsp'" :controlsNextHtml="'&nbsp'" :height="549" :width="861" :clickable="false" :controls-visible="true" :animationSpeed="1000">
    <slide :index="0">
      <img src="~images/slider/home-portfolio-slide-1.jpg">
      <div class="info" :style="{ background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(${require('images/slider/home-portfolio-slide-1.jpg')}) no-repeat` }">
        <div class="square"> 118,7 м. кв. </div>
        <div class="title"> <span>Дизайн</span> <br> Интерьера КВАРТИРЫ </div>

        <div class="second">
          <div class="style">СТИЛЬ:</div>
          <div class="budget">БЮДЖЕТ:</div>
        </div>

        <div class="more __d right">
          <a class="button" href="site/project">Подробнее о проекте</a>
        </div>
      </div>
    </slide>
    <slide :index="1">
      <img src="~images/slider/home-portfolio-slide-2.jpg">
      <div class="info" :style="{ background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(${require('images/slider/home-portfolio-slide-2.jpg')}) no-repeat` }">
        <div class="square"> 120,7 м. кв. </div>
        <div class="title"> <span>Дизайн</span> <br> Интерьера КВАРТИРЫ </div>

        <div class="second">
          <div class="style">СТИЛЬ: стильный</div>
          <div class="budget">БЮДЖЕТ: бюджетный</div>
        </div>

        <div class="more __d right">
          <a class="button" href="site/project">Подробнее о проекте</a>
        </div>
      </div>
    </slide>
  </carousel-3d>
</template>

<script>
  export default {
    data: () => ({
    })
  }
  import 'images/slider/home-portfolio-slide-1.jpg'
  import 'images/slider/home-portfolio-slide-2.jpg'
</script>
