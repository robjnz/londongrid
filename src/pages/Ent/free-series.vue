<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
            <i class="fas fa-tv"></i>
          </span>
          Tv Series
        </h1>
        <h3 class="tory">Free To Watch Online</h3>
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <b-card-group deck class="mb-3 ">
                  <Thrones /><!--Game of Thrones-->
                  <Grimm /><!--Grimm-->
                  <Homeland /><!--Homeland -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Picard /><!--star trek -->
                  <Handmaid /><!--The Handmaid's Tale-->
                  <Trial /><!--The Trial of Christine Keeler-->
                </b-card-group>
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </Layout>
</template>

<script>
import Thrones from "@/components/series/Thrones";
import Grimm from "@/components/series/Grimm";
import Handmaid from "@/components/series/Handmaid";
import Homeland from "@/components/series/Homeland";
import Picard from "@/components/series/Picard";
import Trial from "@/components/series/Trial";
import Blank from "@/components/Films/Blank";

export default {
  metaInfo: {
    title: "Free-Tv Series",
    meta : [
      {
        name   : "description",
        content: 
          "Free Tv series to watch online Star Trek Picard, Game of Thrones, Grimm, Homeland, The Handmaids Tale, Christine Keeler."
      }
    ]
  },
  components: {
    Blank,
    Grimm,
    Handmaid,
    Homeland,
    Picard,
    Thrones,
    Trial
  }
};
</script>
