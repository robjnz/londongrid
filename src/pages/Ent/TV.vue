<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
            <i class="fas fa-stream"></i>
          </span>
          Television & Movies Online
        </h1>
        <br />
        <div>
          <div class="port container" id="works">
            <div class="row">
              <div class="work col-md-12">
                <div class="work-card">
                  <b-card-group deck class="mb-3">
                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "Television"
                    >
                      <b-button-group>
                        <b-button
                          href    = "http://bit.ly/38191zG"
                          target  = "_blank"
                          variant = "info"
                          >TV Guide</b-button
                        >
                      </b-button-group>
                      <br /><br />
                      <b-button-group>
                        <b-button
                          href    = "https://bbc.in/2OUZFRG"
                          target  = "_blank"
                          variant = "info"
                          >BBC I Player</b-button
                        >
                        <b-button
                          href    = "http://bit.ly/2yLfNLx"
                          target  = "_blank"
                          variant = "info"
                          >ITV Hub</b-button
                        >
                      </b-button-group>
                      <br />
                      <br />
                      <b-button-group>
                        <b-button
                          href    = "http://bit.ly/38WSVbM"
                          target  = "_blank"
                          variant = "info"
                          >Channel 4</b-button
                        >
                        <b-button
                          href    = "http://bit.ly/2AwAWdv"
                          target  = "_blank"
                          variant = "info"
                          >My 5</b-button
                        >
                        <b-button
                          href    = "http://bit.ly/2Jnmc3e"
                          target  = "_blank"
                          variant = "info"
                          >OK Live TV</b-button
                        >
                      </b-button-group>
                    </b-card>

                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "Movies"
                    >
                      <p class="title-color"></p>
                      <b-button-group>
                        <b-button
                          href    = "http://bit.ly/3c3WyPf"
                          target  = "_blank"
                          variant = "info"
                          >Batflix</b-button
                        >
                        <b-button
                          href    = "http://bit.ly/2Vncq9v"
                          target  = "_blank"
                          variant = "info"
                          >HD Online</b-button
                        >
                        <b-button
                          href    = "http://bit.ly/3a8IphE"
                          target  = "_blank"
                          variant = "info"
                          >Yesmovies
                        </b-button>
                      </b-button-group>
                    </b-card>
                  </b-card-group>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br />
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
</template>
