<template>
<b-card bg-variant="dark" text-variant="white" title= "Aladdin PG ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/foyufD52aog"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
      Young Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie.
    </p>
    <b-button block href="/Movies/Aladdin" target="_blank" variant="info">Aladdin Showing This Week &rArr;</b-button>
    




  <h4 class="title-color"></h4>
  <b-button-group>
    <AladdinR />
    <AladdinF />
    <Nineteen />
  </b-button-group>

</b-card>
</template>

<style>


</style>

<script>




import AladdinR from '@/components/Films/Aladdin/AladdinR'
import AladdinF from '@/components/Films/Aladdin/AladdinF'
import Nineteen from '@/components/Films/Year/Nineteen'
import Today from '@/components/Films/Aladdin/Today'






export default {
  components: {
    AladdinR,
    AladdinF,
    Nineteen,
    Today,
    
      }
}
</script>



