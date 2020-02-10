<template>
<b-card bg-variant="dark" text-variant="white" title= "How to Train Your Dragon the Hidden world PG">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/CYe7oMmCFr0"
          allowfullscreen
  ></b-embed>


  <h4 class="title-color"></h4>
  <b-button-group>
  <DragonworldR />
  <DragonworldF />
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
import DragonworldR from '@/components/Films/Dragonworld/DragonworldR'
import DragonworldF from '@/components/Films/Dragonworld/DragonworldF'
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
    DragonworldR,
    DragonworldF,
    Nineteen,
      }
}
</script>



