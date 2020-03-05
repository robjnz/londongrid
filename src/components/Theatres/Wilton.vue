<template>
  <b-card bg-variant="dark" text-variant="white" title="" align="center">
    <h3 class="asian">Wilton's Music Hall<br /></h3>
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1583423553/che_ksldia.jpg"
      fluid-grow
      alt = "Che Guevara poster"
    />
    <p>
      1 Graces Alley<br />
      London,

      <g-link class="labour" to="http://bit.ly/3aw3FhA" target="_blank">
        E1 8JB
      </g-link>
    </p>
    <h3 class="football">Che Guevara<br /><br /></h3>
    <p class="football">
      Mon 16 March @ 7.30 pm
    </p>
    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "A celebration of British Latinx poetry and culture through the lens of Che's little green notebook."
        >Description Read Me</b-button
      >
    </div>

    <g-link class="labour" to="http://bit.ly/2R9bBf7" target="_blank">
      More Info
    </g-link>
  </b-card>
</template>
