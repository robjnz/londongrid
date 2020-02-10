<template>
<b-card bg-variant="dark" text-variant="white" title= "Creed ll 12A">
  <b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/u22BXhMu4tI"
          allowfullscreen
  ></b-embed>

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

<h4 class="title-color">Odeon</h4>
  <b-button-group>
  <!--<Ogreenwichbutton />-->
  <!--<Osouthbutton />-->
  </b-button-group>

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
    Romfordbutton,
    Vstratford,

      }
}
</script>



