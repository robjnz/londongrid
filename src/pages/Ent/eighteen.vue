<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">2018 Movies free to watch online</h1>

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
                  <Star /><!--A star is Born-->
                  <Aquaman /><!--Aquaman -->
                  <Boy /><!--Beautiful Boy -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Ben /><!--Ben is Back 15-->
                  <Bohemian /><!--Bohemian Rhapsody -->
                  <Erased /><!--Boy Erased-->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Bumblebee /><!--Bumblebee -->
                  <Forgive /><!--Can You Ever Forgive Me -->
                  <Cold /><!--cold Pursuit -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Wedding /><!--Destination Wedding -->
                  <Concrete /><!--Dragged Across Concrete -->
                  <Eighth /><!--Eighth Grade -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Green /><!--Green Book-->
                  <Life /><!--High Life -->
                  <Family /><!--Instant Family  -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Scots /><!--Mary Queen Of Scots -->
                  <Poppins /><!--Mary Poppins-->
                  <Mid /><!--Mid 90s -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Sex /><!--On the basis of sex -->
                  <Blue /><!--Out Of Blue -->
                  <Pet /><!--Pet Sematary-->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Stan /><!--Stan & Ollie -->
                  <Styx /><!--Styx -->
                  <Favourite /><!--The Favourite -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Grinch /><!--The Grinch-->
                  <Teacher /><!--The Kinder Teacher -->
                  <Sister /><!--The sisters Brother -->
                </b-card-group>

                <b-card-group deck class="mb-3 ">
                  <Had /><!--What They Had -->
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
import Alert from "@/components/Films/Alert/Alert";
import Aquaman from "@/components/Films/Aquaman/Aquaman";
import Boy from "@/components/Films/Boy/Boy";
import Ben from "@/components/Films/Ben/Ben";
import Blank from "@/components/Films/Blank";
import Blue from "@/components/Films/Blue/Blue";
import Bohemian from "@/components/Films/Bohemian/Bohemian";
import Bumblebee from "@/components/Films/Bumblebee/Bumblebee";
import Cold from "@/components/Films/Cold/Cold";
import Concrete from "@/components/Films/Concrete/Concrete";
import Eighth from "@/components/Films/Eighth/Eighth";
import Erased from "@/components/Films/Erased/Erased";
import Family from "@/components/Films/Family/Family";
import Favourite from "@/components/Films/Favourite/Favourite";
import Forgive from "@/components/Films/Forgive/Forgive";
import Green from "@/components/Films/Green/Green";
import Grinch from "@/components/Films/Grinch/Grinch";
import Had from "@/components/Films/Had/Had";
import Life from "@/components/Films/Life/Life";
import Mid from "@/components/Films/Mid/Mid";
import Pet from "@/components/Films/Pet/Pet";
import Poppins from "@/components/Films/Poppins/Poppins";
import Sex from "@/components/Films/Sex/Sex";
import Scots from "@/components/Films/Scots/Scots";
import Sister from "@/components/Films/Sister/Sister";
import Stan from "@/components/Films/Stan/Stan";
import Star from "@/components/Films/Star/Star";
import Styx from "@/components/Films/Styx/Styx";
import Teacher from "@/components/Films/Teacher/Teacher";
import Wedding from "@/components/Films/Wedding/Wedding";
import nineteenB from "@/pages/Ent/nineteenB";
import eighteenB from "@/pages/Ent/eighteenB";
import twentyB from "@/pages/Ent/twentyB";

export default {
  metaInfo: {
    title: "2018 Free Movies",
    meta : [
      {
        name   : "description",
        content: "Movies made in 2018 free to watch online."
      }
    ]
  },
  components: {
    Alert,
    Aquaman,
    Ben,
    Blank,
    Blue,
    Bohemian,
    Bumblebee,
    Boy,
    Cold,
    Concrete,
    Eighth,
    Erased,
    Family,
    Favourite,
    Forgive,
    Green,
    Grinch,
    Had,
    Life,
    Mid,
    Pet,
    Poppins,
    Sex,
    Scots,
    Sister,
    Stan,
    Star,
    Styx,
    Teacher,
    Wedding,
    eighteenB,
    nineteenB,
    twentyB
  }
};
</script>
