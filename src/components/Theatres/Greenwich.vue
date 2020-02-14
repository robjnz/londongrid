<template>
  <b-card bg-variant="dark" text-variant="white" title="Macbeth" align="center">
    <br />
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1581679413/2020-02-14_11_22_11-Window_nrhs9n.jpg"
      fluid-grow
      alt = "Macbeth poster"
    />

    <p class="title-color">
      Greenwich Theatre
      <br />Wed 26 Feb - Sat 7 Mar 2020
    </p>
    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Shakespeare’s supernatural Macbeth bursts on to the stage in this epic new ensemble production and features as the first production in Lazarus' third year as associate artists at Greenwich Theatre."
        >Description Read Me</b-button
      >
    </div>
    <p class="labour"></p>

    <b-button href="http://bit.ly/2v7lp3D" target="_blank" variant="info"
      >open</b-button
    >
  </b-card>
</template>
