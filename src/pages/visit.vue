<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
            <i class="fas fa-landmark"></i>
          </span>
          Places to Visit
        </h1>
        <br />
        <b-row>
          <div class="port container" id="works">
            <div class="row">
              <div class="work col-md-12">
                <div class="work-card">
                  <div>
                    <b-card-group deck class="mb-3">
                      <bexley /><!--Bexley Park Wood-->
                      <chingford /><!--Chingford Sky Trail-->
                      <danson /><!--Danson House-->
                    </b-card-group>
                    <b-card-group deck class="mb-3">
                      <docklands /><!--Docklands Museum-->
                      <eastbury /><!--Eastbury Manor House-->
                      <elizabeth /><!--Elizabeth's Hunting Lodg-->
                    </b-card-group>
                    <b-card-group deck class="mb-3">
                      <eltham /><!--Eltham place-->
                      <epping /><!--Epping Forest-->
                      <fairlop /><!--Fairlop Waters-->
                    </b-card-group>
                    <b-card-group deck class="mb-3">
                      <geffrye /><!--Geffrye Museum-->
                      <hackney /><!--hackney city farm -->
                      <hall /><!--Hall Place & Gardens-->
                    </b-card-group>
                    <b-card-group deck class="mb-3">
                      <havering /><!--Havering Park-->
                      <horniman /><!--Horniman Museam & Park-->
                      <hospital /><!--Hospital Chapel-->
                    </b-card-group>
                    <b-card-group deck class="mb-3">
                      <house /><!--House Mill-->
                      <jack /><!--Jack the Ripper-->
                      <lee /><!--Lee Valley-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <mayesbrook /><!--Mayesbrook Park-->
                      <mudchute /><!--mudchute-->
                      <newham /><!--Newham City Farm -->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <queen /><!--Queen Elizabeth Olympic Park-->
                      <ragged /><!--Ragged School Museum-->
                      <rainham /><!--Rainham Hall-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <ranger /><!--Ranger House-->
                      <red /><!--Red House-->
                      <greenwich /><!--Royal Museums Greenwich-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <severndroog /><!--Severndroog Castle-->
                      <antioch /><!--St. Margaret of Antioch-->
                      <sutton /><!---Sutton House-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <thames /><!--Thames barrier-->
                      <tower /><!-- Tower of London-->
                      <trinity /><!--Trinity Buoy Wharf-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <upminster /><!--Upminster Windmill-->
                      <valence /><!--Valence House Museum-->
                      <valentines /><!--Valentines Mansions-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <victoria /><!--victoria park-->
                      <viktor /><!--Viktor Wyne Museum-->
                      <wanstead /><!--Wanstead Flats-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <william /><!--William Morris Gallery & Park-->
                      <Blank />
                      <Blank />
                    </b-card-group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-row>
        <br /><br /><br />
      </b-container>
    </section>
  </Layout>
</template>

<script>
import Blank from "@/components/Football/Blank";
import antioch from "@/components/Visit/antioch";
import bexley from "@/components/Visit/bexley";
import chingford from "@/components/Visit/chingford";
import danson from "@/components/Visit/danson";
import docklands from "@/components/Visit/docklands";
import eastbury from "@/components/Visit/eastbury";
import elizabeth from "@/components/Visit/elizabeth";
import eltham from "@/components/Visit/eltham";
import epping from "@/components/Visit/epping";
import fairlop from "@/components/Visit/fairlop";
import greenwich from "@/components/Visit/greenwich";
import geffrye from "@/components/Visit/geffrye";
import hackney from "@/components/Visit/hackney";
import hall from "@/components/Visit/hall";
import havering from "@/components/Visit/havering";
import horniman from "@/components/Visit/horniman";
import hospital from "@/components/Visit/hospital";
import house from "@/components/Visit/house";
import jack from "@/components/Visit/jack";
import lee from "@/components/Visit/lee";
import mayesbrook from "@/components/Visit/mayesbrook";
import mudchute from "@/components/Visit/mudchute";
import newham from "@/components/Visit/newham";
import queen from "@/components/Visit/queen";
import ragged from "@/components/Visit/ragged";
import rainham from "@/components/Visit/rainham";
import ranger from "@/components/Visit/ranger";
import red from "@/components/Visit/red";
import severndroog from "@/components/Visit/severndroog";
import sutton from "@/components/Visit/sutton";
import thames from "@/components/Visit/thames";
import tower from "@/components/Visit/tower";
import trinity from "@/components/Visit/trinity";
import upminster from "@/components/Visit/upminster";
import valence from "@/components/Visit/valence";
import valentines from "@/components/Visit/valentines";
import victoria from "@/components/Visit/victoria";
import viktor from "@/components/Visit/viktor";
import wanstead from "@/components/Visit/wanstead";
import william from "@/components/Visit/william";

export default {
  metaInfo: {
    title: "Visit",
    meta : [
      {
        name   : "description",
        content: "Places of historical interest, to visit in east London ."
      }
    ]
  },
  components: {
    Blank,
    antioch,
    bexley,
    chingford,
    danson,
    docklands,
    eastbury,
    elizabeth,
    eltham,
    epping,
    fairlop,
    greenwich,
    geffrye,
    hackney,
    hall,
    havering,
    horniman,
    hospital,
    house,
    jack,
    lee,
    mayesbrook,
    mudchute,
    newham,
    queen,
    ragged,
    rainham,
    ranger,
    red,
    severndroog,
    sutton,
    thames,
    tower,
    trinity,
    upminster,
    valence,
    valentines,
    victoria,
    viktor,
    wanstead,
    william
  }
};
</script>
