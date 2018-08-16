<template>
  <carousel-3d :disable3d="true" :display="3" :border="0" :controlsPrevHtml="'&nbsp'" :controlsNextHtml="'&nbsp'" :height="240" :width="390" :space="390" :clickable="true" :controls-visible="true" :animationSpeed="1000">
    <slide :index="0">
      <img src="~images/slider/home-works-slide-2.jpg">
      <a class="info" href="site/project">
        <div class="style"> Стиль: <br> 118,7 м. кв. </div>
        <div class="title"> <span>Дизайн</span> <br> Интерьера частного дома</div>
      </a>
    </slide>
    <slide :index="1">
      <img src="~images/slider/home-works-slide-3.jpg">
      <a class="info" href="site/project">
        <div class="style"> Стиль: <br> 118,7 м. кв. </div>
        <div class="title"> <span>Дизайн</span> <br> Интерьера частного дома</div>
      </a>
    </slide>
    <slide :index="2">
      <img src="~images/slider/home-works-slide-1.jpg">
      <a class="info" href="site/project">
        <div class="style"> Стиль: <br> 118,7 м. кв. </div>
        <div class="title"> <span>Дизайн</span>v <br> Интерьера частного дома</div>
      </a>
    </slide>
    <slide :index="3">
      <img src="~images/slider/home-works-slide-1.jpg">
      <a class="info" href="site/project">
        <div class="style"> Стиль: <br> 118,7 м. кв. </div>
        <div class="title"> <span>Дизайн</span>v <br> Интерьера частного дома</div>
      </a>
    </slide>
  </carousel-3d>
</template>

<script>
  export default {
    data: () => ({
    })
  }
  import 'images/slider/home-works-slide-1.jpg'
  import 'images/slider/home-works-slide-2.jpg'
  import 'images/slider/home-works-slide-3.jpg'
</script>
