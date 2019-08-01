<template>
  <div class="container box">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Users</h1>
        </div>
      </div>
    </section>
    <br />
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <th>Date</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Company</th>
        <th>Purpose for Visit</th>
        <th>Person/Dept Visiting</th>
        <th>US Citizen</th>
        <th>Classified Visit</th>
        <th>Level of Education</th>
      </thead>
      <tbody>
        <tr @click="goToUserInfo(user)" v-for="(user, id) in values" :key="id">
          <td>{{ user.date }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.purposeForVisit }}</td>
          <td>{{ user.personVisiting }}</td>
          <td>{{ user.usCitizen }}</td>
          <td>{{ user.classified }}</td>
          <td>{{ user.education }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import mockUserData from "@/assets/simulatedData/mockUserData.json";

export default {
  name: "User",
  data() {
    return {
      values: []
    };
  },
  mounted() {
    this.getKeys();
  },
  methods: {
    goToUserInfo(userInfo) {
      this.$router.push({
        name: "UserInfo",
        params: { importedUserInfo: userInfo }
      });
    },
    getKeys() {
      let keys = Object.keys(localStorage);
      this.getUserInfo(keys);
    },
    getUserInfo(userKeys) {
      userKeys.forEach(key => {
        if (key !== "loglevel:webpack-dev-server") {
          let tempV = JSON.parse(localStorage.getItem(key));

          this.values.push(tempV);
        }
      });
      // localStorage.removeItem("loglevel:webpack-dev-server");
    }
  }
};
</script>

<style scoped>
tr {
  cursor: pointer;
}
</style>

