<template>
  <Layout>
    <section main>
      <b-container>
        <b-row>
          <h1 class="asian">
            <span style="font-size: 1em; color: Dodgerblue;">
              <i class="fas fa-link"></i>
            </span>
            Links
          </h1>
          <div class="port container" id="works">
            <div class="row">
              <div class="work col-md-12">
                <div class="work-card">
                  <b-card-group deck class="mb-3">
                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "Buy With Confidence"
                      align        = "center"
                    >
                      <p class="asian">
                        All the businesses listed on this website have been
                        vetted and approved by Trading Standards to ensure that
                        they operate in a legal, honest and fair way.
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2N0FiNa"
                        target  = "_blank"
                        variant = "info"
                        >open</b-button
                      >
                    </b-card>

                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "The Phone book"
                      align        = "center"
                    >
                      <p class="asian">
                        The B.T phone book.
                        <br />
                        <br />
                        <br />
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2QXXD0u"
                        target  = "_blank"
                        variant = "info"
                        >open</b-button
                      >
                    </b-card>

                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "Fixya"
                      align        = "center"
                    >
                      <p class="asian">
                        Search or ask for information how to fix things.
                        <br />
                        <br />
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2MW3hN6"
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
                      title        = "Parking Ticket Expert"
                      align        = "center"
                    >
                      <p class="asian">
                        Fight parking ticket and learn about the tricks and
                        scams which are used to issue them.
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2MWku9n"
                        target  = "_blank"
                        variant = "info"
                        >open</b-button
                      >
                    </b-card>

                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "Royal Mail"
                      align        = "center"
                    >
                      <p class="asian">
                        Royal Mail web site.
                        <br />
                        <br />
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2QRXZWg"
                        target  = "_blank"
                        variant = "info"
                        >open</b-button
                      >
                    </b-card>

                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title        = "192"
                      align        = "center"
                    >
                      <p class="asian">
                        Search for People, Businesses & Places in the UK.
                        <br />
                        <br />
                      </p>
                      <b-button
                        href    = "https://www.192.com"
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
                      title        = "Telephone Preference Service"
                      align        = "center"
                    >
                      <b-embed
                        type   = "iframe"
                        aspect = "16by9"
                        src    = "https://www.youtube.com/embed/otT_8ghHiH8"
                        allowfullscreen
                      ></b-embed>
                      <p class="asian">
                        Record your preference not to receive
                        <br />unsolicited sales or marketing calls.
                        <br />
                      </p>
                      <b-button
                        href    = "http://bit.ly/2VUTbkH"
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
                      </p>
                    </b-card>

                    <b-card
                      bg-variant   = "dark"
                      text-variant = "white"
                      title
                      align = "center"
                    >
                      <p class="asian">
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
    title: "Links",
    meta : [{ name: "description", content: "links" }]
  }
};
</script>
