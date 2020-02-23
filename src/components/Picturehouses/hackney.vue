<template>
  <b-card bg-variant="dark" text-variant="white" title="Hackney" align="center">
    <g-link href="http://bit.ly/37WqJER" target="_blank"
      ><b-img
        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1582447089/hackneypict_mx8vjx.jpg"
        alt = "Hackney cinema"
    /></g-link>

    <br /><br />
    <h3 class="asian">
      Greed
    </h3>
    <b-embed
      type   = "iframe"
      aspect = "16by9"
      src    = "https://www.youtube.com/embed/S3ZJB1zUY7g"
      allowfullscreen
    ></b-embed>
    <b-button
      block
      variant = "success"
      v-b-tooltip.hover
      title = "Set in the glamorous and celebrity-filled world of luxury fashion, Greed is a fictional story about the rise and fall of a British retail mogul, as seen through the eyes of his biographer."
      >Description Read Me</b-button
    >
    <p class="tory">
      270 Mare Street<br />
      Hackney London

      <g-link class="asian" to="http://bit.ly/2HPyDVD" target="_blank"
        >E8 1HE
      </g-link>
      <br /><span style="font-size: 1em; color: Dodgerblue;">
        <i class="fas fa-phone-square-alt"></i>
        <br />
      </span>
     
    </p>

    <g-link class="asian" to="http://bit.ly/38TGbCJ" target="_blank"
      >Review
    </g-link>
    <g-link to="http://bit.ly/37WqJER" target="_blank"> More Info</g-link>
  </b-card>
</template>
