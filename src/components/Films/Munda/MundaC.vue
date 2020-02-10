<template>
<b-card bg-variant="dark" text-variant="white" title= "Munda Faridkotia  PG">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/fJhqiYn2A40"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
    </p>
    <b-button block href="/Movies/Munda" target="_blank" variant="info">Munda Showing This Week &rArr;</b-button>





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



