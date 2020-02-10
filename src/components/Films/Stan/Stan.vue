<template>
<b-card bg-variant="dark" text-variant="white" title= "Stan & Ollie PG">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/MdcBNrjc3wo"
          allowfullscreen
  ></b-embed>
<p class="title-color">
    Laurel and Hardy the world's greatest comedy team, touring variety halls in Britain in 1953. 
    </p>

<h4 class="title-color"></h4>
  <b-button-group>
  <StanR />
  <StanF />
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
import StanR from '@/components/Films/Stan/StanR'
import StanF from '@/components/Films/Stan/StanF'
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
    StanR,
    StanF,
    Eighteen,
      }
}
</script>



