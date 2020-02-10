<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="title-color">Waltham Forest</h1>

        <b-card-group deck class="mb-3">
          <b-card bg-variant="dark" text-variant="white" title="Places To Eat">
            <a href="http://bit.ly/2qckw42" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1516869644/Spaghetti_cc00eb.jpg"
                fluid-grow
                alt = "places to eat Waltham Forest"
            /></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="Waltham Forest">
            <a href="http://bit.ly/2CDAQCq" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1521572772/walthamwardmap_pdq4p3.png"
                fluid-grow
                alt = "Waltham Forest council"
            /></a>
          </b-card>

          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "East London Guardian"
          >
            <a href="http://bit.ly/2yZ9q6q" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1517984323/newspaper_a1ayyc.png"
                fluid-grow
                alt = "East London Guardian"
            /></a>
          </b-card>
        </b-card-group>

        <b-card-group deck class="mb-3">
          <b-card bg-variant="dark" text-variant="white" title="John Cryer MP">
            <p>Leyton & Wanstead</p>
            <p class="labour">Labour</p>
            <a href="http://bit.ly/2yxdL1f" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face:auto,h_180,w_200/v1517232186/John_Cryer_m1bo60.jpg"
                fluid-grow
                alt = "John Cryer MP Leyton & Wanstead"
            /></a>
            <b-button
              block
              href    = "https://kutt.it/cryervote"
              target  = "_blank"
              variant = "info"
              >John Cryer voting Record &rArr;</b-button
            >
          </b-card>

          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "Stella Creasy MP"
          >
            <p>Walthamstow</p>
            <p class="labour">Labour</p>
            <a href="http://bit.ly/2R9U2f0" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face:auto,h_180,w_200/v1521566375/creasy_kki6qh.jpg"
                fluid-grow
                alt = "Stella Creasy MP Walthamstow"
            /></a>
            <b-button
              block
              href    = "http://bit.ly/creasyvote"
              target  = "_blank"
              variant = "info"
              >Stella Creasy voting Record &rArr;</b-button
            >
          </b-card>

          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "Iain D Smith MP"
          >
            <p>Chingford & Woodford Green</p>
            <p class="tory">Conservative</p>
            <a href="http://bit.ly/2OJDsGd" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face:auto,h_180,w_200/v1517232998/smithmp_v5ecrw.jpg"
                fluid-grow
                alt = "Iain D Smith MP Chingford & Woodford Green"
            /></a>
            <b-button
              block
              href    = "https://kutt.it/smithvote"
              target  = "_blank"
              variant = "info"
              >Iain D Smith voting Record &rArr;</b-button
            >
          </b-card>
        </b-card-group>

        <b-card-group deck class="mb-3">
          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "Jennette Arnold AM"
          >
            <p>North East London</p>
            <p class="labour">Labour</p>
            <a href="http://bit.ly/2C9Odd5" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face:auto,h_180,w_200/v1518971008/arnold_wkw31e.jpg"
                fluid-grow
                alt = "Jennette Arnold AM North East London"
            /></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="">
            <a href="" target="_blank"><b-img src="" fluid-grow alt=""/></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="">
            <a href="" target="_blank"><b-img src="" fluid-grow alt=""/></a>
          </b-card>
        </b-card-group>

        <div>
          <b-card-group deck class="mb-3">
            <b-card bg-variant="dark" text-variant="white" title="">
              <b-embed
                type              = "iframe"
                aspect            = "16by9"
                src               = "https://www.meteoblue.com/en/weather/widget/daily/walthamstow_united-kingdom_2634838?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=MILE_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&windgust=1&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&humidity=1&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&pressure=1&layout=dark"
                frameborder       = "0"
                scrolling         = "Yes"
                allowtransparency = "true"
                sandbox           = "allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                style             = "width: 378px;height: 460px"
                ><div>
                  <!-- DO NOT REMOVE THIS LINK --><a
                    href   = "https://www.meteoblue.com/en/weather/forecast/week/walthamstow_united-kingdom_2634838?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget"
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
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Waltham Forest",
    meta : [
      {
        name   : "description",
        content: 
          "Waltham Forest east London places to visit theatres, cinemas, historical and eat, information on local mp and newspaper"
      }
    ]
  }
};
</script>
