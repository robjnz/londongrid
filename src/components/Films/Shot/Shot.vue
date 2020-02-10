<template>
<b-card bg-variant="dark" text-variant="white" title= "Long shot 15 ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/Cm9ae2ql63o"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
    Fred Flarsky free-spirited journalist. Charlotte Field is one of the most influential women in the world accomplished politician. When Fred unexpectedly runs into Charlotte, he soon realizes that she was his former babysitter. When Charlotte decides to make a run for the presidency, she hires Fred as her speechwriter.    </p>


  <h4 class="title-color"></h4>
  <b-button-group>
    <ShotR />
    <ShotF />
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
import ShotR from '@/components/Films/Shot/ShotR'
import ShotF from '@/components/Films/Shot/ShotF'
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
    ShotR,
    ShotF,
    Nineteen,

      }
}
</script>



