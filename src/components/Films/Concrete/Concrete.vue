<template>
<b-card bg-variant="dark" text-variant="white" title= "Dragged Across Concrete 18">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/2p5pdWyyZoc"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
      Police partners descend into the criminal underworld after they are suspended for assaulting a suspect on video.
    </p>



  <h4 class="title-color"></h4>
  <b-button-group>
    <ConcreteR />
    <ConcreteF />
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
import ConcreteR from '@/components/Films/Concrete/ConcreteR'
import ConcreteF from '@/components/Films/Concrete/ConcreteF'
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
    ConcreteR,
    ConcreteF,
    Eighteen,

      }
}
</script>



