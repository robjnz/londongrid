<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Cineworld</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">

          <Cineworld />

      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="warning">Odeon</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <Odeon />
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="danger">Picturehouses</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <Picturehouses />
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="success">Showcase</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <Showcase/>
      </b-collapse>
    </b-card>

     <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="primary">Vue</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <Vue/>
      </b-collapse>
    </b-card>
  </div>
</template>

<style>
.mb-1{

  background: #343A40;
}

</style>

<script>
import Cineworld from '@/components/Films/Aladdin/Cineworld'
import Odeon from '@/components/Films/Aladdin/Odeon'
import Picturehouses from '@/components/Films/Aladdin/Picturehouses'
import Showcase from '@/components/Films/Aladdin/Showcase'
import Vue from '@/components/Films/Aladdin/Vue'



export default {
  components: {
    Cineworld,
    Odeon,
    Picturehouses,
    Showcase,
    Vue,
      }
}
</script>
