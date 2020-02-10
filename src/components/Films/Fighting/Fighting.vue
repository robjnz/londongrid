<template>
<b-card bg-variant="dark" text-variant="white" title= "Fighting With My Family 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/I-X5WnMzOvA"
          allowfullscreen
  ></b-embed>

  <h4 class="title-color"></h4>
  <b-button-group>
  <FightingR />
  <FightingF />
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
import FightingR from '@/components/Films/Fighting/FightingR'
import FightingF from '@/components/Films/Fighting/FightingF'
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
    FightingR,
    FightingF,
    Nineteen,
      }
}
</script>



