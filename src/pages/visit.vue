<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="labour">
          <span style="font-size: 1em; color:#ff00ff;;">
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
                      <docklands /><!--Docklands Museum-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <eastbury /><!--Eastbury Manor House-->
                      <elizabeth /><!--Elizabeth's Hunting Lodg-->
                      <eltham /><!--Eltham place-->
                    </b-card-group>
                    <b-card-group deck class="mb-3">
                      <epping /><!--Epping Forest-->
                      <fairlop /><!--Fairlop Waters-->
                      <geffrye /><!--Geffrye Museum-->
                    </b-card-group>
                    <b-card-group deck class="mb-3">   
                      <hackney /><!--hackney city farm -->
                      <hall /><!--Hall Place & Gardens-->
                      <havering /><!--Havering Park-->
                    </b-card-group>
                    <b-card-group deck class="mb-3">
                      <horniman /><!--Horniman Museam & Park-->
                      <hospital /><!--Hospital Chapel-->
                      <house /><!--House Mill-->
                    </b-card-group>
                    <b-card-group deck class="mb-3">
                      <jack /><!--Jack the Ripper-->
                      <lee /><!--Lee Valley-->
                      <mayesbrook /><!--Mayesbrook Park-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <mudchute /><!--mudchute-->
                      <newham /><!--Newham City Farm -->
                      <queen /><!--Queen Elizabeth Olympic Park-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <ragged /><!--Ragged School Museum-->
                      <rainham /><!--Rainham Hall-->
                      <ranger /><!--Ranger House-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <red /><!--Red House-->
                      <greenwich /><!--Royal Museums Greenwich-->
                      <severndroog /><!--Severndroog Castle-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <antioch /><!--St. Margaret of Antioch-->
                      <sutton /><!---Sutton House-->
                      <thames /><!--Thames barrier-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <tower /><!-- Tower of London-->
                      <trinity /><!--Trinity Buoy Wharf-->
                      <upminster /><!--Upminster Windmill-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <valence /><!--Valence House Museum-->
                      <valentines /><!--Valentines Mansions-->
                      <victoria /><!--victoria park-->
                      </b-card-group>
                    <b-card-group deck class="mb-3">
                      <viktor /><!--Viktor Wyne Museum-->
                      <wanstead /><!--Wanstead Flats-->
                      <william /><!--William Morris Gallery & Park-->
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
