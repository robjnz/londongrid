<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian"><span style="font-size: 1em; color: Dodgerblue;">
        <i class="fas fa-utensils"></i>
      </span> Restaurants Guides</h1>
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <div>
                  <b-card-group deck class="mb-3">
                    <b-card bg-variant="dark" text-variant="white" title="">
                      <p class="title-color"></p>
                      <b-button-group>
                        <b-button
                          href    = "http://bit.ly/2DcVBpw"
                          target  = "_blank"
                          variant = "info"
                          >Design My Night</b-button
                        >
                        <b-button
                          href    = "http://bit.ly/2PoFRFG"
                          target  = "_blank"
                          variant = "info"
                          >Gastro Ranking</b-button
                        >
                        <b-button
                          href    = "http://bit.ly/2qeQOLJ"
                          target  = "_blank"
                          variant = "info"
                          >Open Table</b-button
                        >
                      </b-button-group>
                    </b-card>
                  </b-card-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
