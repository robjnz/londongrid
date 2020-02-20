<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">Barking & Dagenham</h1>
        <div class="port container" id="works">
          <div class="row">
            <div class="work col-md-12">
              <div class="work-card">
                <b-card-group deck class="mb-3">
                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Places To Eat"
                  >
                    <a href="http://bit.ly/2O6UDAV" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1516869644/Spaghetti_cc00eb.jpg"
                        fluid-grow
                        alt = "places to eat Barking and Dagenham"
                    /></a>
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Barking & Dagenham"
                  >
                    <a href="http://bit.ly/2NpWuMc" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1516895697/Barkingmap_dbnn2m.png"
                        fluid-grow
                        alt = "Barking and Dagenham council"
                    /></a>
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Barking & Dagenham post"
                  >
                    <a href="http://bit.ly/2zTjHmr" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1517984323/newspaper_a1ayyc.png"
                        fluid-grow
                        alt = "Barking & Dagenham post"
                    /></a>
                  </b-card>
                </b-card-group>

                <b-card-group deck class="mb-3">
                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Jon Cruddas MP"
                  >
                    <p>Dagenham & Rainham</p>
                    <p class="labour">Labour</p>
                    <a href="http://bit.ly/2pBDAZa" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face,h_180,w_200/v1538814068/cruddas_lagghr.jpg"
                        fluid-grow
                        alt="Jon Cruddas mp
            Dagenham and Rainham"
                    /></a>
                    <b-button
                      block
                      href    = "http://bit.ly/cruddasvote"
                      target  = "_blank"
                      variant = "info"
                      >Jon Cruddas voting Record &rArr;</b-button
                    >
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Margaret Hodge MP"
                  >
                    <p>Barking & Dagenham</p>
                    <p class="labour">Labour</p>
                    <a href="http://bit.ly/2y2xPs2" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face,h_180,w_200/v1538813775/hodges_stl9fq.jpg"
                        fluid-grow
                        alt = "Margaret Hodge MP Barking and Dagenham"
                    /></a>
                    <b-button
                      block
                      href    = "http://bit.ly/hodgevote"
                      target  = "_blank"
                      variant = "info"
                      >Margaret Hodge voting Record &rArr;</b-button
                    >
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Unmesh Desai AM"
                  >
                    <p>City & East Constituency</p>
                    <p class="labour">Labour</p>
                    <a href="http://bit.ly/2PdUeJu" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face,h_180,w_200/v1538814314/desai_ojp1oc.jpg"
                        fluid-grow
                        alt = "Unmesh Desai AM City & East Constituency"
                    /></a>
                  </b-card>
                </b-card-group>

                <div>
                  <b-card-group deck class="mb-3">
                    <b-card bg-variant="dark" text-variant="white" title="">
                      <b-embed
                        type              = "iframe"
                        aspect            = "16by9"
                        src               = "https://www.meteoblue.com/en/weather/widget/daily/barking_united-kingdom_2656333?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=MILE_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&windgust=1&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&humidity=1&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&pressure=1&layout=dark"
                        frameborder       = "0"
                        scrolling         = "yes"
                        allowtransparency = "true"
                        sandbox           = "allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                        style             = "width: 500px;height: 500px"
                        ><div>
                          <!-- DO NOT REMOVE THIS LINK --><a
                            href   = "https://www.meteoblue.com/en/weather/forecast/week/barking_united-kingdom_2656333?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget"
                            target = "_blank"
                            >meteoblue</a
                          >
                        </div>
                        allowfullscreen ></b-embed
                      >
                      <b-button-group>
                        <b-button
                          href    = "http://bit.ly/2OCnpZM"
                          target  = "_blank"
                          variant = "info"
                          >Check Air Pollution</b-button
                        >
                      </b-button-group>
                    </b-card>
                  </b-card-group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Barking",
    meta : [
      {
        name   : "description",
        content: 
          "Barking east London places to visit theatres, cinemas, historical and eat, information on local mp and newspaper"
      }
    ]
  }
};
</script>
