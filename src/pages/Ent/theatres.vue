<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">What on this month @ East London Theatres</h1>
        <h2>February 2020</h2>
        <br />

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
          <Yard />
        </b-card-group>
        <!--
      <div>


      <b-card-group deck
      class="mb-3">
    <b-card bg-variant="dark" text-variant="white" title= "">
  <p class="title-color">

  </p>
  <b-button-group>
  <b-button href="http://bit.ly/2O857LG" target="_blank" variant="info">Broadway Theatre Barking</b-button>
  <b-button href="http://bit.ly/2CKtih3" target="_blank" variant="info">Greenwich Theatre</b-button>
  <b-button href="http://bit.ly/2JnhX7Z" target="_blank" variant="info">Hackney Empire</b-button>
  </b-button-group>
  <br>
  <br>
  <b-button-group>
  <b-button href="http://bit.ly/2EX7IsG" target="_blank" variant="info">Hoxton Hall</b-button>
  <b-button href="http://bit.ly/2D9UPtc" target="_blank" variant="info">Kenneth More Theatre Ilford</b-button>
  <b-button href="http://bit.ly/2Soh3MB" target="_blank" variant="info">Queen's Theatre Hornchurch</b-button>
  </b-button-group>
  <br>
  <br>
  <b-button-group>
  <b-button href="http://bit.ly/2JjU3Kr" target="_blank" variant="info">Theatre Royal Stratford East</b-button>
  <b-button href="http://bit.ly/2PpXswU" target="_blank" variant="info">The 02</b-button>
  <b-button href="http://bit.ly/2OYFsdx" target="_blank" variant="info">The Yard Hackney</b-button>
  </b-button-group>

  </b-card>
  </b-card-group>

</div>
-->
      </b-container>
    </section>
  </Layout>
</template>

<script>
import Barking from "@/components/Theatres/Barking";
import Greenwich from "@/components/Theatres/Greenwich";
import Hackney from "@/components/Theatres/Hackney";
import Hornchurch from "@/components/Theatres/Hornchurch";
import Hoxton from "@/components/Theatres/Hoxton";
import Ilford from "@/components/Theatres/Ilford";
import Stratford from "@/components/Theatres/Stratford";
import Two from "@/components/Theatres/Two";
import Yard from "@/components/Theatres/Yard";

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
    Yard
  }
};
</script>
