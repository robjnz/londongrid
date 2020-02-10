<template>
<b-card bg-variant="dark" text-variant="white" title= "Beautiful Boy 15">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/XEw2uHUYUPk"
          allowfullscreen
  ></b-embed>

  <h4 class="title-color"></h4>
  <b-button-group>
    <BoyR />
    <BoyF />
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
import Romfordbutton from '@/components/Cinevue/Romfordbutton'
import Vstratford from '@/components/Cinevue/Vstratford'
import BoyF from '@/components/Films/Boy/BoyF'
import BoyR from '@/components/Films/Boy/BoyR'
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
    Romfordbutton,
    Vstratford,
    BoyR,
    BoyF,
    Eighteen,

      }
}
</script>



