<template>
  <div class="container">
    <section class="box">
      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Welcome!</h1>
          </div>
        </div>
      </section>
      <br />
      <h1>Please continue to sign in</h1>
      <div>{{ date | moment }}</div>
      <br />
      <a class="button is-large is-info" @click="goToRegistrationPage">Continue</a>
    </section>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Home",
  methods: {
    goToRegistrationPage() {
      this.$router.push({ name: "Register" });
    }
  },
  data() {
    return {
      date: {}
    };
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  }
};
</script>

<style scoped>
</style>

