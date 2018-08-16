<template>
  <carousel-3d :disable3d="true" :display="1" :border="0"  :controlsPrevHtml="'&nbsp'" :controlsNextHtml="'&nbsp'" :height="500" :width="1024" :space="390" :clickable="true" :controls-visible="true" :animationSpeed="1000">
    <slide :index="0">
      <div class="grid-x">
        <div class="medium-6 cell b-video-cell">
          <div class="b-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OqL7jyrXhLs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
        <div class="medium-6 cell b-opinion-cell">
          <div class="b-opinion">
            <img class="avatar" src="~images/about/avatar_118x118.png" width="118px" height="118px" />
            <h5 class="b-leading-letter">
              <div class="__letter">D</div>
              <div class="id"><span class="name">Малаховы</span><span class="surname __blue">Артём и Наталья</span></div>
            </h5>
            <p> Дорогие наши и любимые девчонки! Спасибо вам огромное за все, что вы для нас сделали! Ремонт просто шикарный! Мы очень рады, что познакомились с вами! Надеемся на долгую и искреннюю дружбу!!! </p>
          </div>
        </div>
      </div>
    </slide>
    <slide :index="1">
      <div class="grid-x">
        <div class="medium-6 cell b-video-cell">
          <div class="b-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OqL7jyrXhLs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
        <div class="medium-6 cell b-opinion-cell">
          <div class="b-opinion">
            <img class="avatar" src="~images/about/avatar_118x118.png" width="118px" height="118px" />
            <h5 class="b-leading-letter">
              <div class="__letter">D</div>
              <div class="id"><span class="name">Филатов</span><span class="surname __blue">Игорь</span></div>
            </h5>
            <p> Работали вместе, будем ещё! Этот отзыв может быть больше чем прошлый.</p>
            <p> Несколько параграфов текста для отображения.</p>
            <p> И всё хорошо, да... Всё хорошо.</p>
          </div>
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
  import 'images/about/avatar_118x118.png'
</script>
