<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="title-color">Travel Links</h1>
        <br />

        <div>
          <b-card-group deck class="mb-3">
            <b-card bg-variant="dark" text-variant="white" title="">
              <p class="title-color"></p>
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
        <br><br><br><br><br><br><br><br>
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
