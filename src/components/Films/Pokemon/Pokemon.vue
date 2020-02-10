<template>
<b-card bg-variant="dark" text-variant="white" title= "Pokemon Detective Pikachu PG">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/14oPwBal7l4"
          allowfullscreen
  ></b-embed>
    <p class="title-color">
Ace detective Harry Goodman goes mysteriously missing, prompting his 21-year-old son, Tim, to find out what happened.    </p>



  <h4 class="title-color"></h4>
  <b-button-group>
    <PokemonR />
    <PokemonF />
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
import PokemonR from '@/components/Films/Pokemon/PokemonR'
import PokemonF from '@/components/Films/Pokemon/PokemonF'
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
    PokemonR,
    PokemonF,
    Nineteen,

      }
}
</script>



