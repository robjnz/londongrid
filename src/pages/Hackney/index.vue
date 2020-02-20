<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="asian">Hackney</h1>
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
                    <a href="http://bit.ly/2OihgT7" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1516869644/Spaghetti_cc00eb.jpg"
                        fluid-grow
                        alt = "places to eat Bexley"
                    /></a>
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Hackney"
                  >
                    <a href="http://bit.ly/2PrkoIP" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1518971695/hackneymap_nkdoyp.png"
                        fluid-grow
                        alt = "Bexley council"
                    /></a>
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Hackney Gazettes"
                  >
                    <a href="http://bit.ly/2NFZ1SE" target="_blank"
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
                    title        = "Diane Abbott MP"
                  >
                    <p>Hackney North & Stoke Newington</p>
                    <p class="labour">Labour</p>
                    <a href="http://bit.ly/2OUUqAq" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_200/v1518970119/abbott_epnzxr.jpg"
                        fluid-grow
                        alt = "Diane Abbott MP Hackney North & Stoke Newington"
                    /></a>
                    <b-button
                      block
                      href    = "http://bit.ly/abbottvote"
                      target  = "_blank"
                      variant = "info"
                      >Diane Abbott voting Record &rArr;</b-button
                    >
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Meg Hillier MP"
                  >
                    <p>Hackney South & Shoreditch</p>
                    <p class="labour">Labour</p>
                    <a href="http://bit.ly/2QKiEdR" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_200/v1518970496/Hillier_vd9kdp.jpg"
                        fluid-grow
                        alt = "Meg Hillier MP Hackney South & Shoreditch"
                    /></a>
                    <b-button
                      block
                      href    = "http://bit.ly/hilliervote"
                      target  = "_blank"
                      variant = "info"
                      >Meg Hillier voting Record &rArr;</b-button
                    >
                  </b-card>

                  <b-card
                    bg-variant   = "dark"
                    text-variant = "white"
                    title        = "Jennette Arnold AM"
                  >
                    <p>North East London</p>
                    <p class="labour">Labour</p>
                    <a href="http://bit.ly/2C9Odd5" target="_blank"
                      ><b-img
                        src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_200/v1518971008/arnold_wkw31e.jpg"
                        fluid-grow
                        alt = "Jennette Arnold AM North East London"
                    /></a>
                  </b-card>
                </b-card-group>

                <div>
                  <b-card-group deck class="mb-3">
                    <b-card bg-variant="dark" text-variant="white" title="">
                      <b-embed
                        type              = "iframe"
                        aspect            = "16by9"
                        src               = "https://www.meteoblue.com/en/weather/widget/daily/hackney_united-kingdom_2647694?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=MILE_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&windgust=1&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&humidity=1&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&pressure=1&layout=dark"
                        frameborder       = "0"
                        scrolling         = "NO"
                        allowtransparency = "true"
                        sandbox           = "allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                        style             = "width: 378px;height: 460px"
                        ><div>
                          <!-- DO NOT REMOVE THIS LINK --><a
                            href   = "https://www.meteoblue.com/en/weather/forecast/week/hackney_united-kingdom_2647694?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget"
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
    title: "Hackney",
    meta : [
      {
        name   : "description",
        content: 
          "Hackney east London places to visit theatres, cinemas, historical and eat, information on local mp and newspaper"
      }
    ]
  }
};
</script>
