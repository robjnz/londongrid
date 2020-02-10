<template>
<b-card bg-variant="dark" text-variant="white" title= "Bumblebee PG">
  <b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/lcwmDAYt22k"
          allowfullscreen
  ></b-embed>


  <h4 class="title-color"></h4>
  <b-button-group>
  <BumblebeeR />
  <BumblebeeF />
  <Eighteen />
  </b-button-group>
</b-card>
</template>

<script>
import Bexleyheathbutton from '@/components/Cineworld/Bexleyheathbutton'
import Greenwichbutton from '@/components/Cineworld/Greenwichbutton'
import Ilfordbutton from '@/components/Cineworld/Ilfordbutton'
import Westbutton from '@/components/Cineworld/Westbutton'
import Ogreenwichbutton from '@/components/Odeon/Ogreenwichbutton'
import Osouthbutton from '@/components/Odeon/Osouthbutton'
import Newhambutton from '@/components/Showcase/Newhambutton'
import Romfordbutton from '@/components/Cinevue/Romfordbutton'
import Vstratford from '@/components/Cinevue/Vstratford'
import BumblebeeR from '@/components/Films/Bumblebee/BumblebeeR'
import BumblebeeF from '@/components/Films/Bumblebee/BumblebeeF'
import Eighteen from '@/components/Films/Year/Eighteen'



export default {
  components: {
    Bexleyheathbutton,
    Greenwichbutton,
    Ilfordbutton,
    Westbutton,
    Ogreenwichbutton,
    Osouthbutton,
    Newhambutton,
    Romfordbutton,
    Vstratford,
    BumblebeeR,
    BumblebeeF,
    Eighteen,
      }
}
</script>



