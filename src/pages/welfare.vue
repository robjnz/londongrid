<template>
  <Layout>
    <section main>
      <b-container>
        <b-row>
          <h1 class="title-color">Welfare Rights</h1>
          <div>
            <b-card-group deck class="mb-3">
              <b-card bg-variant="dark" text-variant="white" title="Citizens Advice" align="center">
                <p class="title-color">
                  Free, independent, confidential and impartial advice to everyone on their rights and responsibilities..
                  <br />
                  <br />
                </p>
                <b-button href="http://bit.ly/2OdrWBu" target="_blank" variant="info">open</b-button>
              </b-card>

              <b-card
                bg-variant   = "dark"
                text-variant = "white"
                title        = "Disability Rights"
                align        = "center"
              >
                <p class="title-color">
                  Advice and information.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
                <b-button href="http://bit.ly/2OO1mfn" target="_blank" variant="info">open</b-button>
              </b-card>

              <b-card bg-variant="dark" text-variant="white" title="Welfare Rights" align="center">
                <p class="title-color">
                  Advice and information.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
                <b-button href="http://bit.ly/2zlCwhK" target="_blank" variant="info">open</b-button>
              </b-card>
            </b-card-group>
            <br><br><br>
          </div>
        </b-row>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Welfare",
    meta : [{ name: "description", content: "Welfare Rights" }]
  }
};
</script>