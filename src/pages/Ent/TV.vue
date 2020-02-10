<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">Television & Movies Online</h1>
        <br />
        <div>
          <b-card-group deck class="mb-3">
            <b-card bg-variant="dark" text-variant="white" title="Television">
              <p class="title-color"></p>
              <b-button-group>
                <b-button
                  href    = "https://kutt.it/tvquide"
                  target  = "_blank"
                  variant = "info"
                  >TV Guide</b-button
                >
              </b-button-group>
              <br />
              <br />
              <b-button-group>
                <b-button
                  href    = "https://kutt.it/bbc-iplayer"
                  target  = "_blank"
                  variant = "info"
                  >BBC I Player</b-button
                >
                <b-button
                  href    = "https://kutt.it/itv-hub"
                  target  = "_blank"
                  variant = "info"
                  >ITV Hub</b-button
                >
              </b-button-group>
              <br />
              <br />
              <b-button-group>
                <b-button
                  href    = "https://kutt.it/channel4"
                  target  = "_blank"
                  variant = "info"
                  >Channel 4</b-button
                >
                <b-button
                  href    = "https://kutt.it/my5"
                  target  = "_blank"
                  variant = "info"
                  >My 5</b-button
                >
                <b-button
                  href    = "https://kutt.it/oklive"
                  target  = "_blank"
                  variant = "info"
                  >OK Live TV</b-button
                >
              </b-button-group>
            </b-card>

            <b-card bg-variant="dark" text-variant="white" title="Movies">
              <p class="title-color"></p>
              <b-button-group>
                <b-button
                  href    = "http://bit.ly/2ZbdiAk"
                  target  = "_blank"
                  variant = "info"
                  >123 Movies</b-button
                >
                <b-button
                  href    = "https://kutt.it/hdonline"
                  target  = "_blank"
                  variant = "info"
                  >HD Online</b-button
                >
                <b-button
                  href    = "http://www0.yesmovies.net"
                  target  = "_blank"
                  variant = "info"
                  >Yesmovies
                </b-button>
              </b-button-group>
            </b-card>
          </b-card-group>
        </div>
        <br>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Tv & Movies",
    meta : [
      {
        name   : "description",
        content: 
          "tv guide, free online movie chanels, 123 Movies, Yesmovies, BBC I Player and more!"
      }
    ]
  }
};
</script>
