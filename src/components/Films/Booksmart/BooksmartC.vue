<template>
<b-card bg-variant="dark" text-variant="white" title= "Booksmart 15 ">
<b-embed type="iframe"
          aspect = "16by9"
          src    = "https://www.youtube.com/embed/tX2MvB0kyA0"
          allowfullscreen
  ></b-embed>

    <p class="title-color">
      Academic overachievers Amy and Molly thought keeping their noses to the grindstone gave them a leg up on their high school peers. But on the eve of graduation, the best friends suddenly realize that they may have missed out on the special moments. Determined to make up for lost time, the girls decide to cram four years of not-to-be missed fun into one night.
    </p>
    <b-button block href="/Movies/Booksmart" target="_blank" variant="info">Booksmart Showing This Week &rArr;</b-button>





  <h4 class="title-color"></h4>
  <b-button-group>
    <BooksmartR />
    <BooksmartF />
    <Nineteen />
  </b-button-group>

</b-card>
</template>

<style>


</style>

<script>




import BooksmartR from '@/components/Films/Booksmart/BooksmartR'
import BooksmartF from '@/components/Films/Booksmart/BooksmartF'
import Nineteen from '@/components/Films/Year/Nineteen'






export default {
  components: {
    BooksmartR,
    BooksmartF,
    Nineteen,

      }
}
</script>



