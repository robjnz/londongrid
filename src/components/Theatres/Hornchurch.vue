<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Eric & Ern"
    align        = "center"
  >
    
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1582643779/eric-ern_hpgmb8.jpg"
      fluid-grow
      alt = "eric & ern poster"
    />

    <p class="title-color">
      Queen's Theatre Hornchurch<br />
      Mon 2 March 2020 @ 7.30 pm
    </p>

    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Eric and Ern is a brilliant homage to Morecambe and Wise crammed full of those famous comedy sketches, from Grieg’s Piano concerto, Mr Memory… ‘Arsenal’ to the paper bag trick!."
        >Description Read Me</b-button
      >
    </div>
    <g-link class="labour" to="http://bit.ly/2Soh3MB" target="_blank">
      More Info
    </g-link>
  </b-card>
</template>
