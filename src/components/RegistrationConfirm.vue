<template>
  <div class="modal" v-bind:class="{'is-active':isActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Registration Complete</p>
        <button class="delete" aria-label="close" @click="closeConfirmation()"></button>
      </header>
      <section class="modal-card-body">
        <ul>
          <li>
            <strong>First Name:</strong>
            {{ firstName }}
          </li>
          <li>
            <strong>Last Name:</strong>
            {{ lastName }}
          </li>
          <li>
            <strong>Email:</strong>
            {{ email }}
          </li>
          <li>
            <strong>Company:</strong>
            {{ company }}
          </li>
          <li>
            <strong>Purpose for Visit:</strong>
            {{ purposeForVisit }}
          </li>
          <li>
            <strong>Person/Dept Visiting:</strong>
            {{ personVisiting }}
          </li>
          <li>
            <strong>US Citizen:</strong>
            {{ usCitizen }}
          </li>
          <li>
            <strong>Classified Visit:</strong>
            {{ classified }}
          </li>
          <li>
            <strong>Level of Education:</strong>
            {{ education }}
          </li>
        </ul>
        <br />
        <h1>
          <strong>Thank you!</strong>
        </h1>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-info" @click="goToHomePage()">OK</button>
        <button class="button" @click="closeConfirmation()">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import EventBus from "@/assets/eventBus";

export default {
  name: "RegistrationConfirm",
  props: {
    firstName: {
      type: String,
      default: "firstName"
    },
    lastName: {
      type: String,
      default: "lastName"
    },
    email: {
      type: String,
      default: "email"
    },
    company: {
      type: String,
      default: "company"
    },
    purposeForVisit: {
      type: String,
      default: "purposeForVisit"
    },
    personVisiting: {
      type: String,
      default: "personVisiting"
    },
    usCitizen: {
      type: String,
      default: "usCitizen"
    },
    classified: {
      type: String,
      default: "classified"
    },
    education: {
      type: String,
      default: "education"
    }
  },
  mounted() {
    EventBus.$on("window-open", () => {
      this.openConfirmation();
    });
  },
  beforeDestroy() {
    EventBus.$off("window-open");
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    openConfirmation() {
      this.isActive = true;
    },
    closeConfirmation() {
      this.isActive = false;
    },
    goToHomePage() {
      this.$toast.open({
        duration: 5000,
        message: "Pretending like this saves to a db!",
        type: "is-success"
      });
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
