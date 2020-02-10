<template>
<b-card bg-variant="dark" text-variant="white" title= "Vice 15">
  <b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/jO3GsRQO0dM"
          allowfullscreen
  ></b-embed>

<!--blue-->
<h4 class="title-color">Cineworld</h4>
<b-button-group>
<!--<Bexleyheathbutton />-->
<!--<greenwichbutton/>-->
  </b-button-group>
<br><br>
<b-button-group>
<!--<ilfordbutton />-->
<!--<westbutton />-->
  </b-button-group>

<!--yellow-->

  <h4 class="title-color">Odeon</h4>
  <b-button-group>
  <!--<Ogreenwichbutton />-->
  <!--<Osouthbutton />-->
  </b-button-group>

<!--red-->

  <h4 class="title-color">Picturehouses</h4>
  <b-button-group>
  <!--<Pgreenwichbutton />-->
  <!--<Phackneybutton />-->
  </b-button-group>
<br><br>
  <b-button-group>
  <!--<Pstratfordbutton />-->
  </b-button-group>

<!--Green-->
  <h4 class="title-color">Showcase</h4>
  <b-button-group>
  <!--<Newhambutton />-->
  </b-button-group>

<!--blue-->
  <h4 class="title-color">Vue</h4>
  <b-button-group>
<!--<Romfordbutton />-->
  <!--<Vstratford />-->
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


      }
}
</script>



