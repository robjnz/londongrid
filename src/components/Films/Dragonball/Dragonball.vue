<template>
<b-card bg-variant="dark" text-variant="white" title= "Dragon Ball Super Broly PG">
  <b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/U_WaYehNVAM"
          allowfullscreen
  ></b-embed>
<p class="title-color">
    A planet destroyed, a powerful race reduced to nothing, three Saiyans were scattered among the stars.
    </p>
  <h4 class="title-color"></h4>
  <b-button-group>
  <DragonballR />
    <DragonballF />
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
import Newhambutton from '@/components/Showcase/Newhambutton'
import Romfordbutton from '@/components/Cinevue/Romfordbutton'
import Vstratford from '@/components/Cinevue/Vstratford'
import DragonballR from '@/components/Films/Dragonball/DragonballR'
import DragonballF from '@/components/Films/Dragonball/DragonballF'
import Nineteen from '@/components/Films/Year/Nineteen'


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
    DragonballR,
    DragonballF,
    Nineteen,

      }
}
</script>



