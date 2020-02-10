<template>
<b-card bg-variant="dark" text-variant="white" title= "The Hustle 12A ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/fhkNMqy4AGw"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
Anne Hathaway and Rebel Wilson star as female scam artists, one low rent and the other high class, who team up to take down the dirty rotten men who have wronged them.
</p>



  <h4 class="title-color"></h4>
  <b-button-group>
    <HustleR />
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
import HustleR from '@/components/Films/Hustle/HustleR'
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
    HustleR,
    Nineteen,

      }
}
</script>



