<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Bexleyheath"
    align        = "center"
  >
    <g-link href="http://bit.ly/32gczgA" target="_blank"
      ><b-img
        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1582271804/cinebexley_d1eoe2.jpg"
        alt = "bexleyheath cinema"
    /></g-link>

    <br /><br />
    <h3 class="asian">Emma</h3>
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
    >
    <p class="tory">
      28-70 Broadway Bexleyheath<br />London <g-link class="asian" to="http://bit.ly/2PhiMUe" target="_blank">DA6 7LL </g-link> <br /><span
        style = "font-size: 1em; color: Dodgerblue;"
      >
        <i class="fas fa-phone-square-alt"></i>
      </span>
      0330 333 4444
    </p>

    <g-link class="asian" to="http://bit.ly/2Pg8fZo" target="_blank">Review </g-link>
    <g-link class="labour" to="http://bit.ly/32gczgA" target="_blank"> More Info</g-link>
  </b-card>
</template>
