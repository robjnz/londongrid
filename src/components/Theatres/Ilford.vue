<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Our House"
    align        = "center"
  >
    <br /><br />
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1581154600/ourhouse_xt1hsx.jpg"
      fluid-grow
      alt = "our House poster"
    />

    <p class="title-color">
      Kenneth More Theatre Ilford<br />
      Thurs 5 - Sat 7 March 2020
    </p>

    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Featuring a collection of Madness hits including House of Fun, Baggy Trousers, Driving in my Car, It Must Be Love and of course Our House, the show tells the story of London lad Joe Casey, who, on the night of his sixteenth birthday."
        >Description Read Me</b-button
      >
    </div>
    <p class="labour"></p>
    <b-button href="http://bit.ly/2K48nZl" target="_blank" variant="info"
      >open</b-button
    >
  </b-card>
</template>
