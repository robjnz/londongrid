<template>
<b-card bg-variant="dark" text-variant="white" title= "Second Act 12A">
  <b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/YsVo5necW6Q"
          allowfullscreen
  ></b-embed>

<p class="title-color">
    A big box store worker reinvents her life and her life-story and shows Madison Avenue what street smarts can do.
    </p>

  <h4 class="title-color"></h4>
  <b-button-group>
  <SecondR />
  <SecondF />
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
import SecondR from '@/components/Films/Second/SecondR'
import SecondF from '@/components/Films/Second/SecondF'
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
    SecondR,
    SecondF,
    Nineteen,

      }
}
</script>



