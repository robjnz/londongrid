<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">2020 Movies free to watch online</h1>
        <b-button-group>
          <twentyB />
          <nineteenB />
          <eighteenB />
        </b-button-group>
        <br /><br />
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <Alert />
                <b-card-group deck class="mb-3 ">
                  <Emma /><!--Emma-->
                  <Dolittle /><!--Dolittle-->
                  <Parasite /><!--Parasite-->
                </b-card-group>
                <b-card-group deck class="mb-3 ">
                  <Sonic /><!--Sonic the Hedgehog-->
                  <Anya /><!--Waiting for Anya-->
                  <Blank />
                </b-card-group>
              </div>
            </div>
          </div>
        </div>
        <br />
      </b-container>
    </section>
  </Layout>
</template>

<script>
import nineteenB from "@/pages/Ent/nineteenB";
import eighteenB from "@/pages/Ent/eighteenB";
import twentyB from "@/pages/Ent/twentyB";
import Alert from "@/components/Films/Alert/Alert";
import Blank from "@/components/Films/Blank";
import Anya from "@/components/Twenty/Anya";
import Dolittle from "@/components/Twenty/Dolittle";
import Emma from "@/components/Twenty/Emma";
import Sonic from "@/components/Twenty/Sonic";
import Parasite from "@/components/Twenty/Parasite";

export default {
  metaInfo: {
    title: "Free Movies",
    meta : [
      {
        name   : "description",
        content: "Movies made in 2020 free to watch online."
      }
    ]
  },
  components: {
    eighteenB,
    nineteenB,
    twentyB,
    Alert,
    Blank,
    Anya,
    Dolittle,
    Emma,
    Parasite,
    Sonic
  }
};
</script>
