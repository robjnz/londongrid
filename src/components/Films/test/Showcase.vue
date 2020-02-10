<template>
<b-card bg-variant="dark" text-variant="white" title= "">
<h4 class="title-color">Showcase</h4>


  <b-button-group>
  <Newhambutton /><!--Newham-->
  </b-button-group>
  <br><br>


    <Friday />
    <Saturday />
    <Date /><!--Date-->
    <Sunday />
    <Monday />
    <Tuesday />
    <Wednesday />
    <!--<Thursday />-->
  <br><br>


</b-card>
</template>
<script>

import Newhambutton from '@/components/Showcase/Newhambutton'
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
    Newhambutton,
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





