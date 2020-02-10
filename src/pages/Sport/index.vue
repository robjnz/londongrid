<template>
  <Layout>
    <section main>
      <b-container>
        <h1>Sports in East London</h1>

        <br />
        <br />

        <div>
          <b-card-group deck class="mb-3">
            <b-card bg-variant="dark" text-variant="white" title="Football">
              <a href="/Sport/football" target="_blank"
                ><b-img
                  src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1545218085/football_ukksy6.jpg"
                  fluid-grow
                  alt = "football"
              /></a>
            </b-card>

            <b-card bg-variant="dark" text-variant="white" title="Rugby">
              <a href="/Sport/rugby" target="_blank"
                ><b-img
                  src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1545218073/rugby_dtat5t.jpg"
                  fluid-grow
                  alt = "Rugby"
              /></a>
            </b-card>

            <b-card bg-variant="dark" text-variant="white" title="Running">
              <a href="/Sport/running" target="_blank"
                ><b-img
                  src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1545218079/ruuning_vuoesh.jpg"
                  fluid-grow
                  alt = "Running"
              /></a>
            </b-card>
          </b-card-group>

          <b-card-group deck class="mb-3">
            <b-card bg-variant="dark" text-variant="white" title="Swimming">
              <a href="/Sport/swimming" target="_blank"
                ><b-img
                  src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1545218065/swimming_wsyinf.jpg"
                  fluid-grow
                  alt = "Swimming"
              /></a>
            </b-card>

            <b-card bg-variant="dark" text-variant="white" title="Tennis">
              <a href="/Sport/tennis" target="_blank"
                ><b-img
                  src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1545328653/tennis_ge0k2f.jpg"
                  fluid-grow
                  alt = ""
              /></a>
            </b-card>

            <b-card bg-variant="dark" text-variant="white" title="">
              <a href="" target="_blank"><b-img src="" fluid-grow alt=""/></a>
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
    title: "Sports",
    meta : [
      {
        name   : "description",
        content: 
          "Sports information in east London football clubs, rugby clubs, running clubs, swimming pools and tennis courts"
      }
    ]
  }
};
</script>
