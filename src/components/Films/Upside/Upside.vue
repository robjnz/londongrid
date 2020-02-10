<template>
<b-card bg-variant="dark" text-variant="white" title= "The Upside 12A">

  <b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/EWw7rCHcduQ"
          allowfullscreen
  ></b-embed>

<p class="title-color">
    A comedic look at the relationship between a wealthy man with quadriplegia and an unemployed man with a criminal record who's hired to help him.
    </p>


  <h4 class="title-color"></h4>
  <b-button-group>
  <UpsideR />
  <UpsideF />
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
import UpsideR from '@/components/Films/Upside/UpsideR'
import UpsideF from '@/components/Films/Upside/UpsideF'
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
    UpsideR,
    UpsideF,
    Nineteen,

      }
}
</script>



