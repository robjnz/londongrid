<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Ms. Paolini’s Phantasmagoria Cabaret"
    align        = "center"
  >
    <br />
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1581154019/phantasmagoria_dicrf1.jpg"
      fluid-grow
      alt = "Ms. Paolini’s Phantasmagoria Cabaret poster"
    />

    <p class="title-color">
      Hoxton Hall<br />
      Fri 28 Feb 2020 @ 8 pm
    </p>

    <p class="asian"></p>

    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Phantasmagoria Cabaret returns to Hoxton Hall for an evening of deconstructed, gender-bending cabaret presented by performance artist, theatre maker and comedian Patrizia Paolini."
        >Description Read Me</b-button
      >
    </div>
    <p class="labour"></p>
    <b-button href="http://bit.ly/2EX7IsG" target="_blank" variant="info"
      >open</b-button
    >
  </b-card>
</template>
