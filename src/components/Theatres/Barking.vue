<template>
  <b-card bg-variant="dark" text-variant="white" title="Mary Poppins Reappears" align="center">
  
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1582957572/poppins_spyysw.jpg"
      fluid-grow
      alt = "Mary Poppins Reappears"
    />

    <p class="title-color">
      Broadway Theatre Barking<br />
      Sun 15 - Sat 28 March 2020
    </p>
    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Mary Poppins a mystical nanny returns to London to save the day in this musical dance show suitable for all."
        >Description Read Me</b-button
      >
    </div>

    <g-link class="labour" to="http://bit.ly/2O857LG" target="_blank">
      More Info
    </g-link>
  </b-card>
</template>
