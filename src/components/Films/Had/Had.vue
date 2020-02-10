<template>
<b-card bg-variant="dark" text-variant="white" title= "What They Had 15">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/1kBGxsyp__o"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
    After her ailing mother wanders off during a blizzard, Bridget returns to her childhood home in Chicago, accompanied by her rebellious daughter.
    </p>
    
  <h4 class="title-color"></h4>
  <b-button-group>
  <HadR />
  <HadF />
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
import HadR from '@/components/Films/Had/HadR'
import HadF from '@/components/Films/Had/HadF'
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
    HadR,
    HadF,
    Eighteen,


      }
}
</script>



