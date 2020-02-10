<template>
<b-card bg-variant="dark" text-variant="white" title= "Yesterday 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/6uqvgPm8U4c"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
        Jack Malik is a struggling singer-songwriter in an English seaside town whose dreams of fame are rapidly fading, despite the fierce devotion and support of his childhood best friend, Ellie. After a freak bus accident during a mysterious global blackout, Jack wakes up to discover that The Beatles have never existed. Performing songs by the greatest band in history to a world that has never heard them, Jack becomes on overnight sensation with a little help from his agent.    </p>
    <b-button block href="/Movies/Yesterday" target="_blank" variant="info">Yesterday Showing This Week &rArr;</b-button>





  <h4 class="title-color"></h4>
  <b-button-group>
    <YesterdayR />
    <Nineteen />
  </b-button-group>

</b-card>
</template>

<style>


</style>

<script>




import YesterdayR from '@/components/Films/Yesterday/YesterdayR'
import Nineteen from '@/components/Films/Year/Nineteen'






export default {
  components: {
    YesterdayR,
    Nineteen,

      }
}
</script>



