<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
            <i class="fas fa-envelope-open-text"></i>
          </span>
          Contact me
        </h1>
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <b-embed
                  type         = "iframe"
                  aspect       = "16by9"
                  src          = "https://docs.google.com/forms/d/e/1FAIpQLSfjf7_VgY_YJAuBbko4rUeoXfxUAYW6VKpxeDqPFgkY-5JBvA/viewform?embedded=true"
                  width        = "640"
                  height       = "795"
                  frameborder  = "0"
                  marginheight = "0"
                  marginwidth  = "0"
                  >Loading..." allowfullscreen ></b-embed
                >
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
    meta : [{ name: "description", content: "Contact Me" }]
  }
};
</script>
