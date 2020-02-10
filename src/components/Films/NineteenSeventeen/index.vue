<template>
<b-card bg-variant="dark" text-variant="white" title= "1917 15">
<b-embed type="iframe"
        aspect = "16by9"
        src    = "https://www.youtube.com/embed/YqNYrYUiMfg"
        allowfullscreen
  ></b-embed>

<p class="title-color">
    World War I, two British soldiers receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades.</p>

  <h4 class="title-color"></h4>
  <b-button-group>
    <review />
    <watch/>
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
import review from '@/components/Films/NineteenSeventeen/review'
import watch from '@/components/Films/NineteenSeventeen/watch'
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
    review,
    watch,
    Nineteen,

      }
}
</script>



