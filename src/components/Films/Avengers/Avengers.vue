<template>
<b-card bg-variant="dark" text-variant="white" title= "Avengers Endgame 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/7nN6KVAgwK4"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
      Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle, remaining Avengers must figure out a way to bring back their vanquished allies for an epic showdown with Thanos.
      </p>


  <h4 class="title-color"></h4>
  <b-button-group>
    <AvengersR />
    <AvengersF />
    <Nineteen />
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
import Pgreenwichbutton from '@/components/Picturehouses/Pgreenwichbutton'
import Phackneybutton from '@/components/Picturehouses/Phackneybutton'
import Pstratfordbutton from '@/components/Picturehouses/Pstratfordbutton'
import Newhambutton from '@/components/Showcase/Newhambutton'
import Romfordbutton from '@/components/Cinevue/Romfordbutton'
import Vstratford from '@/components/Cinevue/Vstratford'
import AvengersR from '@/components/Films/Avengers/AvengersR'
import AvengersF from '@/components/Films/Avengers/AvengersF'
import Nineteen from '@/components/Films/Year/Nineteen'




export default {
  components: {
    Bexleyheathbutton,
    Greenwichbutton,
    Ilfordbutton,
    Westbutton,
    Ogreenwichbutton,
    Osouthbutton,
    Pgreenwichbutton,
    Phackneybutton,
    Pstratfordbutton,
    Newhambutton,
    Romfordbutton,
    Vstratford,
    AvengersR,
    AvengersF,
    Nineteen,

      }
}
</script>



