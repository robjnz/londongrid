<template>
<b-card bg-variant="dark" text-variant="white" title= "Tolkien 12A">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/ZwC2TNShdwY"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
    As a young student, J.R.R. Tolkien finds love, friendship and artistic inspiration among a group of fellow outcasts. These early life experiences soon inspire Tolkien to write the classic fantasy novels The Hobbit" and "The Lord of the Rings."

    </p>

  <h4 class="title-color"></h4>
  <b-button-group>
    <TolkienR />
    <TolkienF />
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
import TolkienR from '@/components/Films/Tolkien/TolkienR'
import TolkienF from '@/components/Films/Tolkien/TolkienF'
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
    TolkienR,
    TolkienF,
    Nineteen,

      }
}
</script>



