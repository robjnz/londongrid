<template>
  <Layout>
    <section main>
      <b-container>
        <h1 class="title-color">Lewisham</h1>

        <b-card-group deck class="mb-3">
          <b-card bg-variant="dark" text-variant="white" title="Places To Eat">
            <a href="http://bit.ly/2P1X1IW" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1516869644/Spaghetti_cc00eb.jpg"
                fluid-grow
                alt = "places to Lewisham"
            /></a>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title="Lewisham">
            <a href="http://bit.ly/2NJYGyj" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1539703457/lewisham_nr5soq.jpg"
                fluid-grow
                alt = "Lewisham council"
            /></a>
          </b-card>

          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "South London Press"
          >
            <a href="http://bit.ly/2Or1tkU" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_300/v1517984323/newspaper_a1ayyc.png"
                fluid-grow
                alt = "South London Press"
            /></a>
          </b-card>
        </b-card-group>

        <b-card-group deck class="mb-3">
          <b-card bg-variant="dark" text-variant="white" title="Janet Daby MP">
            <p>Lewisham East</p>
            <p class="labour">Labour</p>
            <a href="http://bit.ly/2CMJFum" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_200/v1539712225/daby_jbuhjq.jpg"
                fluid-grow
                alt = "Janet Daby MP Lewisham East"
            /></a>
            <b-button
              block
              href    = "http://bit.ly/dabyvote"
              target  = "_blank"
              variant = "info"
              >Janet Daby voting Record &rArr;</b-button
            >
          </b-card>

          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "Vicky Foxcroft MP"
          >
            <p>Lewisham Deptford</p>
            <p class="labour">Labour</p>
            <a href="http://bit.ly/2AeiXrZ" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face:auto,h_180,w_200/v1539792210/foxcroft_gtcs2q.jpg"
                fluid-grow
                alt = "Vicky Foxcroft MP Lewisham Deptford"
            /></a>
            <b-button
              block
              href    = "http://bit.ly/foxcroftvote"
              target  = "_blank"
              variant = "info"
              >Vicky Foxcroft voting Record &rArr;</b-button
            >
          </b-card>

          <b-card
            bg-variant   = "dark"
            text-variant = "white"
            title        = "Ellie Reeves MP"
          >
            <p>Lewisham West & Penge</p>
            <p class="labour">Labour</p>
            <a href="http://bit.ly/2AfdIIB" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_fill,g_face:auto,h_180,w_200/v1539799072/reeves_q6m3ir.jpg"
                fluid-grow
                alt = "Ellie Reeves MP Lewisham West and Penge"
            /></a>
            <b-button
              block
              href    = "http://bit.ly/reevesvote"
              target  = "_blank"
              variant = "info"
              >Ellie Reeves voting Record &rArr;</b-button
            >
          </b-card>
        </b-card-group>

        <b-card-group deck class="mb-3">
          <b-card bg-variant="dark" text-variant="white" title="Len Duvall AM">
            <p>Greenwich and Lewisham</p>
            <p class="labour">Labour</p>
            <a href="http://bit.ly/2OQulCG" target="_blank"
              ><b-img
                src = "https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_180,w_200/v1522829824/duvall_buid2q.jpg"
                fluid-grow
                alt = "Len Duvall AM Greenwich and Lewisham"
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
                src               = "https://www.meteoblue.com/en/weather/widget/daily/lewisham_united-kingdom_2644556?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=MILE_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&windgust=1&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&humidity=1&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&pressure=1&layout=dark"
                frameborder       = "0"
                scrolling         = "yes"
                allowtransparency = "true"
                sandbox           = "allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                style             = "width: 378px;height: 460px"
                ><div>
                  <!-- DO NOT REMOVE THIS LINK --><a
                    href   = "https://www.meteoblue.com/en/weather/forecast/week/lewisham_united-kingdom_2644556?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget"
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
    title: "Lewisham",
    meta : [
      {
        name   : "description",
        content: 
          "Lewisham east London places to visit theatres, cinemas, historical and eat, information on local mp and newspaper"
      }
    ]
  }
};
</script>
