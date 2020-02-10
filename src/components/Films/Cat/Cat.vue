<template>
<b-card bg-variant="dark" text-variant="white" title= "Spy Cat U">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/NjOPH7W8XnI"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
      House cat Marnie lives a comfy life in the Sunshine household. She has never been outside this protected home and only knows the real world through her favourite detective crime show on TV. Marnie finds herself lost on a lonely intersection. Out on the road.    </p>

  <h4 class="title-color"></h4>
  <b-button-group>
    <CatyR />
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
import CatR from '@/components/Films/Cat/CatR'
import CatF from '@/components/Films/Cat/CatF'
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
    CatR,
    CatF,
    Eighteen,

      }
}
</script>



