<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="title-color">This months events in East London</h1>
        <h2>February 2020</h2>
        <br />
        <b-card-group deck class="mb-3">
          <b-card bg-variant="dark" text-variant="white" title="">
            <!-- wall-->
            <b-embed
              type   = "iframe"
              aspect = "16by9"
              src    = "https://walls.io/snjfm?nobackground=1&amp;show_header=0"
              style  = "border:0;height:800px;width:100%"
              title  = "londoneast.life"
              allowfullscreen
            ></b-embed>
          </b-card>
        </b-card-group>
        <!--
<b-card-group deck
class="mb-3">
<b-card bg-variant="dark" text-variant="white" title= "">
<iframe allowfullscreen id="wallsio-iframe" src="https://walls.io/snjfm?nobackground=1&amp;show_header=0" style="border:0;height:800px;width:100%" title="londoneast.life"></iframe>
</b-card>
</b-card-group>

    <b-card-group deck
class="mb-3">
<b-card bg-variant="dark" text-variant="white" title= "">
<a class="twitter-timeline" data-width="320" data-height="600" data-theme="dark" href="https://twitter.com/londoneast3?ref_src=twsrc%5Etfw">Tweets by londoneast3</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</b-card>

<b-card bg-variant="dark" text-variant="white" title= "">

</b-card>
<b-card bg-variant="dark" text-variant="white" title= "">

</b-card>
    </b-card-group>

<b-card-group deck
class="mb-3">
<b-card bg-variant="dark" text-variant="white" title= "">


<script src="https://snapwidget.com/js/snapwidget.js"></script>
<iframe src="https://snapwidget.com/embed/746872" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:100%; "></iframe>
</b-card>
</b-card-group>
-->

        <b-card-group deck class="mb-3">
          <b-card bg-variant="dark" text-variant="white" title="">
            <b-embed
              type   = "iframe"
              aspect = "16by9"
              src    = "https://www.google.com/maps/d/embed?mid=1F9WADbgsmZ44JzTDdiOnHzyfux3uOFxI"
              width  = "640"
              height = "480"
              allowfullscreen
            ></b-embed>
          </b-card>
        </b-card-group>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Today",
    meta : [
      {
        name   : "description",
        content: "This months events in east London February 2020."
      }
    ]
  }
};
</script>
