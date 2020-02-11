<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">Restaurants Guides</h1>
        <br />

        <div>
          <b-card-group deck class="mb-3">
            <b-card bg-variant="dark" text-variant="white" title="">
              <p class="title-color"></p>
              <b-button-group>
                <b-button
                  href    = "https://kutt.it/designmynight"
                  target  = "_blank"
                  variant = "info"
                  >Design My Night</b-button
                >
                <b-button
                  href    = "https://kutt.it/gastroranking"
                  target  = "_blank"
                  variant = "info"
                  >Gastro Ranking</b-button
                >
                <b-button
                  href    = "https://kutt.it/opentable"
                  target  = "_blank"
                  variant = "info"
                  >Open Table</b-button
                >
              </b-button-group>
            </b-card>
          </b-card-group>
        </div>
        <br><br><br><br><br><br><br><br><br><br>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Restaurants Guides",
    meta : [
      {
        name   : "description",
        content: "Places to eat, Restaurants Guides in east London "
      }
    ]
  }
};
</script>
