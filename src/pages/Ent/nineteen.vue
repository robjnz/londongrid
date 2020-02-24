<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">2019 Movies free to watch online</h1>
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
                  <Dog /><!--A Dog's Way Home-->
                  <Aladdin /><!--Aladdin-->
                  <Alita /><!--Alita Battle Angel -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Avengers /><!--Avengers Endgame -->
                  <Booksmart /><!--Booksmart-->
                  <Breakthrough /><!--Breakthrough -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Marvel /><!-- Captain Marvel -->
                  <Dragonball /><!--Dragon Ball Super -->
                  <Dumbo /><!--Dumbo -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Escape /><!--Escape Room -->
                  <Fighting /><!--Fighting With My Family -->
                  <Five /><!--Five Feet Apart-->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Glass /><!--Glass-->
                  <Happy /><!--Happy Death Day -->
                  <Beale /><!--If Beale Street Could talk-->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Johnwick /><!--Johnwick Parbellum -->
                  <Kalank /><!--Kalank-->
                  <Kavaludaari /><!--Kavaludaari -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Shot /><!--Long shot-->
                  <Maharshi /><!--Maharshi-->
                  <Missing /><!--Missing Link-->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Pokemon /><!-- Pokemon Detective Pikachu-->
                  <Rocketman /><!--Rocketman -->
                  <Joan /><!--Red Joan-->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Second /><!--Second Act-->
                  <Shazam /><!--Shazam-->
                  <Llorona /><!--The curse of la Llorona-->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Hole /><!--The Hole In The Ground-->
                  <King /><!--The Kid Who Would Be King-->
                  <Upside /><!--The Upside -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Vanishing /><!--The Vanishing-->
                  <Tolkien /><!--Tolkien -->
                  <Wonder /><!--Wonder park -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <NineteenSeventeen />
                  <Blank />
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
import Second from "@/components/Films/Second/Second";
import Mule from "@/components/Films/Mule";
import Vice from "@/components/Films/Vice";
import Blank from "@/components/Films/Blank";
import Ralph from "@/components/Films/Ralph";
import Upside from "@/components/Films/Upside/Upside";
import Spider from "@/components/Films/Spider";
import Destroyer from "@/components/Films/Destroyer";
import Preview from "@/components/Films/Preview";
import Creed from "@/components/Films/Creed";
import Dragonball from "@/components/Films/Dragonball/Dragonball";
import Colette from "@/components/Films/Colette";
import Lego from "@/components/Films/Lego";
import True from "@/components/Films/True";
import Caper from "@/components/Films/Caper";
import Black from "@/components/Films/Black";
import War from "@/components/Films/War";
import Aftermath from "@/components/Films/Aftermath";
import Serenityx from "@/components/Films/Serenityx";
import Gully from "@/components/Films/Gully";
import Kala from "@/components/Films/Kala";
import Ml from "@/components/Films/Ml";
import Luka from "@/components/Films/Luka";
import Badla from "@/components/Films/Badla";
import Border from "@/components/Films/Border";
import Bala from "@/components/Films/Bala";
import Guddiyan from "@/components/Films/Guddiyan";
import Kumbalangi from "@/components/Films/Kumbalangi";
import Hole from "@/components/Films/Hole/Hole";
import Total from "@/components/Films/Total";
import Bell from "@/components/Films/Bell";
import Kobiety from "@/components/Films/Kobiety";
import Kodathi from "@/components/Films/Kodathi";
import Maiden from "@/components/Films/Maiden";
import Fisherman from "@/components/Films/Fisherman";
import Fight from "@/components/Films/Fight";
import Prodigy from "@/components/Films/Prodigy";
import Band from "@/components/Films/Band";
import Milan from "@/components/Films/Milan";
import Burning from "@/components/Films/Burning";
import Ring from "@/components/Films/Ring";
import Hannah from "@/components/Films/Hannah";
import Rose from "@/components/Films/Rose";
import Crow from "@/components/Films/Crow";
import Dumbo from "@/components/Films/Dumbo/Dumbo";
import Junglee from "@/components/Films/Junglee";
import Lion from "@/components/Films/Lion";
import Notebook from "@/components/Films/Notebook";
import Lords from "@/components/Films/Lords";
import Lucifer from "@/components/Films/Lucifer";
import Rabb from "@/components/Films/Rabb";
import Airaa from "@/components/Films/Airaa/Airaa";
import Vanishing from "@/components/Films/Vanishing/Vanishing";
import VanishingC from "@/components/Films/Vanishing/VanishingC";
import Dog from "@/components/Films/Dog/Dog";
import Beale from "@/components/Films/Beale/Beale";
import Alita from "@/components/Films/Alita/Alita";
import AlitaC from "@/components/Films/Alita/AlitaC";
import Marvel from "@/components/Films/Marvel/Marvel";
import MarvelC from "@/components/Films/Marvel/MarvelC";
import Happy from "@/components/Films/Happy/Happy";
import HappyC from "@/components/Films/Happy/HappyC";
import Glass from "@/components/Films/Glass/Glass";
import Five from "@/components/Films/Five/Five";
import Fighting from "@/components/Films/Fighting/Fighting";
import FightingC from "@/components/Films/Fighting/FightingC";
import Everybody from "@/components/Films/Everybody/Everybody";
import Escape from "@/components/Films/Escape/Escape";
import Dragonworld from "@/components/Films/Dragonworld/Dragonworld";
import Peppa from "@/components/Films/Peppa/Peppa";
import ShazamC from "@/components/Films/Shazam/ShazamC";
import Shazam from "@/components/Films/Shazam/Shazam";
import King from "@/components/Films/King/King";
import Wonder from "@/components/Films/Wonder/Wonder";
import Avengers from "@/components/Films/Avengers/Avengers";
import Joan from "@/components/Films/Joan/Joan";
import Missing from "@/components/Films/Missing/Missing";
import Llorona from "@/components/Films/Llorona/Llorona";
import Pokemon from "@/components/Films/Pokemon/Pokemon";
import Shot from "@/components/Films/Shot/Shot";
import Tolkien from "@/components/Films/Tolkien/Tolkien";
import Kavaludaari from "@/components/Films/Kavaludaari/Kavaludaari";
import Maharshi from "@/components/Films/Maharshi/Maharshi";
import Kalank from "@/components/Films/Kalank/Kalank";
import Breakthrough from "@/components/Films/Breakthrough/Breakthrough";
import Johnwick from "@/components/Films/Johnwick/Johnwick";
import Aladdin from "@/components/Films/Aladdin/Aladdin";
import Booksmart from "@/components/Films/Booksmart/Booksmart";
import Rocketman from "@/components/Films/Rocketman/Rocketman";
import NineteenSeventeen from "@/components/Films/NineteenSeventeen";

export default {
  metaInfo: {
    title: "2019 Free Movies",
    meta : [
      {
        name   : "description",
        content: "Movies made in 2019 free to watch online."
      }
    ]
  },
  components: {
    Alert,
    Aftermath,
    Airaa,
    Aladdin,
    Alita,
    Avengers,
    Badla,
    Bala,
    Band,
    Beale,
    Bell,
    Black,
    Blank,
    Booksmart,
    Border,
    Breakthrough,
    Burning,
    Caper,
    Colette,
    Creed,
    Crow,
    Destroyer,
    Dog,
    Dragonball,
    Dragonworld,
    Dumbo,
    Escape,
    Everybody,
    Fight,
    Fighting,
    Fisherman,
    Five,
    Glass,
    Guddiyan,
    Gully,
    Hannah,
    Happy,
    Hole,
    Joan,
    Johnwick,
    Kala,
    Kalank,
    Kavaludaari,
    King,
    Kobiety,
    Kodathi,
    Kumbalangi,
    Lego,
    Llorona,
    Lucifer,
    Lords,
    Luka,
    Maiden,
    Maharshi,
    Marvel,
    MarvelC,
    Milan,
    Missing,
    Ml,
    Mule,
    Notebook,
    Peppa,
    Pokemon,
    Preview,
    Prodigy,
    Rabb,
    Ralph,
    Ring,
    Rocketman,
    Rose,
    Second,
    Serenityx,
    Shazam,
    Shot,
    Spider,
    Tolkien,
    Total,
    True,
    Upside,
    Vanishing,
    Vice,
    War,
    Junglee,
    Lion,
    Wonder,
    NineteenSeventeen,
    eighteenB,
    nineteenB,
    twentyB,
  }
};
</script>
