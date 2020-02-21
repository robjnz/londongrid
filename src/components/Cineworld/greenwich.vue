<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Greenwich 02"
    align        = "center"
  >
    <g-link href="http://bit.ly/32dRp2x" target="_blank"
      ><b-img
        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1582290830/greenwich02_yzsppt.jpg"
        alt = "greenwich 02 cinema"
    /></g-link>

    <br /><br />
    <h3 class="asian">Sonic The Hedgehog</h3>
    <b-embed
      type   = "iframe"
      aspect = "16by9"
      src    = "https://www.youtube.com/embed/HndtTDvr-iE"
      allowfullscreen
    ></b-embed>
    <b-button
      block
      variant = "success"
      v-b-tooltip.hover
      title = "SONIC THE HEDGEHOG is a live-action adventure comedy based on the global blockbuster video game franchise from Sega that centres on the infamously brash bright blue hedgehog. The film follows the misadventures of Sonic as he navigates the complexities of life on Earth."
      >Description Read Me</b-button
    >
    <p class="tory">
      The O2 Peninsula Square<br />London SE10 0DX <br /><span
        style = "font-size: 1em; color: Dodgerblue;"
      >
        <i class="fas fa-phone-square-alt"></i>
      </span>
      0330 333 4444
    </p>

    <g-link class="asian" to="http://bit.ly/2wtHyts" target="_blank">Review </g-link>
    <g-link to="http://bit.ly/32dRp2x" target="_blank"> More Info</g-link>
  </b-card>
</template>
