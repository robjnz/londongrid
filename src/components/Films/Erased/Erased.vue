<template>
<b-card bg-variant="dark" text-variant="white" title= "Boy Erased 15">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/QEpU7EF0oVY"
          allowfullscreen
  ></b-embed>
<p class="title-color">
    Jared Eamons, the son of a small-town Baptist pastor, must overcome the fallout after being outed as gay to his parents.
    </p>

  <h4 class="title-color"></h4>
  <b-button-group>
  <ErasedR />
  <ErasedF />
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
import ErasedR from '@/components/Films/Erased/ErasedR'
import ErasedF from '@/components/Films/Erased/ErasedF'
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
    ErasedR,
    ErasedF,
    Eighteen,


      }
}
</script>



