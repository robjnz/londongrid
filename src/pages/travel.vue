<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="title-color">Live Train Information in East London</h1>
        <div>
          <Barking />
          <Bexley />
          <Greenwich />
          <Hackney />
          <Havering />
          <Lewisham />
          <Newham />
          <Redbridge />
          <TowerHamlets />
          <WalthamForest />
        </div>
      </b-container>
    </section>
  </Layout>
</template>

<script>
import Barking from "@/components/LiveTrain/Barking";
import Bexley from "@/components/LiveTrain/Bexley";
import Greenwich from "@/components/LiveTrain/Greenwich";
import Hackney from "@/components/LiveTrain/Hackney";
import Havering from "@/components/LiveTrain/Havering";
import Lewisham from "@/components/LiveTrain/Lewisham";
import Newham from "@/components/LiveTrain/Newham";
import Redbridge from "@/components/LiveTrain/Redbridge";
import TowerHamlets from "@/components/LiveTrain/TowerHamlets";
import WalthamForest from "@/components/LiveTrain/WalthamForest";

export default {
  metaInfo: {
    title: "Travel",
    meta : [
      {
        name   : "description",
        content: 
          "Live updates for river bus, DLR, overground, underground tube, train arival and departure times in east London "
      }
    ]
  },
  components: {
    Barking,
    Bexley,
    Greenwich,
    Hackney,
    Havering,
    Lewisham,
    Newham,
    Redbridge,
    TowerHamlets,
    WalthamForest
  }
};
</script>
