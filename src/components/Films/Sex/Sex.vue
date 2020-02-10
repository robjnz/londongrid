<template>
<b-card bg-variant="dark" text-variant="white" title= "On The Basis Of Sex 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/28dHbIR_NB4"
          allowfullscreen
  ></b-embed>

<p class="title-color">
  Ruth Bader Ginsburg is a struggling attorney and  mother who faces adversity and numerous obstacles in her fight for equal rights.
</p>

  <h4 class="title-color"></h4>
  <b-button-group>
  <SexR />
  <SexF />
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
import SexR from '@/components/Films/Sex/SexR'
import SexF from '@/components/Films/Sex/SexF'
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
    SexF,
    SexR,
    Eighteen,


      }
}
</script>



