<template>
<b-card bg-variant="dark" text-variant="white" title= "Bharat 12A ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/Ea_GKoe81GY"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
      An 8-year-old boy makes a vow to his father that he will keep his family together no matter what, a promise that he works to keep over the next 60 years of his life.    </p>
    <b-button block href="/Movies/Bharat" target="_blank" variant="info">Bharat Showing This Week &rArr;</b-button>





  <h4 class="title-color"></h4>
  <b-button-group>
    <BharatR />
    <Nineteen />
  </b-button-group>

</b-card>
</template>

<style>


</style>

<script>




import BharatR from '@/components/Films/Asian/Bharat/BharatR'
import Nineteen from '@/components/Films/Year/Nineteen'






export default {
  components: {
    BharatR,
    Nineteen,

      }
}
</script>



