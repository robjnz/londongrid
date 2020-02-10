<template>
<b-card bg-variant="dark" text-variant="white" title= "X men Dark Phoenix 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/whoVmwVKYJE"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
      Jean Grey, as she evolves into the iconic dark phoenix. During a life-threatening rescue mission in space, Jean is hit by a cosmic force that transforms her into one of the most powerful mutants of all. Wrestling with this increasingly unstable power as well as her own personal demons, Jean spirals out of control, tearing the Xmendark family apart and threatening to destroy the very fabric of our planet.    </p>
    <b-button block href="/Movies/Xmendark" target="_blank" variant="info">X men Showing This Week &rArr;</b-button>





  <h4 class="title-color"></h4>
  <b-button-group>
    <XmendarkR />
    <Nineteen />
  </b-button-group>

</b-card>
</template>

<style>


</style>

<script>




import XmendarkR from '@/components/Films/Xmendark/XmendarkR'
import Nineteen from '@/components/Films/Year/Nineteen'






export default {
  components: {
    XmendarkR,
    Nineteen,

      }
}
</script>



