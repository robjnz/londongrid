<template>
  <b-card
    bg-variant   = "dark"
    text-variant = "white"
    title        = "Stratford"
    align        = "center"
  >
    <g-link href="http://bit.ly/37QmjPy" target="_blank"
      ><b-img
        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1582453862/stratfordpict_f2jibl.jpg"
        alt = "Stratford cinema"
    /></g-link>

    <br /><br />
    <h3 class="asian">
      Parasite
    </h3>
    <b-embed
      type   = "iframe"
      aspect = "16by9"
      src    = "https://www.youtube.com/embed/tBfgTZsBeFM"
      allowfullscreen
    ></b-embed>
    <b-button
      block
      variant = "success"
      v-b-tooltip.hover
      title = "Ki-taek (Song Kang-ho) is a good-for-nothing, unemployed family man, patriarch of a family of grifters – his wife Chung-sook (Chang Hyae-jin), his clever twenty-something daughter Ki-jung (Park So-dam), and his son Ki-woo (Choi Woo-shik) – who live in an overcrowded, sordid basement."
      >Description Read Me</b-button
    >
    <p class="tory">
      Salway Road<br />
      Stratford London

      <g-link class="asian" to="http://bit.ly/32m46rT" target="_blank"
        >E15 1BX
      </g-link>
      <br /><span style="font-size: 1em; color: Dodgerblue;">
        <i class="fas fa-phone-square-alt"></i>
        0871 902 5747
      </span>
    </p>

    <g-link class="asian" to="http://bit.ly/2VfWtC8" target="_blank"
      >Review
    </g-link>
    <g-link to="http://bit.ly/37QmjPy" target="_blank"> More Info</g-link>
  </b-card>
</template>
