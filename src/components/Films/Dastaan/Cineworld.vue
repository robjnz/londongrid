<template>
<b-card bg-variant="dark" text-variant="white" title= "">
<h4 class="title-color">Cineworld </h4>
<b-button-group>
<Bexleyheathbutton /><!--Bexleyheath -->
  </b-button-group>

<br><br>

<Date /><!--Date-->
<!--<Sunday />-->
<!--<Monday />-->
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->

<br><br>


<b-button-group>
<Greenwichbutton /><!--Greenwich-->
</b-button-group>
<br><br>
<Date /><!--Date-->
<!--<Sunday />-->
<!--<Monday />-->
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->


<br><br>

<b-button-group>
<Ilfordbutton /><!--Ilford -->
</b-button-group>
<br><br>
<Date /><!--Date-->
<!--<Sunday />-->
<!--<Monday />-->
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
    



<br><br>

<b-button-group>
<Westbutton /><!--west-->
  </b-button-group>

  <br><br>

<Date /><!--Date-->
<!--<Sunday />-->
<!--<Monday />-->
<!--<Tuesday />-->
<!--<Wednesday />-->
<!--<Thursday />-->
<!--<Friday />-->
<!--<Saturday />-->
<br><br>

</b-card>
</template>
<script>

import Bexleyheathbutton from '@/components/Cineworld/Bexleyheathbutton'
import Greenwichbutton from '@/components/Cineworld/Greenwichbutton'
import Ilfordbutton from '@/components/Cineworld/Ilfordbutton'
import Westbutton from '@/components/Cineworld/Westbutton'
import Monday from '@/components/Films/Days/Monday'
import Tuesday from '@/components/Films/Days/Tuesday'
import Wednesday from '@/components/Films/Days/Wednesday'
import Thursday from '@/components/Films/Days/Thursday'
import Friday from '@/components/Films/Days/Friday'
import Saturday from '@/components/Films/Days/Saturday'
import Sunday from '@/components/Films/Days/Sunday'
import Date from '@/components/Films/Date/Date'






export default {
  components: {
    Bexleyheathbutton,
    Greenwichbutton,
    Ilfordbutton,
    Westbutton,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    Date,

      }
}
</script>





