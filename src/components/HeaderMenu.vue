<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://www.spathesystems.com/">
          <img class="spathe-logo" src="@/assets/spathe_logo.png" alt="Spathe Logo" />
        </a>

        <a
          @click="toggleHamburgerMenu"
          role="button"
          class="navbar-burger"
          v-bind:class="{'is-active':showHamburgerMenu}"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" v-bind:class="{'is-active':showHamburgerMenu}">
        <div class="navbar-end">
          <div class="navbar-end">
            <a class="navbar-item" v-on:click="route('Home')">Home</a>
            <hr class="navbar-divider" />
            <a class="navbar-item" v-on:click="route('User')">User</a>
            <hr class="navbar-divider" />
            <a class="navbar-item" v-on:click="route('Register')">Register</a>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "HeaderMenu",
  data() {
    return {
      showHamburgerMenu: false
    };
  },
  methods: {
    route(message) {
      router.push({ name: message });
    },
    toggleHamburgerMenu() {
      this.showHamburgerMenu = !this.showHamburgerMenu;
    }
  }
};
</script>

<style scoped>
.navbar-brand {
  min-height: 5.25rem;
}

.spathe-logo {
  min-height: 60px;
}
</style>
