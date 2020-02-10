<template>
<b-card bg-variant="dark" text-variant="white" title= "Avengers Endgame 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/7nN6KVAgwK4"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
      Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle, remaining Avengers must figure out a way to bring back their vanquished allies for an epic showdown with Thanos.
    </p>



<h4 class="title-color">Cineworld</h4>
<!--Bexleyheath-->
<b-button-group>
<Bexleyheathbutton />
</b-button-group>
<br><br>
<!--<Sunday />-->
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->

<br><br>

<!--Greenwich-->
<b-button-group>
<Greenwichbutton />
</b-button-group>
<br><br>

<Sunday />
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->

<br><br>

<!--Ilford -->
<b-button-group>
<Ilfordbutton />
</b-button-group>
<br><br>
<!--<Sunday />-->
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->

<br><br>

<!--west-->
<b-button-group>
<Westbutton />
  </b-button-group>

  <br><br>

<!--<Sunday />-->
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
<br><br>

  <h4 class="title-color">Odeon</h4>
  <!--Greenwich-->
  <b-button-group>
 <Ogreenwichbutton />
 </b-button-group>
  <br><br>


  <!--<Sunday />-->
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
  <br><br>

<!--Southwoodford -->
 <b-button-group>
  <Osouthbutton />
  </b-button-group>
  <br><br>
<!--<Sunday />-->
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
  <br><br>

  <h4 class="title-color">Picturehouses</h4>
  <!--Greenwich -->
  <b-button-group>
  <Pgreenwichbutton />
  </b-button-group>
<br><br>

<!--<Sunday />-->
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
  <br><br>

<!--Hackney -->
  <b-button-group>
  <Phackneybutton />
  </b-button-group>

<br><br>

<!--<Sunday />-->
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
  <br><br>

<!--stratford-->
  <b-button-group>
  <Pstratfordbutton />
  </b-button-group>
  <br><br>

 <!--<Sunday />-->
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
  <br><br>

  <h4 class="title-color">Showcase</h4>
  <!--Newham-->
  <b-button-group>
  <Newhambutton />
  </b-button-group>
  <br><br>
<Sunday />
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
  <br><br>

  <h4 class="title-color">Vue</h4>
  <!--Romford -->
  <b-button-group>
  <Romfordbutton />
  </b-button-group>
  <br><br>

<Sunday />
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
  <br><br>

  <!--Stratford -->
<b-button-group>
  <Vstratford />
  </b-button-group>
  <br><br>

  <Sunday />
<!--<Monday />--> 
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
  <br><br>

  <h4 class="title-color"></h4>
  <b-button-group>
    <AvengersR />
    <AvengersF />
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
import AvengersR from '@/components/Films/Avengers/AvengersR'
import AvengersF from '@/components/Films/Avengers/AvengersF'
import Nineteen from '@/components/Films/Year/Nineteen'
import Monday from '@/components/Films/Days/Monday'
import Tuesday from '@/components/Films/Days/Tuesday'
import Wednesday from '@/components/Films/Days/Wednesday'
import Thursday from '@/components/Films/Days/Thursday'
import Friday from '@/components/Films/Days/Friday'
import Saturday from '@/components/Films/Days/Saturday'
import Sunday from '@/components/Films/Days/Sunday'





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
    AvengersR,
    AvengersF,
    Nineteen,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,

      }
}
</script>



