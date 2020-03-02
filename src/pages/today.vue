<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">
          <span style="font-size: 1em; color: Dodgerblue;">
            <i class="far fa-calendar-alt"></i>
          </span>
          This Months Events 
        </h1>
        <date />
        <br />

        <on /><br />
        <br />
       
              <div class="work-card">
                 <b-embed
              type   = "iframe"
              aspect = "16by9"
              src    = "https://www.google.com/maps/d/embed?mid=1F9WADbgsmZ44JzTDdiOnHzyfux3uOFxI"
              width  = "640"
              height = "480"
              allowfullscreen
            ></b-embed>
              </div>
          <br />
        

      
      </b-container>
    </section>
  </Layout>
</template>

<script>
import on from "@/components/Home/on";
import date from "@/components/Home/date";


export default {
  metaInfo: {
    title: "Today",
    meta : [
      {
        name   : "description",
        content: "This months events in east London March 2020."
      }
    ]
  },
  components: {
    on,
    date,
  }
};
</script>
