<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "I Think We Are Alone"
    align        = "center"
  >
    <br />
    <!--
      <b-img src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1579626184/gift_zcyoj2.jpg" fluid-grow alt="The gift poster"/>
-->
    <b-embed
      type   = "iframe"
      aspect = "16by9"
      src    = "https://www.youtube.com/embed/G9Zm1vVbzU0"
      allowfullscreen
    ></b-embed>
    <p class="title-color">
      Theatre Royal Stratford East<br />
      Tues 25 Feb - Sat 21 March 2020
    </p>

    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Two sisters are estranged and bicker over text. Their brittle and aggressive language is pushing them further apart when what they really want is to meet, clear the air and talk about the events that happened when they were young girls that haunt them still."
        >Description Read Me</b-button
      >
    </div>
    <g-link class="labour" to="http://bit.ly/2JjU3Kr" target="_blank">
      More Info
    </g-link>
  </b-card>
</template>
