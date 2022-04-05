<template>
  <div class="login-container">
    <BackHome />
    <div class="container">
      <h1>Please login:</h1>
      <form @submit.prevent="submitForm">
        <br />
        <label for="email">E-Mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="jane.doe@example.com"
          v-model="email"
          required
        />
        <br />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          placeholder="enter your password here..."
          required
        />
        <br />
        <input type="reset" value="Cancel" class="form-btn" />
        <input type="submit" value="Login" class="form-btn" />
      </form>
      <div v-if="responseData">
        <p>Status: {{ responseData.status }}</p>
        <p>Message: {{ responseData.message }}</p>
        <p>Is logged in: {{ responseData.cookie }}</p>
      </div>
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
export default {
  components: {
    BackHome,
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
      this.responseData.cookie = response.cookie;

      this.$store.dispatch("login", {
        userId: this.responseData.userId,
        token: this.responseData.token,
        isAuth: true,
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.container {
  padding: 30px;
  margin: 10px 20px;
  min-height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgb(98, 98, 98);
  text-align: center;
}

@media only screen and (min-width: 800px) {
  .login-container {
    max-width: 2800px;
  }
  @media only screen and (min-width: 2800px) {
    .login-container {
      margin: auto;
    }
  }
}
</style>
