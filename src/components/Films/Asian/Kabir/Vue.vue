<template>
<b-card bg-variant="dark" text-variant="white" title= "">
<h4 class="title-color">Vue</h4>


  <b-button-group>
  <Romfordbutton /><!--Romford -->
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
  <Vstratford /><!--Stratford -->
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

import Romfordbutton from '@/components/Cinevue/Romfordbutton'
import Vstratford from '@/components/Cinevue/Vstratford'
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
    Romfordbutton,
    Vstratford,
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





