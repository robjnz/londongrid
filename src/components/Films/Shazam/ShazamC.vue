<template>
<b-card bg-variant="dark" text-variant="white" title= "Shazam 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/Y5I4TA0yhr4"
          allowfullscreen
  ></b-embed>
<p class="title-color">A boy is given the ability to become an adult superhero in times of need with a single magic word.</p>

<h4 class="title-color">Cineworld</h4>
<b-button-group>
<!--<Bexleyheathbutton />-->
<!--<Greenwichbutton />-->
  </b-button-group>
<br><br>
<b-button-group>
<!--<Ilfordbutton />-->
<!--<Westbutton />-->
  </b-button-group>

  <h4 class="title-color">Odeon</h4>
  <b-button-group>
 <!--<Ogreenwichbutton />-->
  <!--<Osouthbutton />-->
  </b-button-group>

  <h4 class="title-color">Picturehouses</h4>
  <b-button-group>
  <!--<Pgreenwichbutton />-->
  <!--<Phackneybutton />-->
  </b-button-group>
<br><br>
  <b-button-group>
  <!--<Pstratfordbutton />-->
  </b-button-group>

  <h4 class="title-color">Showcase</h4>
  <b-button-group>
  <!--<Newhambutton />-->
  </b-button-group>

  <h4 class="title-color">Vue</h4>
  <b-button-group>
  <!--<Romfordbutton />-->
  <!--<Vstratford />-->
  </b-button-group>

  <h4 class="title-color"></h4>
  <b-button-group>
    <ShazamR />
    <ShazamF />
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
import ShazamR from '@/components/Films/Shazam/ShazamR'
import ShazamF from '@/components/Films/Shazam/ShazamF'
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
    ShazamR,
    ShazamF,
    Nineteen,

      }
}
</script>



