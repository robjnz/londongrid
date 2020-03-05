<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
            <i class="fas fa-theater-masks"></i>
          </span>
          Theatres
        </h1>
       <date />
       <br />
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <b-card-group deck class="mb-3">
                  <Barking />
                  <Greenwich />
                  <Hackney />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <hoxton />
                  <Ilford />
                  <Hornchurch />
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <Stratford />
                  <Two />
                  <Wilton />
                   </b-card-group>

                <b-card-group deck class="mb-3">
                  <Yard />
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
import Blank from "@/components/Football/Blank";
import Barking from "@/components/Theatres/Barking";
import Greenwich from "@/components/Theatres/Greenwich";
import Hackney from "@/components/Theatres/Hackney";
import Hornchurch from "@/components/Theatres/Hornchurch";
import Hoxton from "@/components/Theatres/Hoxton";
import Ilford from "@/components/Theatres/Ilford";
import Stratford from "@/components/Theatres/Stratford";
import Two from "@/components/Theatres/Two";
import Wilton from "@/components/Theatres/Wilton";
import Yard from "@/components/Theatres/Yard";
import date from "@/components/Home/date";


export default {
  metaInfo: {
    title: "Theatres",
    meta : [
      {
        name   : "description",
        content: 
          "Whats on at the east London Theatres this month, February 2020, Hackney Empire, Kenneth More Theatre Ilford, Theatre Royal Stratford East and more!"
      }
    ]
  },
  components: {
    Barking,
    Greenwich,
    Hackney,
    Hornchurch,
    Hoxton,
    Ilford,
    Stratford,
    Two,
    Wilton,
    Yard,
    date,
    Blank,
  }
};
</script>
