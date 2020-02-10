<template>
<b-card bg-variant="dark" text-variant="white" title= "Little 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/Dk6jGQXx3o0"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
    Jordan faces an unexpected threat to her personal life and career when she magically transforms into a 13-year-old.
    </p>


  <h4 class="title-color"></h4>
  <b-button-group>
    <LittleR />
    <LittleF />
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
import LittleR from '@/components/Films/Little/LittleR'
import LittleF from '@/components/Films/Little/LittleF'
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
    LittleR,
    LittleF,
    Nineteen,

      }
}
</script>



