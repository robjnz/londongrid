<template>
  <b-card bg-variant="dark" text-variant="white" title="Sonic the Hedgehog">
    <b-embed
      type   = "iframe"
      aspect = "16by9"
      src    = "https://www.youtube.com/embed/HndtTDvr-iE"
      allowfullscreen
    ></b-embed>
    <b-button
      block
      variant = "success"
      v-b-tooltip.hover
      title = "SONIC THE HEDGEHOG is a live-action adventure comedy based on the global blockbuster video game franchise from Sega that centres on the infamously brash bright blue hedgehog. The film follows the misadventures of Sonic as he navigates the complexities of life on Earth."
      >Description Read Me</b-button
    ><g-link class="asian" to="http://bit.ly/2wtHyts" target="_blank"
      >Review
    </g-link>
    <g-link class="labour" to="http://bit.ly/39ZB2cn" target="_blank"
      > watch online Free
    </g-link>
  </b-card>
</template>

<script>


export default {
  components: {
    
  }
};
</script>
