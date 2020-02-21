<template>
  <Layout>
    <section main>
      <b-container>
        <b-row>
          <h1 class="asian">
            <span style="font-size: 1em; color: Dodgerblue;">
              <i class="fas fa-home"></i>
            </span>
            Housing
          </h1>
          <div class="port container" id="works">
            <div class="row">
              <div class="work col-md-12">
                <div class="work-card">
                  <b-card-group deck class="mb-3">
                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "Crisis"
                      align        = "center"
                    >
                      <br />
                      <p class="asian">
                        National charity for homeless people.
                        <br />
                        <br />
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2xM4fWG"
                        target  = "_blank"
                        variant = "info"
                        >open</b-button
                      >
                    </b-card>

                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "Tenancy Deposit Protection"
                      align        = "center"
                    >
                      <p class="asian">
                        Landlord must put your deposit in a government-backed
                        tenancy deposit scheme.
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2O0zrfe"
                        target  = "_blank"
                        variant = "info"
                        >open</b-button
                      >
                    </b-card>

                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "Shelter"
                      align        = "center"
                    >
                      <br />
                      <p class="asian">
                        Shelter helps people struggling with bad housing or
                        homelessness.
                        <br />
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2DpTWxF"
                        target  = "_blank"
                        variant = "info"
                        >open</b-button
                      >
                    </b-card>
                  </b-card-group>

                  <b-card-group deck class="mb-3">
                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "SHP"
                      align        = "center"
                    >
                      <p class="asian">
                        London-wide charity working to prevent homelessness.
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2NB5J11"
                        target  = "_blank"
                        variant = "info"
                        >open</b-button
                      >
                    </b-card>

                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "Zoopla"
                      align        = "center"
                    >
                      <p class="asian">
                        Free search for homes to buy or rent in the UK.
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2MVBqNk"
                        target  = "_blank"
                        variant = "info"
                        >open</b-button
                      >
                    </b-card>

                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title
                      align = "center"
                    >
                      <p class="asian">
                        <br />
                        <br />
                        <br />
                      </p>
                    </b-card>
                  </b-card-group>
                </div>
              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Housing",
    meta : [{ name: "description", content: "Housing Information" }]
  }
};
</script>
