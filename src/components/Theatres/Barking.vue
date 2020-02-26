<template>
  <b-card bg-variant="dark" text-variant="white" title="JAZZ INC" align="center"
    ><br />
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1582639766/jazz_mnsvyc.jpg"
      fluid-grow
      alt = "Jazz poster"
    />

    <p class="title-color">
      Broadway Theatre Barking<br />
      Fri 28 Feb 2020 @ 7.30 pm
    </p>
    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Jazz Inc brings together a community of experienced artists, through unwavering passion, love, and experience they come together for this unmissable monthly live music event in the Broadway’s foyer bar."
        >Description Read Me</b-button
      >
    </div>

    <g-link class="labour" to="http://bit.ly/2O857LG" target="_blank">
      More Info
    </g-link>
  </b-card>
</template>
