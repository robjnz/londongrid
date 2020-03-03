<template>
  <b-card bg-variant="dark" text-variant="white" title="" align="center">
    <h3 class="asian">Queen's Theatre Hornchurch<br /></h3>
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1583263233/maggie_xjqboy.jpg"
      fluid-grow
      alt = "Maggie May poster"
    />

    <p>
      Billet Lane<br />
      Hornchurch Essex
      <g-link class="labour" to="http://bit.ly/2TygFwt" target="_blank">
        RM11 1QT
      </g-link>
    </p>
    <h3 class="football">Maggie May</h3>
    <p class="football">
      Fri 13 – Sat 28 March 2020
    </p>
    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Maggie and Gordon first met in 1971 dancing to the sound of Rod Stewart. Now in their sixties, and still very much in love, they’ve been finishing each other’s songs all their sun-shiny marriage."
        >Description Read Me</b-button
      >
    </div>
    <g-link class="labour" to="http://bit.ly/2Soh3MB" target="_blank">
      More Info
    </g-link>
  </b-card>
</template>
