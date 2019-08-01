<template>
  <div class="container box">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">User Information</h1>
        </div>
      </div>
    </section>
    <br />
    <div>
      <div class="container field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" v-model="importedUserInfo.firstName" type="text" />
        </div>
      </div>
      <div class="container field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" v-model="importedUserInfo.lastName" type="text" />
        </div>
      </div>
      <div class="container field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" v-model="importedUserInfo.email" type="email" />
        </div>
      </div>
      <div class="container field">
        <label class="label">Company</label>
        <div class="control">
          <input class="input" v-model="importedUserInfo.company" type="text" />
        </div>
      </div>
      <div class="container field">
        <label class="label">Purpose for Visit</label>
        <div class="control">
          <input class="input" v-model="importedUserInfo.purposeForVisit" type="text" />
        </div>
      </div>
      <div class="container field">
        <label class="label">Person/Dept Visiting</label>
        <div class="control">
          <input class="input" v-model="importedUserInfo.personVisiting" type="text" />
        </div>
      </div>
      <div class="control has-text-centered">
        <label class="label">US Citizen</label>
        <label class="radio">
          <input type="radio" name="citizen" value="Yes" v-model="importedUserInfo.usCitizen" />
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="citizen" value="No" v-model="importedUserInfo.usCitizen" />
          No
        </label>
      </div>
      <br />
      <div class="control has-text-centered">
        <label class="label">Classified Visit</label>
        <label class="radio">
          <input type="radio" name="classified" value="Yes" v-model="importedUserInfo.classified" />
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="classified" value="No" v-model="importedUserInfo.classified" />
          No
        </label>
      </div>
      <br />
      <div class="container field">
        <label class="label">Level of Education</label>
        <div class="control has-text-centered">
          <div class="select">
            <select v-model="importedUserInfo.education">
              <option v-for="(school, id) in schools" :key="id">{{school}}</option>
            </select>
          </div>
        </div>
      </div>
      <label class="checkbox">
        <input type="checkbox" name="sendEmail" v-model="importedUserInfo.sendEmail" />
        <strong>Send Email</strong>
      </label>
      <div class="container field">
        <p class="control has-text-centered">
          <router-link :to="{name: 'User'}">
            <button @click="updateUserInfo()" class="button is-large is-info">OK</button>
          </router-link>
          <button @click="deleteUserInfo()" class="button is-large is-danger">Delete</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import UserData from "@/assets/UserData.js";

export default {
  name: "UserInfo",
  data() {
    return {
      schools: ["High School", "College"]
    };
  },
  props: {
    importedUserInfo: {
      type: Object,
      default() {
        return new UserData();
      }
    }
  },
  methods: {
    updateUserInfo() {
      let user = new UserData();
      let today = new Date();
      user.date =
        today.getMonth() +
        1 +
        "/" +
        today.getDate() +
        "/" +
        today.getFullYear();
      user.firstName = this.importedUserInfo.firstName;
      user.lastName = this.importedUserInfo.lastName;
      user.email = this.importedUserInfo.email;
      user.company = this.importedUserInfo.company;
      user.purposeForVisit = this.importedUserInfo.purposeForVisit;
      user.personVisiting = this.importedUserInfo.personVisiting;
      user.usCitizen = this.importedUserInfo.usCitizen;
      user.classified = this.importedUserInfo.classified;
      user.education = this.importedUserInfo.education;
      user.sendEmail = this.importedUserInfo.sendEmail;
      localStorage.setItem(`${user.lastName}`, JSON.stringify(user));
    },
    deleteUserInfo() {
      if (window.confirm("Are you sure you want to delete this user?")) {
        localStorage.removeItem(`${this.importedUserInfo.lastName}`);
        this.$router.push({ name: "User" });
      } else {
        this.updateUserInfo();
      }
    }
  }
};
</script>

<style scoped>
.field {
  width: 500px;
}
button {
  margin: 5px 10px;
}
</style>

