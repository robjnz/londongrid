<template>
<b-card bg-variant="dark" text-variant="white" title= "High Life 18 ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/YIgkXuNsWT4"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
Monte and his baby daughter are the last survivors of a damned and dangerous mission to the outer reaches of the solar system. They must now rely on each other to survive as they hurtle toward the oblivion of a black hole.    </p>



  <h4 class="title-color"></h4>
  <b-button-group>
    <LifeR />
    <LifeF />
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
import LifeR from '@/components/Films/Life/LifeR'
import LifeF from '@/components/Films/Life/LifeF'
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
    LifeR,
    LifeF,
    Eighteen,

      }
}
</script>



