<template>
  <div class="layout">
    <TheHeader />

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <g-link class="navbar-brand" to="/">{{ $static.metadata.siteName }}</g-link>
      <button
        class         = "navbar-toggler"
        type          = "button"
        data-toggle   = "collapse"
        data-target   = "#navbarNav"
        aria-controls = "navbarNav"
        aria-expanded = "false"
        aria-label    = "Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li>
            <g-link class="nav-link" to="/">Home</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/computers">computers</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/Test">test</g-link>
          </li>
        </ul>
      </div>
    </nav>

    <header class="header"></header>
    <slot />
    <Icons />
  </div>
</template>

<static-query>
query {
    metadata {
    siteName
    }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin     : 0;
  padding    : 0;
  line-height: 1.5;
}
.layout {
  max-width    : auto;
  margin       : 0 auto;
  padding-left : 2px;
  padding-right: 2px;
  color        : #ffcb31;
  background   : #242943;
}

.header {
  display        : flex;
  justify-content: space-between;
  align-items    : center;
  margin-bottom  : 20px;
  height         : 80px;
}

#showcase {
  background: url(http://res.cloudinary.com/dzhbfdfa5/image/upload/v1515831480/tower_vow6im.jpg)
    no-repeat center center fixed;
  background-size        : cover;
  -webkit-background-size: cover;
  -moz-background-size   : cover;
  -o-background-size     : cover;
  height                 : 100%;
  margin-top             : -75px;
}

.nav__link {
  margin-left: 20px;
}

.title-color {
  color: #ffcb31;
}

.main-color {
  color: #1a8c97;
}

.con-color {
  color: #242943;
}

.main-content {
  margin-top: 4.5rem;
}
.labour {
  color: #ef4836;
}
.tory {
  color: #1e90ff;
}
.asian {
  color: #00ff7f;
}

.today {
  color: #fff5ee;
}
</style>


<script>
import TheHeader from "@/components/TheHeader/TheHeader";
import Icons from "@/components/TheFooter/Icons";

export default {
  components: {
    TheHeader,
    Icons
  }
};
</script>
