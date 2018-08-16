<template>
<div>
<div class="grid-x medium-up-4 b-team-photos">
  <div class="cell" v-bind:class="{ 'active' : isActive(0) }">
    <div class="grid-y">
      <div class="cell">
        <img src="~images/team/1.jpg" alt="">
      </div>
      <div class="cell">
        <div class="default hide-for-small" v-show="currentIndex != 0">
          <img src="~images/team/1.jpg" alt="">
        </div>

        <div class="info show-for-small" v-show="currentIndex == 0">
        <p>Если слова «атмосфера дома» и «уникальность идеи» для вас не пустой звук! Если дизайн интерьера в вашем понимании это не просто «бежевые обои» и ламинат!</p>
        <h5 class="b-leading-letter">
          <div class="__letter">А</div>
          <div class="id"><span class="name">Антон</span><span class="surname __blue">Душин</span></div>
        </h5>
        </div>
      </div>
    </div>
  </div>
  <div class="cell" v-bind:class="{ 'active' : isActive(1) }">
    <div class="grid-y">
      <div class="cell"><img src="~images/team/2.jpg" alt=""></div>
      <div class="cell">
        <div class="default hide-for-small-only" v-show="currentIndex != 1">
          <img src="~images/team/2.jpg" alt="">
        </div>

        <div class="info show-for-small" v-show="currentIndex == 1">
        <p>Если слова «атмосфера дома» и «уникальность идеи» для вас не пустой звук! Если дизайн интерьера в вашем понимании это не просто «бежевые обои» и ламинат!</p>
        <h5 class="b-leading-letter">
          <div class="__letter">М</div>
          <div class="id"><span class="name">Мария</span><span class="surname __blue">Шелковая</span></div>
        </h5>
        </div>
      </div>
    </div>
  </div>
  <div class="cell" v-bind:class="{ 'active' : isActive(2) }">
    <div class="grid-y">
      <div class="cell"><img src="~images/team/1.jpg" alt=""></div>
      <div class="cell">
        <div class="default hide-for-small-only" v-show="currentIndex != 2">
          <img src="~images/team/1.jpg" alt="">
        </div>

        <div class="info show-for-small" v-show="currentIndex == 2">
        <p>Если слова «атмосфера дома» и «уникальность идеи» для вас не пустой звук! Если дизайн интерьера в вашем понимании это не просто «бежевые обои» и ламинат!</p>
        <h5 class="b-leading-letter">
          <div class="__letter">Г</div>
          <div class="id"><span class="name">Геннадий</span><span class="surname __blue">Степанов</span></div>
        </h5>
        </div>
      </div>
    </div>
  </div>
  <div class="cell" v-bind:class="{ 'active' : isActive(3) }">
    <div class="grid-y">
      <div class="cell"><img src="~images/team/2.jpg" alt=""></div>
      <div class="cell">
        <div class="default hide-for-small-only" v-show="currentIndex != 3">
          <img src="~images/team/2.jpg" alt="">
        </div>

        <div class="info show-for-small" v-show="currentIndex == 3">
        <p>Если слова «атмосфера дома» и «уникальность идеи» для вас не пустой звук! Если дизайн интерьера в вашем понимании это не просто «бежевые обои» и ламинат!</p>
        <h5 class="b-leading-letter">
          <div class="__letter">В</div>
          <div class="id"><span class="name">Вика</span><span class="surname __blue">Лучика</span></div>
        </h5>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="grid-x align-center">
  <div class="small-1 cell b-team-navigate hide-for-small-only">
    <span class="prev" @click="goBack()">&nbsp;</span>
    <span class="next" @click="goForward()">&nbsp;</span>
  </div>
</div>
</div>
</template>

<script>
  export default {
    data: () => ({
      currentIndex: 0
    }),
    methods: {
      goBack: function () {
        this.currentIndex--
        this.clean();
      },
      goForward: function () {
        this.currentIndex++
        this.clean();
      },
      isActive: function (index) {
        return this.currentIndex == index
      },
      clean: function () {
        if (this.currentIndex >= 4) {
          return this.currentIndex = 0
        }
        if (this.currentIndex <= -1) {
          return this.currentIndex = 3;
        }
      }
    }
  }
  import 'images/team/1.jpg'
  import 'images/team/2.jpg'
</script>
