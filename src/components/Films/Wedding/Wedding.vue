<template>
<b-card bg-variant="dark" text-variant="white" title= "Destination Wedding 15 ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/TjXQzRWmb_I"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
When Frank and Lindsay meet on their way to a destination wedding, they soon discover they have a lot in common, they both hate the bride, and the groom.
</p>



  <h4 class="title-color"></h4>
  <b-button-group>
    <WeddingR />
    <WeddingF />
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
import WeddingR from '@/components/Films/Wedding/WeddingR'
import WeddingF from '@/components/Films/Wedding/WeddingF'
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
    WeddingR,
    WeddingF,
    Eighteen,

      }
}
</script>



