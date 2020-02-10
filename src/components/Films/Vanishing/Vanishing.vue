<template>
<b-card bg-variant="dark" text-variant="white" title= "The Vanishing 15">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/RyFlfN4dD14"
          allowfullscreen
  ></b-embed>


  <h4 class="title-color"></h4>
  <b-button-group>
    <VanishingR />
    <VanishingF />
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
import VanishingR from '@/components/Films/Vanishing/VanishingR'
import VanishingF from '@/components/Films/Vanishing/VanishingF'
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
    VanishingR,
    VanishingF,
    Nineteen,

      }
}
</script>



