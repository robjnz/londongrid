<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
            <i class="far fa-futbol"></i>
          </span>
          Home Matches
        </h1>
        <date />
        <br />
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <b-embed
                  type        = "iframe"
                  aspect      = "16by9"
                  src         = "https://www.unogoal.life/free_livescore.aspx"
                  scrolling   = "auto"
                  frameborder = "0"
                >
                  allowfullscreen ></b-embed
                >
              </div>
            </div>
          </div>
        </div>

        <br /><br />
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <b-card-group deck class="mb-3">
                  <Barking />
                  <Barkingside />
                  <Bexley />
                </b-card-group>
                <b-card-group deck class="mb-3">
                  <Bridon />
                  <Canning />
                  <Charlton />
                </b-card-group>
                <b-card-group deck class="mb-3">
                  <Charltonwomen />
                  <Dagenham />
                  <DagRedbridge />
                </b-card-group>
                <b-card-group deck class="mb-3">
                  <Erithtown />
                  <Erithbel />
                  <Forest />
                </b-card-group>
                <b-card-group deck class="mb-3">
                  <Greenwich />
                  <Hornchurch />
                  <Ilford />
                </b-card-group>
                <b-card-group deck class="mb-3">
                  <Lewisham />
                  <Orient />
                  <OrientWoman />
                </b-card-group>
                <b-card-group deck class="mb-3">
                  <Lopes />
                  <May />
                  <Newbury />
                </b-card-group>
                <b-card-group deck class="mb-3">
                  <Phoenix />
                  <PhoenixWomans />
                  <Red />
                </b-card-group>
                <b-card-group deck class="mb-3">
                  <Romford />
                  <Bengal />
                  <Tower />
                </b-card-group>
                <b-card-group deck class="mb-3">
                  <Walthamstow />
                  <Welling />
                  <WestHam />
                </b-card-group>
                <b-card-group deck class="mb-3">
                  <WesthamWoman />
                  <Blank />
                  <Blank />
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
import Barking from "@/components/Football/Barking";
import DagRedbridge from "@/components/Football/DagRedbridge";
import Erithtown from "@/components/Football/Erithtown";
import Erithbel from "@/components/Football/Erithbel";
import Dagenham from "@/components/Football/Dagenham";
import Bexley from "@/components/Football/Bexley";
import Phoenix from "@/components/Football/Phoenix";
import PhoenixWomans from "@/components/Football/PhoenixWomans";
import Welling from "@/components/Football/Welling";
import Blank from "@/components/Football/Blank";
import Bridon from "@/components/Football/Bridon";
import Charlton from "@/components/Football/Charlton";
import Charltonwomen from "@/components/Football/Charltonwomen";
import Greenwich from "@/components/Football/Greenwich";
import Hackney from "@/components/Football/Hackney";
import Hornchurch from "@/components/Football/Hornchurch";
import Romford from "@/components/Football/Romford";
import Forest from "@/components/Football/Forest";
import Lewisham from "@/components/Football/Lewisham";
import Canning from "@/components/Football/Canning";
import Clapton from "@/components/Football/Clapton";
import Lopes from "@/components/Football/Lopes";
import WestHam from "@/components/Football/WestHam";
import WesthamWoman from "@/components/Football/WesthamWoman";
import Barkingside from "@/components/Football/Barkingside";
import Frenford from "@/components/Football/Frenford";
import Ilford from "@/components/Football/Ilford";
import Newbury from "@/components/Football/Newbury";
import May from "@/components/Football/May";
import Red from "@/components/Football/Red";
import Bengal from "@/components/Football/Bengal";
import Tower from "@/components/Football/Tower";
import Leyton from "@/components/Football/Leyton";
import OrientWoman from "@/components/Football/OrientWoman";
import Orient from "@/components/Football/Orient";
import Walthamstow from "@/components/Football/Walthamstow";
import date from "@/components/Home/date";

export default {
  metaInfo: {
    title: "Football",
    meta : [
      {
        name   : "description",
        content: 
          "East London Football, Home Matches & World Match Results, 2020"
      }
    ]
  },
  components: {
    Barking,
    Dagenham,
    DagRedbridge,
    Erithtown,
    Erithbel,
    Bexley,
    Phoenix,
    Welling,
    Blank,
    Bridon,
    Charlton,
    Charltonwomen,
    Greenwich,
    Hackney,
    Hornchurch,
    Romford,
    Forest,
    Lewisham,
    Canning,
    Clapton,
    Lopes,
    WestHam,
    WesthamWoman,
    Barkingside,
    Frenford,
    Ilford,
    Newbury,
    May,
    Red,
    Bengal,
    Tower,
    Leyton,
    OrientWoman,
    Orient,
    Walthamstow,
    PhoenixWomans,
    date
  }
};
</script>
