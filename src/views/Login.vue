<template>
  <div class="login-container">
    <BackHome />
    <BaseForm title="Please enter your login data" @submit="submitForm">
      <fieldset>
        <legend>Enter your credentials</legend>

        <div>
          <label for="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jane.doe@example.com"
            v-model="email"
            required
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
            placeholder="enter your password here..."
            required
          />
        </div>
      </fieldset>
      <div>
        <input type="reset" value="Cancel" class="form-btn" />
        <input type="submit" value="Login" class="form-btn" />
      </div>
    </BaseForm>
    <div v-if="responseData">
      <p>{{ responseData.message }}</p>
    </div>
    <!-- <div id="signup-container">
      <h2>No Account yet?</h2>
      <h3>Sign up now:</h3>
      <form action="/signup" method="POST">
        <label for="name">User name:</label>
        <input type="text" name="name" placeholder="Jane Doe" required />
        <br />
        <label for="email">E-Mail:</label>
        <input
          type="email"
          name="email"
          placeholder="jane.doe@example.com"
          required
        />
        <br />
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="superS3curePassword!"
          required
        />
        <br />
        <label for="confirmPassword">Confirm:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="retype your password"
          required
        />
        <br />
        <input
          type="reset"
          value="Cancel"
          class="form-btn"
          id="cancel-post-btn"
        />
        <input
          type="submit"
          value="Sign Up"
          class="form-btn"
          id="save-post-btn"
        />
      </form>
    </div> -->
  </div>
</template>

<script>
import BackHome from "@/components/BackHome.vue";
import BaseForm from "@/components/form/BaseForm.vue";
export default {
  components: {
    BackHome,
    BaseForm,
  },
  data() {
    return {
      email: "",
      password: "",
      responseData: undefined,
      isLoggedIn: this.$store.getters.userLoggedIn,
    };
  },
  methods: {
    async submitForm() {
      const context = this;
      const url = "http://localhost:3000/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: context.email,
          password: context.password,
        }),
      });
      const result = await response.json();
      this.responseData = result;
      this.responseData.status = response.status;

      if (response.status === 200) {
        this.$store.dispatch("login", {
          userId: this.responseData.userId,
          token: this.responseData.token,
          isAuth: true,
        });
      }
    },
  },
};
</script>

<style scoped></style>
