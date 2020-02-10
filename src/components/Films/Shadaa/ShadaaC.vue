<template>
<b-card bg-variant="dark" text-variant="white" title= "Shadaa PG">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/ti94DXKnmkE"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
        Amidst pressures from his parents to hurry up and wed, a young man seeks his perfect match. After many failed attempts with matchmakers, his parents are delighted when their son finally meets the woman of his dreams, but things do not go as planned.    </p>
    <b-button block href="/Movies/Shadaa" target="_blank" variant="info">Shadaa Showing This Week &rArr;</b-button>





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



