<template>
<b-card bg-variant="dark" text-variant="white" title= "The Kindergarten Teacher 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/Iaa1c4Tp-f0"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
      A teacher sees such great promise in her 5-year-old student that she goes to unreasonable lengths to protect his talent.
    </p>


  <h4 class="title-color"></h4>
  <b-button-group>
    <TeacherR />
    <TeacherF />
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
import Newhambutton from '@/components/Showcase/Newhambutton'
import Romfordbutton from '@/components/Cinevue/Romfordbutton'
import Vstratford from '@/components/Cinevue/Vstratford'
import TeacherR from '@/components/Films/Teacher/TeacherR'
import TeacherF from '@/components/Films/Teacher/TeacherF'
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
    Newhambutton,
    Romfordbutton,
    Vstratford,
    TeacherR,
    TeacherF,
    Eighteen,

      }
}
</script>



