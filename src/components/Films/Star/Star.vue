<template>
<b-card bg-variant="dark" text-variant="white" title= "A Star is Born 15">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/nSbzyEJ8X9E"
          allowfullscreen
  ></b-embed>
  <p class="title-color">
        Musician Jackson Maine discovers and falls in love with struggling artist Ally.
    </p>

  <h4 class="title-color"></h4>
  <b-button-group>
  <StarR />
  <StarF />
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
import Pgreenwichbutton from '@/components/Picturehouses/Pgreenwichbutton'
import Phackneybutton from '@/components/Picturehouses/Phackneybutton'
import Pstratfordbutton from '@/components/Picturehouses/Pstratfordbutton'
import Newhambutton from '@/components/Showcase/Newhambutton'
import Romfordbutton from '@/components/Cinevue/Romfordbutton'
import Vstratford from '@/components/Cinevue/Vstratford'
import StarR from '@/components/Films/Star/StarR'
import StarF from '@/components/Films/Star/StarF'
import Eighteen from '@/components/Films/Year/Eighteen'





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
    StarR,
    StarF,
    Eighteen,


      }
}
</script>



