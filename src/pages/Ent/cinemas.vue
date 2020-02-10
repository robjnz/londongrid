<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="title-color">Cinemas</h1>
        <br />

        <div>
          <b-card-group deck class="mb-3">
            <b-card bg-variant="dark" text-variant="white" title="Cineworld">
              <p class="title-color"></p>
              <b-button-group>
                <b-button
                  href    = "https://kutt.it/cineworld-bexley"
                  target  = "_blank"
                  variant = "info"
                  >Bexleyheath</b-button
                >
                <b-button
                  href    = "https://kutt.it/cineworld-o2"
                  target  = "_blank"
                  variant = "info"
                  >Greenwich O2</b-button
                >
                <b-button
                  href    = "https://kutt.it/cineworld-ilford"
                  target  = "_blank"
                  variant = "info"
                  >Ilford</b-button
                >
              </b-button-group>
              <br />
              <br />
              <b-button-group>
                <b-button
                  href    = "https://kutt.it/cineworld-west"
                  target  = "_blank"
                  variant = "info"
                  >West India Quay</b-button
                >
              </b-button-group>
            </b-card>

            <b-card bg-variant="dark" text-variant="white" title="Odeon">
              <p class="title-color"></p>
              <b-button-group>
                <b-button
                  href    = "https://kutt.it/odeon-greenwich"
                  target  = "_blank"
                  variant = "info"
                  >Greenwich</b-button
                >
                <b-button
                  href    = "https://kutt.it/odeon-woodford"
                  target  = "_blank"
                  variant = "info"
                  >South Woodford</b-button
                >
              </b-button-group>
            </b-card>
          </b-card-group>

          <b-card-group deck class="mb-3">
            <b-card
              bg-variant   = "dark"
              text-variant = "white"
              title        = "Picturehouses"
            >
              <p class="title-color"></p>
              <b-button-group>
                <b-button
                  href    = "https://kutt.it/picturehouse-greenwich"
                  target  = "_blank"
                  variant = "info"
                  >Greenwich</b-button
                >
                <b-button
                  href    = "https://kutt.it/picturehouse-hackney"
                  target  = "_blank"
                  variant = "info"
                  >Hackney</b-button
                >
                <b-button
                  href    = "https://kutt.it/picturehouse-stratford"
                  target  = "_blank"
                  variant = "info"
                  >Stratford</b-button
                >
              </b-button-group>
            </b-card>

            <b-card
              bg-variant   = "dark"
              text-variant = "white"
              title        = "Showcase Cinemas"
            >
              <p class="title-color"></p>
              <b-button-group>
                <b-button
                  href    = "https://kutt.it/showcase-newham"
                  target  = "_blank"
                  variant = "info"
                  >Newham</b-button
                >
              </b-button-group>
            </b-card>
          </b-card-group>

          <b-card-group deck class="mb-3">
            <b-card bg-variant="dark" text-variant="white" title="Vue">
              <p class="title-color"></p>
              <b-button-group>
                <b-button
                  href    = "https://kutt.it/vue-romford"
                  target  = "_blank"
                  variant = "info"
                  >Romford</b-button
                >
                <b-button
                  href    = "https://kutt.it/vue-stratford"
                  target  = "_blank"
                  variant = "info"
                  >Statford</b-button
                >
              </b-button-group>
            </b-card>

            <b-card bg-variant="dark" text-variant="white" title="">
              <p class="title-color"></p>
            </b-card>
          </b-card-group>
        </div>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Cinemas",
    meta : [
      {
        name   : "description",
        content: 
          "cinemas in east London, Cineworld, Odeon, Picturehouses, Showcase Cinemas and Vue."
      }
    ]
  }
};
</script>
