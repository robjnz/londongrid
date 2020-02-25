<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Christopher Green - No Show"
    align        = "center"
  >
    <!-- 
    <b-img src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1575539491/pecsmas_vnlqtk.png" fluid-grow alt="Pecsmas poster"/>
-->
    <b-embed
      type   = "iframe"
      aspect = "16by9"
      src    = "https://www.youtube.com/embed/Cq0Zymj9Vfw"
      allowfullscreen
    ></b-embed>
    <p class="title-color">
      The Yard Hackney<br />
      Mon 24 Feb - Sat 14 March 2020
    </p>
    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "No Show is the show that Christopher has spent over two decades making. It’s the culmination of 25 years of entertaining tens of thousands of audience members and learning exactly what makes them tick. What they want. It’s the leadership we’ve been seeking in troubling times. But enough from us – here’s Christopher Green to tell you himself."
        >Description Read Me</b-button
      >
    </div>
    <p class="labour"></p>

    <b-button href="http://bit.ly/2OYFsdx" target="_blank" variant="info"
      >open</b-button
    >
  </b-card>
</template>
