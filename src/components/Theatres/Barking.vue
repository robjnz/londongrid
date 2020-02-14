<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Frankie Valli & The Four Seasons"
    align        = "center"
    ><br />
    <!--<b-img src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1578069518/pitch_barking_c8csv3.jpg" fluid-grow alt="Perfect Pitch poster"/>
  -->
    <b-embed
      type   = "iframe"
      aspect = "16by9"
      src    = "https://www.youtube.com/embed/B9Atk7Ym1co"
      allowfullscreen
    ></b-embed>
    <p class="title-color">
      Broadway Theatre Barking<br />
      Sat 22 Feb 2020 @ 7.30 pm
    </p>
    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "A musical journey through the sounds of one of the most successful bands of all time."
        >Description Read Me</b-button
      >
    </div>

    <p class="labour"></p>

    <b-button href="http://bit.ly/2O857LG" target="_blank" variant="info"
      >open</b-button
    >
  </b-card>
</template>
