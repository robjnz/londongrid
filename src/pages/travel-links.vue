<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
           <i class="fas fa-map-marked-alt"></i>
          </span>
          Travel Links
        </h1>
        <br />

        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <b-card-group deck class="mb-3">
                  <b-card bg-variant="dark" text-variant="white" title="">
                    <p class="asian"></p>
                    <b-button-group>
                      <b-button
                        href    = "http://bit.ly/2PbnYGQ"
                        target  = "_blank"
                        variant = "info"
                        >Live Bus Countdown</b-button
                      >
                      <b-button
                        href    = "http://bit.ly/2RqQyFO"
                        target  = "_blank"
                        variant = "info"
                        >Live Traffic Cams</b-button
                      >
                      <b-button
                        href    = "http://bit.ly/2O42z61"
                        target  = "_blank"
                        variant = "info"
                        >London City Airport</b-button
                      >
                      <b-button
                        href    = "http://bit.ly/2Qt7p9S"
                        target  = "_blank"
                        variant = "info"
                        >Live Flight Tracker</b-button
                      >
                    </b-button-group>
                  </b-card>
                </b-card-group>
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
    title: "Travel-Links",
    meta : [
      {
        name   : "description",
        content: 
          "Live Bus Countdown, London City Airport, Live Traffic Cams and Live Flight Tracker in east London."
      }
    ]
  }
};
</script>
