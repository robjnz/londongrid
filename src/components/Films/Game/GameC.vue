<template>
<b-card bg-variant="dark" text-variant="white" title= "Game Over 18">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/JUswBxwJvaQ"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
    As the news of a serial killer on the loose sends the city into a tailspin, a young woman suffering from PTSD starts sensing a strange presence around her. Is there a dreadful fate awaiting her?

    </p>
      <b-button block href="/Movies/Game" target="_blank" variant="info">Game Showing This Week &rArr;</b-button>





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



