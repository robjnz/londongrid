<template>
<b-card bg-variant="dark" text-variant="white" title= "Rocketman 15">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/S3vO8E2e6G0"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
      An epic musical fantasy about the uncensored human story of Sir Elton John’s breakthrough years.
    </p>
    <b-button block href="/Movies/Rocketman" target="_blank" variant="info">Rocketman Showing This Week &rArr;</b-button>





  <h4 class="title-color"></h4>
  <b-button-group>
    <RocketmanR />
    <RocketmanF />
    <Nineteen />
  </b-button-group>

</b-card>
</template>

<style>


</style>

<script>




import RocketmanR from '@/components/Films/Rocketman/RocketmanR'
import RocketmanF from '@/components/Films/Rocketman/RocketmanF'
import Nineteen from '@/components/Films/Year/Nineteen'






export default {
  components: {
    RocketmanR,
    RocketmanF,
    Nineteen,

      }
}
</script>



