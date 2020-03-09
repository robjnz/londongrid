<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="labour">
          <span style="font-size: 1em; color: #ff00ff;">
            <i class="fas fa-glass-cheers"></i>
          </span>
          Nightclubs
        </h1>
        <date />
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <b-card-group deck class="mb-3">
                  <ATIK />
                  <Bar />
                  <Faces />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <Jhankaar />
                  <King />
                  <XOYO />
                </b-card-group>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
      </b-container>
    </section>
  </Layout>
</template>

<script>
import ATIK from "@/components/Nightclubs/ATIK";
import Bar from "@/components/Nightclubs/Bar";
import Faces from "@/components/Nightclubs/Faces";
import Jhankaar from "@/components/Nightclubs/Jhankaar";
import King from "@/components/Nightclubs/King";
import XOYO from "@/components/Nightclubs/XOYO";
import date from "@/components/Home/date";


export default {
  metaInfo: {
    title: "Night clubs",
    meta : [
      {
        name   : "description",
        content: 
          "Whats on in the east London night clubs this month, March 2020."
      }
    ]
  },
  components: {
    ATIK,
    Bar,
    Faces,
    Jhankaar,
    King,
    XOYO,
    date,
  }
};
</script>
