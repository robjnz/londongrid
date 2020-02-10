<template>
<b-card bg-variant="dark" text-variant="white" title= "Aquaman 12A">

<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/VMzYtgzYO7U"
          allowfullscreen
  ></b-embed>
  
  <p class="title-color">
      Atlantis, an underwater kingdom ruled by King Orm, planning to conquer the oceanic people Standing in his way is Aquaman.
    </p>
  <h4 class="title-color"></h4>
  <b-button-group>
  <AquamanR />
  <AquamanF />
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
import Newhambutton from '@/components/Showcase/Newhambutton'
import Romfordbutton from '@/components/Cinevue/Romfordbutton'
import Vstratford from '@/components/Cinevue/Vstratford'
import AquamanR from '@/components/Films/Aquaman/AquamanR'
import AquamanF from '@/components/Films/Aquaman/AquamanF'
import Eighteen from '@/components/Films/Year/Eighteen'


export default {
  components: {
    Bexleyheathbutton,
    Greenwichbutton,
    Ilfordbutton,
    Westbutton,
    Ogreenwichbutton,
    Osouthbutton,
    Newhambutton,
    Romfordbutton,
    Vstratford,
    AquamanR,
    AquamanF,
    Eighteen,

      }
}
</script>



