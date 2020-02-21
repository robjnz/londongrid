<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "West India Quay"
    align        = "center"
  >
    <g-link href="http://bit.ly/2V66vWi" target="_blank"
      ><b-img
        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1582293296/westcineworld_hyjumu.jpg"
        alt = "West India Quay cinema"
    /></g-link>
    <b-img src="" fluid-grow alt="" />
    <br /><br />
    <h3 class="asian">1917</h3>
    <b-embed
      type   = "iframe"
      aspect = "16by9"
      src    = "https://www.youtube.com/embed/YqNYrYUiMfg"
      allowfullscreen
    ></b-embed>
    <b-button
      block
      variant = "success"
      v-b-tooltip.hover
      title = "World War I, two British soldiers receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades."
      >Description Read Me</b-button
    >
    <p class="tory">
      Hertsmere Road West India Quay<br />
      London E14 4AL
      <br /><span style="font-size: 1em; color: Dodgerblue;">
        <i class="fas fa-phone-square-alt"></i>
      </span>
      0330 333 4444
    </p>

    <g-link class="asian" to="http://bit.ly/2V9GOUP" target="_blank">Review </g-link>
    <g-link to="http://bit.ly/2V66vWi" target="_blank"> More Info</g-link>
  </b-card>
</template>
