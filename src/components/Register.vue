<template>
  <div class="container box">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Visitor Registration</h1>
        </div>
      </div>
    </section>
    <br />
    <form ref="my_input">
      <div class="container field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" v-model="firstName" type="text" placeholder="e.g Alex" />
        </div>
      </div>
      <div class="container field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" v-model="lastName" type="text" placeholder="e.g Smith" />
        </div>
      </div>
      <div class="container field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" v-model="email" type="email" placeholder="e.g asmith@gmail.com" />
        </div>
      </div>
      <div class="container field">
        <label class="label">Company</label>
        <div class="control">
          <input class="input" v-model="company" type="text" placeholder="e.g. Spathe Systems" />
        </div>
      </div>
      <div class="container field">
        <label class="label">Purpose for Visit</label>
        <div class="control">
          <input class="input" v-model="purposeForVisit" type="text" />
        </div>
      </div>
      <div class="container field">
        <label class="label">Person/Dept Visiting</label>
        <div class="control">
          <input class="input" v-model="personVisiting" type="text" />
        </div>
      </div>
      <div class="control has-text-centered">
        <label class="label">US Citizen</label>
        <label class="radio">
          <input type="radio" name="citizen" value="Yes" v-model="usCitizen" />
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="citizen" value="No" v-model="usCitizen" />
          No
        </label>
      </div>
      <br />
      <div class="control has-text-centered">
        <label class="label">Classified Visit</label>
        <label class="radio">
          <input type="radio" name="classified" value="Yes" v-model="classified" />
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="classified" value="No" v-model="classified" />
          No
        </label>
      </div>
      <br />
      <div class="container field">
        <label class="label">Level of Education</label>
        <div class="control has-text-centered">
          <div class="select">
            <select v-model="education">
              <option v-for="(school, id) in schools" :key="id">{{school}}</option>
            </select>
          </div>
        </div>
      </div>
      <label class="checkbox">
        <input type="checkbox" name="sendEmail" v-model="sendEmail" />
        <strong>Send Email</strong>
      </label>
      <br />
      <br />
      <div class="container field">
        <p class="control has-text-centered">
          <button class="button is-large is-info" @click.prevent="getUser()">Submit</button>
        </p>
      </div>
    </form>
    <RegistrationConfirm
      :firstName="firstName"
      :lastName="lastName"
      :fullName="fullName"
      :email="email"
      :company="company"
      :purposeForVisit="purposeForVisit"
      :personVisiting="personVisiting"
      :usCitizen="usCitizen"
      :classified="classified"
      :education="education"
    ></RegistrationConfirm>
  </div>
</template>

<script>
import EventBus from "@/assets/eventBus";
import UserData from "@/assets/UserData.js";
import RegistrationConfirm from "@/components/RegistrationConfirm.vue";

export default {
  name: "Register",
  components: {
    RegistrationConfirm
  },
  data() {
    return {
      schools: ["High School", "College"],
      firstName: "",
      lastName: "",
      fullName: "",
      email: "",
      company: "",
      purposeForVisit: "",
      personVisiting: "",
      usCitizen: "",
      classified: "",
      education: "",
      sendEmail: ""
    };
  },
  methods: {
    getUser() {
      let user = new UserData();
      let today = new Date();
      user.date =
        today.getMonth() +
        1 +
        "/" +
        today.getDate() +
        "/" +
        today.getFullYear();
      user.firstName = this.firstName;
      user.lastName = this.lastName;
      user.fullName = `${this.firstName + this.lastName}`;
      user.email = this.email;
      user.company = this.company;
      user.purposeForVisit = this.purposeForVisit;
      user.personVisiting = this.personVisiting;
      user.usCitizen = this.usCitizen;
      user.classified = this.classified;
      user.education = this.education;
      user.sendEmail = this.sendEmail;

      if (this.checkAllInputs(user)) {
        localStorage.setItem(`${user.lastName}`, JSON.stringify(user));
        // this.clearForm(user);
        this.showConfirmation();
      } else {
        alert("Failed to register. All fields are required!");
      }
    },
    checkAllInputs(userData) {
      if (
        userData.firstName !== "" &&
        userData.lastName !== "" &&
        userData.purposeForVisit !== "" &&
        userData.personVisiting !== "" &&
        userData.usCitizen !== "" &&
        userData.classified !== "" &&
        userData.education !== ""
      ) {
        return true;
      } else {
        return false;
      }
    },
    clearForm(clearData) {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.company = "";
      this.purposeForVisit = "";
      this.personVisiting = "";
      this.usCitizen = "";
      this.classified = "";
      this.education = "";
      clearData.firstName = "";
      clearData.lastName = "";
      clearData.email = "";
      clearData.purposeForVisit = "";
      clearData.personVisiting = "";
      clearData.usCitizen = "";
      clearData.education = "";
    },
    showConfirmation() {
      EventBus.$emit("window-open");
    }
  }
};
</script>

<style scoped>
.field {
  width: 500px;
}
</style>

