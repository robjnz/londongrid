<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="title-color">Bexley</h1>

        <b-card-group deck class="mb-3">
          <b-card bg-variant="dark" text-variant="white" title="Places To Eat">
            <a href="http://bit.ly/2OGpCU9" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1516869644/Spaghetti_cc00eb.jpg"
                fluid-grow
                alt = "places to eat Bexley"
            /></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="Bexley">
            <a href="http://bit.ly/2E4LHHR" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1516965860/bexley_ed5suc.jpg"
                fluid-grow
                alt = "Bexley council"
            /></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="Bexley Times">
            <a href="http://bit.ly/2y3myaY" target="_blank"
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
            title        = "James Brokenshire MP"
          >
            <p>Old Bexley & Sidcup</p>
            <p class="tory">Conservative</p>
            <a href="http://bit.ly/2QGOOXP" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_faces,h_180,w_200/v1516967072/brokenshire_f5tawg.jpg"
                fluid-grow
                alt = "James Brokenshire MP Old Bexley & Sidcup"
            /></a>
            <b-button
              block
              href    = "http://bit.ly/brokenshirevote"
              target  = "_blank"
              variant = "info"
              >James Brokenshire voting Record &rArr;</b-button
            >
          </b-card>

          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "David Evennett MP"
          >
            <p>Bexleyheath & Crayford</p>
            <p class="tory">Conservative</p>
            <a href="http://bit.ly/2OkY4Ex" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_faces,h_180,w_200/v1516967470/evennett_zrvmj5.jpg"
                fluid-grow
                alt = "David Evennett MP Bexleyheath and Crayford"
            /></a>
            <b-button
              block
              href    = "http://bit.ly/evennettvote"
              target  = "_blank"
              variant = "info"
              >David Evennett voting Record &rArr;</b-button
            >
          </b-card>

          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "Abena Oppong-Asare MP"
          >
            <p>Erith & Thamesmead</p>
            <p class="labour">Labour</p>
            <a href="http://bit.ly/2YHIBAh" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_200/v1576226979/Abena_Oppong-Asare_w7dovf.jpg"
                fluid-grow
                alt = "Abena Oppong-Asare"
            /></a>
            <b-button
              block
              href    = "http://bit.ly/2tDrp3p"
              target  = "_blank"
              variant = "info"
              >Abena Oppong-Asare voting Record &rArr;</b-button
            >
          </b-card>
        </b-card-group>

        <b-card-group deck class="mb-3">
          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "Gareth Bacon AM"
          >
            <p>Bexley & Bromley</p>
            <p class="tory">Conservative</p>
            <a href="http://bit.ly/2pKZHMI" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_200/v1519145579/bacon_l7lpqe.jpg"
                fluid-grow
                alt = "Gareth Bacon AM Bexley and Bromley"
            /></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="">
            <p class="labour"></p>
            <a href="#" target="_blank"><b-img src="" fluid-grow alt=""/></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="">
            <p class=""></p>
            <a href="" target="_blank"><b-img src="" fluid-grow alt=""/></a>
          </b-card>
        </b-card-group>

        <div>
          <b-card-group deck class="mb-3">
            <b-card bg-variant="dark" text-variant="white" title="">
              <b-embed
                type              = "iframe"
                aspect            = "16by9"
                src               = "https://www.meteoblue.com/en/weather/widget/daily/bexley_united-kingdom_2655775?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=MILE_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&windgust=1&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&humidity=1&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&pressure=1&layout=dark"
                frameborder       = "0"
                scrolling         = "yes"
                allowtransparency = "true"
                sandbox           = "allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                style             = "width: 378px;height: 460px"
                ><div>
                  <!-- DO NOT REMOVE THIS LINK --><a
                    href   = "https://www.meteoblue.com/en/weather/forecast/week/bexley_united-kingdom_2655775?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget"
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
    title: "Bexley",
    meta : [
      {
        name   : "description",
        content: 
          "Bexley east London places to visit theatres, cinemas, historical and eat, information on local mp and newspaper"
      }
    ]
  }
};
</script>
