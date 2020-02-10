<template>
<b-card bg-variant="dark" text-variant="white" title= "The Grinch U">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/Bf6D-i8YpHg"
          allowfullscreen
  ></b-embed>

<p class="title-color">
    A grumpy Grinch plots to ruin Christmas for the village of Whoville.
    </p>

  <h4 class="title-color"></h4>
  <b-button-group>
  <GrinchR />
  <GrinchF />
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
import GrinchR from '@/components/Films/Grinch/GrinchR'
import GrinchF from '@/components/Films/Grinch/GrinchF'
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
    GrinchR,
    GrinchF,
    Eighteen,


      }
}
</script>



