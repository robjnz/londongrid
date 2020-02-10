<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">Tv Series free to watch online</h1>

        <br /><br />
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
