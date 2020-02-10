<template>
<b-card bg-variant="dark" text-variant="white" title= "Kabir Singh 15 ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/RiANSSgCuJk"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
      A house surgeon goes into a self-destructive spiral after his girlfriend is forced to marry another man.
    </p>
    <b-button block href="/Movies/Kabir" target="_blank" variant="info">Kabir Showing This Week &rArr;</b-button>





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



