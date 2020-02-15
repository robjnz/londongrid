<template>
  <Layout>
    <b-container class="container">
      <h1 class="asian">What on in East London February 2020</h1>
      <div class="port container" id="works">
        <div class="row">
          <div class="work col-md-12">
            <div class="work-card">
              <b-embed
                type   = "iframe"
                aspect = "16by9"
                src    = "https://walls.io/snjfm?nobackground=1&amp;show_header=0"
                style  = "border:0;height:800px;width:100%"
                title  = "londoneast.life"
                allowfullscreen
              ></b-embed>
            </div>
          </div>
        </div>
      </div>

      <div class="port container" id="works">
        <div class="row">
          <div class="work col-md-6">
            <div class="work-card">
              <H4>Home Matches Sat 22 February 2020</H4>
              <p>
                <g-image src="~/images/barking.jpg" width="40" />
                Barking V Tooting & Mitcham United<br />
                <g-image src="~/images/dagred.png" width="40" />
                Dagenham & Redbridge V Solihull Moors<br />
                <g-image src="~/images/charlton.png" width="40" />
                Charlton Athletic V Luton Town<br />
                <g-image src="~/images/erith.jpg" width="40" />
                Erith Town V Sheppey United<br />
                <g-image src="~/images/orient.jpg" width="40" />
                Leyton Orient V Oldham Athletic<br />
                <g-image src="~/images/newbury.jpg" width="40" />
                Newbury Forest V Coggeshall United<br />
                <g-image src="~/images/welling.png" width="40" />
                Welling United V Chippenham<br />
              </p>
              <H4>Home Matches Sun 23 February 2020</H4>
              <h6>Women's League</h6>
              <g-image src="~/images/west_ham.png" width="40" />
              West Ham United V Liverpool<br />

              <H4>Home Matches Tues 25 February 2020</H4>
              <g-image src="~/images/redbridge.jpg" width="40" />
              Redbridge V Tower Hamlets<br />

              <g-link to="/sport/football/">More Info</g-link>
            </div>
          </div>
          <div class="work col-md-6">
            <div class="work-card">
              <H4></H4>
              <p>
                <g-image src="~/images/picard.jpeg" width="120" height="140" />
                Star Trek Picard
              </p>
              <g-link to="http://bit.ly/31M9fsZ" target="_blank">Watch</g-link>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: "London East",
    meta : [
      {
        name   : "description",
        content: 
          "What’s on today @ the local cinemas, theatres, nightclubs & football matches, free online movies, tv series, picard, places to visit for days out in east London, places to eat, job search resources and much more!"
      }
    ]
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
