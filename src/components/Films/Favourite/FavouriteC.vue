<template>
<b-card bg-variant="dark" text-variant="white" title= "The Favourite 15">
  <b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/SYb-wkehT1g"
          allowfullscreen
  ></b-embed>
<p class="title-color">
    A frail Queen Anne occupies the throne, close friend, Lady Sarah, governs the country in her stead, while tending to Anne's ill health.
    </p>
<h4 class="title-color">Cineworld</h4>
<b-button-group>
<!--<Bexleyheathbutton />-->
<!--<Greenwichbutton />-->
  </b-button-group>
<br><br>
<b-button-group>
<!--<westbutton />-->

  </b-button-group>

  <h4 class="title-color">Odeon</h4>
  <b-button-group>
  <!--<Ogreenwichbutton />-->
  <!--<Osouthbutton />-->
  </b-button-group>

  <h4 class="title-color">Picturehouses</h4>
  <b-button-group>
  <Pgreenwichbutton />
  <Phackneybutton />
  </b-button-group>
<br><br>
  <b-button-group>
  <!--<Pstratfordbutton />-->
  </b-button-group>

<h4 class="title-color">Vue</h4>
  <b-button-group>
  <!--<Romfordbutton />-->
 <!--<Vstratford />-->
  </b-button-group>

  <h4 class="title-color"></h4>
  <b-button-group>
  <FavouriteR />
  <FavouriteF />
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
import FavouriteR from '@/components/Films/Favourite/FavouriteR'
import FavouriteF from '@/components/Films/Favourite/FavouriteF'
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
    FavouriteR,
    FavouriteF,
    Eighteen,
      }
}
</script>



