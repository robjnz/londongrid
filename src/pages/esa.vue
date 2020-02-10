<template>
  <Layout>
    <section main>
      <b-container>
        <b-row>
          <b-col><h1 class="title-color">ESA</h1></b-col>
        </b-row>
        <b-row>
          <b-col
            ><iframe
              width       = "350"
              height      = "350"
              src         = "https://www.youtube.com/embed/LnredFnaP8Q?ecver=1"
              frameborder = "0"
              allow       = "autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </b-col>
          <b-col
            ><iframe
              width       = "350"
              height      = "350"
              src         = "https://www.youtube.com/embed/MJV2Dex1zhY?ecver=1"
              frameborder = "0"
              allow       = "autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </b-col>
          <b-col>
            <iframe
              width       = "350"
              height      = "350"
              src         = "https://www.youtube.com/embed/TntQE1V3m_Q?ecver=1"
              frameborder = "0"
              allow       = "autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <iframe
              width       = "350"
              height      = "350"
              src         = "https://www.youtube.com/embed/WFt5iTiSmp8"
              frameborder = "0"
              allow       = "autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
            <p class="card-text"></p>
          </b-col>
          <b-col>
            <iframe
              width       = "350"
              height      = "350"
              src         = "https://www.youtube.com/embed/76GDhGIi60A"
              frameborder = "0"
              allow       = "autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
            <p class="card-text"></p>
          </b-col>
          <b-col> </b-col>
        </b-row>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Esa",
    meta : [
      {
        name   : "description",
        content: 
          "Youtube videos explaining the esa, Employment and Support Allowance process."
      }
    ]
  }
};
</script>
