<template>
  <Layout>
    <b-container class="container">
      <h1 class="asian">What on in East London February 2020</h1>

      <div class="port container" id="works">
        <div class="row">
          <div class="work col-md-12">
            <on />
            
            <br />
            <theatre />
            <!--
            <inst />
            -->
          </div>
        </div>
      </div>

      <div class="port container" id="works">
        <div class="row">
          <div class="work col-md-6">
            
            <football />
          </div>

          <div class="work col-md-6">
            <series />
            <br />
            <film />
          </div>
        </div>
      </div>
    </b-container>
  </Layout>
</template>
<script>
import football from "@/components/Home/football";
import series from "@/components/Home/series";
import inst from "@/components/Home/inst";
import on from "@/components/Home/on";
import film from "@/components/Home/film";
import theatre from "@/components/Home/theatre";

export default {
  metaInfo: {
    title: "London East",
    meta : [
      {
        name   : "description",
        content: 
          "What’s on today in east London @ the local cinemas Emma, theatres, nightclubs & football matches, free online movies, tv series, picard, places to visit for days out in east London, places to eat, job search resources and much more!"
      }
    ],
    script: [
      { scr: "https: //cdn.jsdelivr.net/npm/gsap@3.0.4/dist/gsap.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js" },
      { src: "https://kit.fontawesome.com/e3c70d4fc5.js" }
    ]
  },
  components: {
    football,
    series,
    inst,
    on,
    film,
    theatre
  }
};
</script>

<style>
.Hero {
  padding-top   : 10rem;
  padding-bottom: 10rem;
  background    : darksalmon;
  color         : #337;
}
.Port {
  padding: 5rem;
}
.work {
  padding: 2rem 1rem;
}
.work-card {
  box-shadow   : 0px 0px 20px rgba(0, 0, 0.1);
  padding      : 1rem;
  border-radius: 0.2rem;
  color        : #00ff7f;
}
.home-links a {
  margin-right: 1rem;
}
</style>
