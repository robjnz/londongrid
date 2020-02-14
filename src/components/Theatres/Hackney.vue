<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Così Fan Tutte"
    align        = "center"
  >
    <br />

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
    <p class="labour"></p>
    <b-button href="http://bit.ly/2JnhX7Z" target="_blank" variant="info"
      >open</b-button
    >
  </b-card>
</template>
