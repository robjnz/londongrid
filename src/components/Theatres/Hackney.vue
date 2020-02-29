<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Così Fan Tutte"
    align        = "center"
  >
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1581153716/cosi_lsnigh.jpg"
      fluid-grow
      alt = "Così fan tutte poster"
    />

    <p class="title-color">
      Hackney Empire<br />
      Sat 29 Feb & Fri 6 Mar @ 7.30pm
    </p>

    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Così fan tutte an enduring favourite, a story of young love and fidelity. It is in many ways Mozart’s most perfect opera."
        >Description Read Me</b-button
      >
    </div>
    <g-link class="labour" to="http://bit.ly/2JnhX7Z" target="_blank">
      More Info
    </g-link>
  </b-card>
</template>
