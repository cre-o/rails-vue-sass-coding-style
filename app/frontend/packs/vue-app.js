import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d'
import HomeSlider from '../home-slider.vue'
import HomePortfolioSlider from '../home-portfolio-slider.vue'
import HomeWorksSlider from '../home-works-slider.vue'
import ProjectWorksSlider from '../project-works.vue'
import QuestionsAnswers from '../questions-answers.vue'
import TeamSlider from '../team-slider.vue'
import CertificatesSlider from '../certificates-slider.vue'
import MentionsSlider from '../mentions-slider.vue'
import ToTop from '../to-top.vue'
import Instagram from '../instagram.vue'
import MobileNav from '../mobile-nav.vue'

Vue.use(Carousel3d)

document.addEventListener('DOMContentLoaded', () => {

  if ( document.getElementById('l-home-page') ) {

    new Vue({
      components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide,
      },
      render: h => h(HomeSlider)
    }).$mount('#vue-home-slider')

    new Vue({
      components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide,
      },
      render: h => h(HomePortfolioSlider)
    }).$mount('#vue-home-portfolio-slider')

    new Vue({
      components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide,
      },
      render: h => h(HomeWorksSlider)
    }).$mount('#vue-home-works-slider')

    new Vue({
      render: h => h(QuestionsAnswers)
    }).$mount('#vue-questions-ansers')

  }

  if ( document.getElementById('l-project-page') ) {
    new Vue({
      components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide,
      },
      render: h => h(HomeSlider)
    }).$mount('#v-main-slider')

    new Vue({
      render: h => h(ProjectWorksSlider)
    }).$mount('#v-works-slider')
  }

  if ( document.getElementById('l-about-page') ) {
    new Vue({
      render: h => h(TeamSlider)
    }).$mount('#v-team-slider')

    new Vue({
      components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide,
      },
      render: h => h(CertificatesSlider)
    }).$mount('#v-certificates-slider')

    new Vue({
      components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide,
      },
      render: h => h(MentionsSlider)
    }).$mount('#v-mentions-slider')
  }


  new Vue({
    render: h => h(ToTop)
  }).$mount('#v-to-top')

  new Vue({
    render: h => h(Instagram)
  }).$mount('#v-instagram')


  new Vue({
    render: h => h(MobileNav)
  }).$mount('#v-mobile-nav')
})

// jQuery & foundation part of app
import jQuery from 'jquery';
import { Foundation } from 'foundation-sites/js/foundation.core.js'
// import { Keyboard } from 'foundation-sites/js/foundation.util.keyboard.js'
import { Triggers } from 'foundation-sites/js/foundation.util.triggers.js'
// import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery.js'
// import { Motion } from 'foundation-sites/js/foundation.util.motion.js'
import { Reveal } from 'foundation-sites/js/foundation.reveal.js'

Foundation.addToJquery(jQuery);
Triggers.init(jQuery, Foundation);
Foundation.plugin(Reveal, 'Reveal');


jQuery(document).ready(() => {
  jQuery(document).foundation();
})
