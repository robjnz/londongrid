<template>
<b-card bg-variant="dark" text-variant="white" title= "Preview 2019 Movies">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/MM9FrlK4BVk"
          allowfullscreen
  ></b-embed>

<h4 class="title-color">Top 10 Biggest Movies Coming Out In 2019</h4>
<b-button-group>
<!--<Bexleyheathbutton />-->
<!--<greenwichbutton/>-->
</b-button-group>
<br><br>
<b-button-group>
<!--<Ilfordbutton />-->
<!--<Westbutton />-->
</b-button-group>
</b-card>
</template>

<script>
import Bexleyheathbutton from '@/components/Cineworld/Bexleyheathbutton'
import Greenwichbutton from '@/components/Cineworld/Greenwichbutton'
import Ilfordbutton from '@/components/Cineworld/Ilfordbutton'
import Westbutton from '@/components/Cineworld/Westbutton'

export default {
  components: {
    Bexleyheathbutton,
    Greenwichbutton,
    Ilfordbutton,
    Westbutton,

      }
}
</script>



