<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Stratford"
    align        = "center"
  >
    <g-link href="http://bit.ly/2D9eWYS" target="_blank"
      ><b-img
        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1582475520/stratfordvue_llhaki.jpg"
        alt = "Stratford cinema"
    /></g-link>

    <br /><br />
    <h3 class="asian">
       Dolittle
    </h3>
    <b-embed
      type   = "iframe"
      aspect = "16by9"
      src    = "https://www.youtube.com/embed/jhCs0BJwqMU"
      allowfullscreen
    ></b-embed>
    <b-button
      block
      variant = "success"
      v-b-tooltip.hover
      title = "Dolittle After losing his wife seven years earlier, the eccentric Dr. John Dolittle (Downey), famed doctor and veterinarian of Queen Victoria's England, hermits himself away behind the high walls of Dolittle Manor with only his menagerie of exotic animals for company. But when the young queen (Jessie Buckley, Wild Rose) falls gravely ill, a reluctant Dolittle is forced to set sail on an epic adventure to a mythical island in search of a cure."
      >Description Read Me</b-button
    >
    <p class="tory">
      Westfield 2 Stratford Place<br />
      London

      <g-link class="asian" to="http://bit.ly/2HKFM9X" target="_blank">
        E20 1EJ
      </g-link>
      <br /><span style="font-size: 1em; color: Dodgerblue;">
        <i class="fas fa-phone-square-alt"></i>
        0345 308 4620
      </span>
    </p>

    <g-link class="asian" to="http://bit.ly/2T702rx" target="_blank"
      >Review
    </g-link>
    <g-link class="labour" to="http://bit.ly/2D9eWYS" target="_blank"> More Info</g-link>
  </b-card>
</template>
