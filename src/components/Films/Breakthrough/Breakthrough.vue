<template>
<b-card bg-variant="dark" text-variant="white" title= "Breakthrough 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/eDn1GJ3qLyg"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
Joyce Smith’s adopted son John falls through an icy Missouri lake, all hope seems lost. John lies lifeless, Joyce refuses to give up. Her steadfast belief inspires those around her to continue to pray for John’s recovery, even in the face of every case history and scientific prediction.     </p>



  <h4 class="title-color"></h4>
  <b-button-group>
    <BreakthroughR />
    <BreakthroughF />
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
import BreakthroughR from '@/components/Films/Breakthrough/BreakthroughR'
import BreakthroughF from '@/components/Films/Breakthrough/BreakthroughF'
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
    BreakthroughR,
    BreakthroughF,
    Nineteen,

      }
}
</script>



