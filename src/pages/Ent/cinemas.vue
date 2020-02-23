<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
            <i class="fas fa-film"></i>
          </span>
          Cinemas
        </h1>
        <h3 class="tory">
          Movies Showing This Week Sun 16 - Thurs 27 Feb 2020
        </h3>
        <br />
        <!--cineworld-->
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <h3>Cineworld</h3>
                <b-card-group deck class="mb-3">
                  <bexley />
                  <greenwich />
                  <ilford />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <west />
                  <Blank />
                  <Blank />
                </b-card-group>
              </div>
            </div>
          </div>
        </div>
        <br />
        <!--odeon-->
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <h3>Odeon</h3>
                <b-card-group deck class="mb-3">
                  <greenwichodeon />
                  <woodford />
                  <Blank />
                </b-card-group>
              </div>
            </div>
          </div>
        </div>
        <br />
        <!--Picturehouses-->
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <h3>Picturehouses</h3>
                <b-card-group deck class="mb-3">
                  <greenwichpict />
                  <hackney />
                  <stratfordpict />
                </b-card-group>
              </div>
            </div>
          </div>
        </div>

        <br />
        <!--Showcase-->
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <h3>Showcase</h3>
                <b-card-group deck class="mb-3">
                  <newham />
                  <Blank />
                  <Blank />
                </b-card-group>
              </div>
            </div>
          </div>
        </div>
        <br />
        <!--vue-->
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <h3>Vue</h3>
                <b-card-group deck class="mb-3">
                  <romford />
                  <stratfordvue />
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
import bexley from "@/components/Cineworld/bexley";
import greenwich from "@/components/Cineworld/greenwich";
import ilford from "@/components/Cineworld/ilford";
import west from "@/components/Cineworld/west";
import greenwichodeon from "@/components/Odeon/greenwichodeon";
import woodford from "@/components/Odeon/woodford";
import greenwichpict from "@/components/Picturehouses/greenwichpict";
import hackney from "@/components/Picturehouses/hackney";
import stratfordpict from "@/components/Picturehouses/stratfordpict";
import newham from "@/components/Showcase/newham";
import romford from "@/components/Cinevue/romford";
import stratfordvue from "@/components/Cinevue/stratfordvue";

import Blank from "@/components/Films/Blank";

export default {
  metaInfo: {
    title: "Cinemas",
    meta : [
      {
        name   : "description",
        content: 
          "Whats on this week at cinemas in east London, Cineworld, Odeon, Picturehouses, Showcase Cinemas and Vue."
      }
    ]
  },
  components: {
    bexley,
    greenwich,
    ilford,
    west,
    greenwichodeon,
    woodford,
    greenwichpict,
    hackney,
    stratfordpict,
    newham,
    romford,
    stratfordvue,
    Blank
  }
};
</script>
