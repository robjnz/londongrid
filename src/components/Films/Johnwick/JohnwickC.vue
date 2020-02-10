<template>
<b-card bg-variant="dark" text-variant="white" title= "John Wick Parbellum 15 ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/vFAvRKWbLVA"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
      After gunning down a member of the High Table, the shadowy international assassin's guild, legendary hit man John Wick finds himself stripped of the organization's protective services. With a bounty on his head, Wick must fight his way through the streets of New York.    </p>

<h4 class="title-color">Cineworld</h4>
<b-button-group>
<!--<Bexleyheathbutton />-->
<Greenwichbutton />
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
  <Newhambutton />
  </b-button-group>

  <h4 class="title-color">Vue</h4>
  <b-button-group>
  <Romfordbutton />
  <Vstratford />
  </b-button-group>

  <h4 class="title-color"></h4>
  <b-button-group>
    <JohnwickR />
    <JohnwickF />
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
import JohnwickR from '@/components/Films/Johnwick/JohnwickR'
import JohnwickF from '@/components/Films/Johnwick/JohnwickF'
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
    JohnwickR,
    JohnwickF,
    Nineteen,

      }
}
</script>



