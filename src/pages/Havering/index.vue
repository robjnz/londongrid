<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="title-color">Havering</h1>

        <b-card-group deck class="mb-3">
          <b-card bg-variant="dark" text-variant="white" title="Places To Eat">
            <a href="http://bit.ly/2P2cQ2c" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1516869644/Spaghetti_cc00eb.jpg"
                fluid-grow
                alt = "places to eat Bexley"
            /></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="Havering">
            <a href="http://bit.ly/2A9KRFH" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1518365540/havering_kf2cen.png"
                fluid-grow
                alt = "Havering council"
            /></a>
          </b-card>

          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "Romford Recorder"
          >
            <a href="http://bit.ly/2RPGir4" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1517984323/newspaper_a1ayyc.png"
                fluid-grow
                alt = "Romford Recorder"
            /></a>
          </b-card>
        </b-card-group>

        <b-card-group deck class="mb-3">
          <b-card bg-variant="dark" text-variant="white" title="Jon Cruddas MP">
            <p>Dagenham & Rainham</p>
            <p class="labour">Labour</p>
            <a href="http://bit.ly/2pBDAZa" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face,h_180,w_200/v1538814068/cruddas_lagghr.jpg"
                fluid-grow
                alt = "Jon Cruddas mp Dagenham and Rainham"
            /></a>
            <b-button
              block
              href    = "http://bit.ly/cruddasvote"
              target  = "_blank"
              variant = "info"
              >Jon Cruddas voting Record &rArr;</b-button
            >
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="Julia Lopez MP">
            <p>Hornchurch & Upminster</p>
            <p class="labour">Labour</p>
            <a href="http://bit.ly/2PuG4UE" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_faces,h_180,w_200/v1518367706/Lopez_v6rgkf.jpg"
                fluid-grow
                alt = "Julia Lopez MP Hornchurch & Upminster"
            /></a>
            <b-button
              block
              href    = "http://bit.ly/lopezvote"
              target  = "_blank"
              variant = "info"
              >Julia Lopez voting Record &rArr;</b-button
            >
          </b-card>

          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "Andrew Rosindell MP"
          >
            <p>Romford</p>
            <p class="tory">Conservative</p>
            <a href="http://bit.ly/2Om9LdU" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face:auto,h_180,w_200/v1518368168/Rosindell_shwekz.jpg"
                fluid-grow
                alt = "Andrew Rosindell MP Romford"
            /></a>
            <b-button
              block
              href    = "http://bit.ly/rossindalevote"
              target  = "_blank"
              variant = "info"
              >Andrew Rosindell voting Record &rArr;</b-button
            >
          </b-card>
        </b-card-group>
        <b-card-group deck class="mb-3">
          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "Keith Prince AM"
          >
            <p>Havering & Redbridge</p>
            <p class="tory">Conservative</p>
            <a href="http://bit.ly/2OsF72v" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face:auto,h_180,w_200/v1519146309/Keith_Prince_vp1tn9.png"
                fluid-grow
                alt = "Keith Prince AM Havering and Redbridge"
            /></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="">
            <p class="labour"></p>
            <a href="" target="_blank"><b-img src="" fluid-grow alt=""/></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="">
            <p class="tory"></p>
            <a href="" target="_blank"><b-img src="" fluid-grow alt=""/></a>
          </b-card>
        </b-card-group>

        <div>
          <b-card-group deck class="mb-3">
            <b-card bg-variant="dark" text-variant="white" title="">
              <b-embed
                type              = "iframe"
                aspect            = "16by9"
                src               = "https://www.meteoblue.com/en/weather/widget/daily/romford_united-kingdom_2639192?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=MILE_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&windgust=1&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&pressure=1&layout=dark"
                frameborder       = "0"
                scrolling         = "yes"
                allowtransparency = "true"
                sandbox           = "allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                style             = "width: 378px;height: 434px"
                ><div>
                  <!-- DO NOT REMOVE THIS LINK --><a
                    href   = "https://www.meteoblue.com/en/weather/forecast/week/romford_united-kingdom_2639192?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget"
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
    title: "Havering",
    meta : [
      {
        name   : "description",
        content: 
          "Havering east London places to visit theatres, cinemas, historical and eat, information on local mp and newspaper"
      }
    ]
  }
};
</script>
