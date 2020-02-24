<template>
  <b-card bg-variant="dark" text-variant="white" title="Emma">
    <b-embed
      type   = "iframe"
      aspect = "16by9"
      src    = "https://www.youtube.com/embed/1v0xLjM0T2E"
      allowfullscreen
    ></b-embed>

    <b-button
      block
      variant = "success"
      v-b-tooltip.hover
      title = "Jane Austen's beloved comedy about finding your equal and earning your happy ending, is reimagined in this delicious new film adaptation of EMMA. Handsome, clever, and rich, Emma Woodhouse is a restless queen bee without rivals in her sleepy little town. In this glittering satire of social class and the pain of growing up, Emma must adventure through misguided matches and romantic missteps to find the love that has been there all along."
      >Description Read Me</b-button
    ><g-link class="asian" to="http://bit.ly/2Pg8fZo" target="_blank"
      >Review
    </g-link>
    <g-link class="labour" to="http://bit.ly/396tp3K" target="_blank"
      > watch online Free
    </g-link>
  </b-card>
</template>

<script>
import Bexleyheathbutton from "@/components/Cineworld/Bexleyheathbutton";
import Greenwichbutton from "@/components/Cineworld/Greenwichbutton";
import Ilfordbutton from "@/components/Cineworld/Ilfordbutton";
import Westbutton from "@/components/Cineworld/Westbutton";
import Ogreenwichbutton from "@/components/Odeon/Ogreenwichbutton";
import Osouthbutton from "@/components/Odeon/Osouthbutton";
import Pgreenwichbutton from "@/components/Picturehouses/Pgreenwichbutton";
import Phackneybutton from "@/components/Picturehouses/Phackneybutton";
import Pstratfordbutton from "@/components/Picturehouses/Pstratfordbutton";
import Newhambutton from "@/components/Showcase/Newhambutton";
import Romfordbutton from "@/components/Cinevue/Romfordbutton";
import Vstratford from "@/components/Cinevue/Vstratford";
import review from "@/components/Films/NineteenSeventeen/review";
import watch from "@/components/Films/NineteenSeventeen/watch";
import Nineteen from "@/components/Films/Year/Nineteen";

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
    review,
    watch,
    Nineteen
  }
};
</script>
