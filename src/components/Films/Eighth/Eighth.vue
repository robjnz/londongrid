<template>
<b-card bg-variant="dark" text-variant="white" title= "Eighth Grade 15 ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/e9CIefk3eH0"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
      Thirteen-year-old Kayla endures the tidal wave of contemporary suburban adolescence as she makes her way through the last week of middle school.
    </p>

  <h4 class="title-color"></h4>
  <b-button-group>
    <EighthR />
    <EighthF />
    <Eighteen />
  </b-button-group>

</b-card>
</template>

<script>
import EighthR from '@/components/Films/Eighth/EighthR'
import EighthF from '@/components/Films/Eighth/EighthF'
import Eighteen from '@/components/Films/Year/Eighteen'




export default {
  components: {
    EighthR,
    EighthF,
    Eighteen,

      }
}
</script>



