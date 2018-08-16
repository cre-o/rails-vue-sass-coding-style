<template>
  <a href="javascript:void(0)" id="v-to-top" v-on:click="toTop()">вверх</a>
</template>

<script>
  export default {
    data: () => ({
    }),
    methods: {
      toTop: function () {
        var scrollStep = -window.scrollY / (500 / 15),
          scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval);
        }, 15);
      }
    },
  }
</script>
