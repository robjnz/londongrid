<template>
  <b-card bg-variant="dark" text-variant="white" title="" align="center">
    <h3 class="tory">The O2 arena<br /></h3>
    <b-img
      src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1583138050/BallandBoe_fz1ixi.jpg"
      fluid-grow
      alt = "ball & boe poster"
    />
    <p>
      Peninsula Square<br />
      London

      <g-link class="labour" to="http://bit.ly/2TfaRZF" target="_blank">
        SE10 0DX
      </g-link>
    </p>
    <h3 class="football">Michael Ball & <br />Alfie Boe</h3>
    <p class="football">
      Sat 7 Mar 2020 @ 6.30 pm
    </p>
    <p class="asian"></p>
    <div class="text-center my-3">
      <b-button
        block
        variant = "success"
        v-b-tooltip.hover
        title = "Michael Ball & Alfie Boe"
        >Description Read Me</b-button
      >
    </div>
    <g-link class="labour" to="http://bit.ly/2PpXswU" target="_blank">
      More Info
    </g-link>
  </b-card>
</template>
