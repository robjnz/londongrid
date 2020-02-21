<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
            <i class="fas fa-film"></i>
          </span>
          Cinemas
        </h1>
        <h3 class="tory">Movies Showing This Week Sun 16 - Sat 22 Feb 2020</h3>
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <h3>Cineworld</h3>
                <b-card-group deck class="mb-3">
                  <bexley />
                  <greenwich />
                  <ilford />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <west />
                  <Blank />
                  <Blank />
                </b-card-group>
              </div>
            </div>
          </div>
        </div>

        <h1 class="asian">Cinemas</h1>
        <br />

        <div>
          <b-card-group deck class="mb-3">
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
          </b-card-group>

          <b-card-group deck class="mb-3">
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
          </b-card-group>
        </div>
      </b-container>
    </section>
  </Layout>
</template>

<script>
import bexley from "@/components/Cineworld/bexley";
import greenwich from "@/components/Cineworld/greenwich";
import ilford from "@/components/Cineworld/ilford";
import west from "@/components/Cineworld/west";
import Blank from "@/components/Films/Blank";

export default {
  metaInfo: {
    title: "Cinemas",
    meta : [
      {
        name   : "description",
        content: 
          "Whats on this week at cinemas in east London, Cineworld, Odeon, Picturehouses, Showcase Cinemas and Vue."
      }
    ]
  },
  components: {
    bexley,
    greenwich,
    ilford,
    west,
    Blank
  }
};
</script>
