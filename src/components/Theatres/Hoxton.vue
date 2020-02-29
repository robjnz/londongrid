<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Alfie Templeman"
    align        = "center"
  >
    
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1582958314/alfie-templeman_q5whdr.jpg"
      fluid-grow
      alt = "Alfie Templeman poster"
    />

    <p class="title-color">
      Hoxton Hall<br />
      Thu 12 March 2020 @ 7 pm
    </p>

    <p class="asian"></p>

    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Alfie writes, sings, produces and plays every single instrument on his first EP, Like An Animal. With lyrics that navigate important topics like the climate emergency, political instability and teen angst."
        >Description Read Me</b-button
      >
    </div>
    <g-link class="labour" to="http://bit.ly/2EX7IsG" target="_blank">
      More Info
    </g-link>
    
  </b-card>
</template>
