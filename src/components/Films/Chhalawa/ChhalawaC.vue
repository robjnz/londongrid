<template>
<b-card bg-variant="dark" text-variant="white" title= "Chhalawa 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/bZdzMJH5110"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
      The film Chhalawa revolves around love, relationships and family.
    </p>
    <b-button block href="/Movies/Chhalawa" target="_blank" variant="info">Chhalawa Showing This Week &rArr;</b-button>





  <h4 class="title-color"></h4>
  <b-button-group>
    <ChhalawaR />
    <Nineteen />
  </b-button-group>

</b-card>
</template>

<style>


</style>

<script>




import ChhalawaR from '@/components/Films/Chhalawa/ChhalawaR'
import Nineteen from '@/components/Films/Year/Nineteen'






export default {
  components: {
    ChhalawaR,
    Nineteen,

      }
}
</script>



