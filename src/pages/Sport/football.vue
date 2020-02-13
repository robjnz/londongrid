<template>
  <Layout>
    <section main>
      <b-container>
        <h1>Football Clubs in East London</h1>
        <h2 class="asian">Home Matches & World Football Match Results</h2>
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
        <!--<iframe src="https://www.unogoal.life/free_livescore.aspx" width="100%" height="5000"  scrolling="auto" frameborder="0"></iframe><p style="text-align: center;"><a href="https://www.unogoal.in" title="Powered by Unogoal livescores">www.unogoal.in</a></p>
-->
        <h1 class="title-color">Barking & Dagenham</h1>
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <b-card-group deck class="mb-3">
                  <Barking />
                  <DagRedbridge />
                  <Dagenham />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <May />
                  <Blank />
                  <Blank />
                </b-card-group>

                <h1 class="title-color">Bexley</h1>

                <b-card-group deck class="mb-3">
                  <Bexley />
                  <Erithtown />
                  <Erithbel />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <Phoenix />
                  <Welling />
                  <Blank />
                </b-card-group>

                <h1 class="title-color">Greenwich</h1>
                <b-card-group deck class="mb-3">
                  <Bridon />
                  <Charlton />
                  <Charltonwomen />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <Greenwich />
                  <Blank />
                  <Blank />
                </b-card-group>

                <h1 class="title-color">Hackney</h1>
                <b-card-group deck class="mb-3">
                  <Hackney />
                  <Blank />
                  <blank />
                </b-card-group>

                <h1 class="title-color">Havering</h1>

                <b-card-group deck class="mb-3">
                  <Hornchurch />
                  <Romford />
                  <Blank />
                </b-card-group>

                <h1 class="title-color">Lewisham</h1>

                <b-card-group deck class="mb-3">
                  <Forest />
                  <Lewisham />
                  <blank />
                </b-card-group>

                <h1 class="title-color">Newham</h1>

                <b-card-group deck class="mb-3">
                  <Canning />
                  <Clapton />
                  <Lopes />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <WestHam />
                  <WesthamWoman />
                  <Blank />
                </b-card-group>

                <h1 class="title-color">Redbridge</h1>

                <b-card-group deck class="mb-3">
                  <Barkingside />
                  <Frenford />
                  <Ilford />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <Newbury />
                  <Red />
                  <blank />
                </b-card-group>

                <h1 class="title-color">Tower Hamlets</h1>

                <b-card-group deck class="mb-3">
                  <Bengal />
                  <Tower />
                  <Blank />
                </b-card-group>

                <h1 class="title-color">Waltham Forest</h1>

                <b-card-group deck class="mb-3">
                  <Leyton />
                  <Orient />
                  <OrientWoman />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <Walthamstow />
                  <Blank />
                  <Blank />
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
import Barking from "@/components/Football/Barking";
import DagRedbridge from "@/components/Football/DagRedbridge";
import Erithtown from "@/components/Football/Erithtown";
import Erithbel from "@/components/Football/Erithbel";
import Dagenham from "@/components/Football/Dagenham";
import Bexley from "@/components/Football/Bexley";
import Phoenix from "@/components/Football/Phoenix";
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
    Walthamstow
  }
};
</script>
