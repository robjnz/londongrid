<template>
<b-card bg-variant="dark" text-variant="white" title= "Ma 15 ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/3NKDf71jy1I"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
      A lonely middle-aged woman befriends some teenagers and decides to let them party in the basement of her home. But there are some house rules. Ma's hospitality starts to curdle into obsession, what began as a teenage dream turns into a terrorizing nightmare. 
    </p>
    <b-button block href="/Movies/Ma" target="_blank" variant="info">Ma Showing This Week &rArr;</b-button>





  <h4 class="title-color"></h4>
  <b-button-group>
    <MaR />
    <Nineteen />
  </b-button-group>

</b-card>
</template>

<style>


</style>

<script>




import MaR from '@/components/Films/Ma/MaR'
import MaF from '@/components/Films/Ma/MaF'
import Nineteen from '@/components/Films/Year/Nineteen'






export default {
  components: {
    MaR,
    MaF,
    Nineteen,

      }
}
</script>



