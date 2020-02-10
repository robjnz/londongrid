<template>
<b-card bg-variant="dark" text-variant="white" title= "Dastaan-E-Miri Piri 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/Gqo6_GP4vZQ"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
      Dastaan-E-Miri Piri unfolds the chapters of the Sikh history and conveys the history and teachings of Guru Hargobind Sahib Ji to the people through animation.    </p>
    <b-button block href="/Movies/Dastaan" target="_blank" variant="info">Dastaan Showing This Week &rArr;</b-button>





  <h4 class="title-color"></h4>
  <b-button-group>
    <Nineteen />
  </b-button-group>

</b-card>
</template>

<style>


</style>

<script>


import Nineteen from '@/components/Films/Year/Nineteen'






export default {
  components: {
    Nineteen,

      }
}
</script>



