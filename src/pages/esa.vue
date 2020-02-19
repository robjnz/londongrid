<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
            <i class="fab fa-youtube"></i>
          </span>
          ESA
        </h1>
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <b-card-group deck class="mb-3">
                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = " Claiming Process "
                    align        = "center"
                  >
                    <br />
                    <b-embed
                      type   = "iframe"
                      aspect = "16by9"
                      src    = "https://www.youtube.com/embed/LnredFnaP8Q?ecver=1"
                      allowfullscreen
                    ></b-embed>
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Work Capability Assessment"
                    align        = "center"
                  >
                    <b-embed
                      type   = "iframe"
                      aspect = "16by9"
                      src    = "https://www.youtube.com/embed/MJV2Dex1zhY?ecver=1"
                      allowfullscreen
                    ></b-embed>
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Mandatory Reconsideration"
                    align        = "center"
                  >
                    <b-embed
                      type   = "iframe"
                      aspect = "16by9"
                      src    = "https://www.youtube.com/embed/TntQE1V3m_Q?ecver=1"
                      allowfullscreen
                    ></b-embed>
                  </b-card>
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "SSCS1 Form to appeal "
                    align        = "center"
                  >
                    <b-embed
                      type   = "iframe"
                      aspect = "16by9"
                      src    = "https://www.youtube.com/embed/WFt5iTiSmp8"
                      allowfullscreen
                    ></b-embed>
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Overview of an ESA / PIP"
                    align        = "center"
                  >
                    <b-embed
                      type   = "iframe"
                      aspect = "16by9"
                      src    = "https://www.youtube.com/embed/76GDhGIi60A"
                      allowfullscreen
                    ></b-embed>
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = ""
                    align        = "center"
                  >
                  </b-card>
                </b-card-group>
              </div>
            </div>
          </div>
        </div>
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
