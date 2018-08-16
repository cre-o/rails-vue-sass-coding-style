<template>
  <div>
    <a class="mobile-nav show-for-small-only" href="javascript:void(0)" v-on:click="toggleNavigation"></a>
  </div>
</template>

<script>
  export default {
      data: () =>  ({
        isActive: false,
        error: null
      }),
      computed: {
        classObject: function () {
          return {
            isMobile: this.isActive && !this.error
          }
        }
      },
      methods: {
        toggleNavigation () {
          this.isActive = this.isActive == true ? false : true
          const el = document.getElementById('main-nav')

          if (this.isActive) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        }
      }
  }
</script>
