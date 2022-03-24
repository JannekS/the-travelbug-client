<template>
  <div></div>
  <div class="contact-container">
    <BackHome />
    <div class="contact">
      <h2>About me</h2>
      <p>
        Hi, I am Jannek and I like coding... sometimes even more than travelling
        ;-)
      </p>
      <h2>The Project</h2>
      <p>
        This Travel Blog is the final project of the Full-Stack Program I took
        at the
        <a href="https://hamburgcodingschool.com/en/">Hamburg Coding School</a>
        in 2021. The requirements for the project can be found
        <a
          href="https://github.com/hamburgcodingschool/fullstack-2021-2_vuejs/blob/main/project.md"
          target="blank"
          >here</a
        >.
      </p>
      <p>
        The front end is created in vue.js. All the post data is stored in a
        mariaDB database and fetched by the front end from an API I created with
        node.js and express.js. Future plans include login with user
        authentication and the possibility for users to write, edit and delete
        posts.
      </p>
      <h2>Contact</h2>
      <p>
        If you have any questions about the project or the Full-Stack Program it
        was part of, please contact the
        <a href="https://hamburgcodingschool.com/en/contact/"
          >Hamburg Coding School</a
        >
      </p>
      <div class="contact-item">
        <img src="/icons/mail.svg" /><span>
          teresa@hamburgcodingschool.com</span
        >
      </div>
      <div class="contact-item">
        <img src="/icons/phone-call.svg" /><span> +49 40 22863615</span>
      </div>
    </div>
  </div>
</template>

<script>
import BackHome from "@/components/BackHome.vue";
export default {
  components: {
    BackHome,
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.contact {
  padding: 30px;
  margin: 20px;
  margin-top: 10px;
  min-height: 480px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgb(98, 98, 98);
  font-size: 1.2rem;
}

.contact a {
  text-decoration: underline;
}

.contact a:hover {
  font-weight: bold;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.contact-item img {
  height: 25px;
  vertical-align: middle;
  stroke: #4a3933;
}

.contact-item span {
  margin-left: 10px;
  vertical-align: middle;
  display: inline;
}

@media only screen and (min-width: 800px) {
  .contact-container {
    max-width: 2800px;
  }
  @media only screen and (min-width: 2800px) {
    .contact-container {
      margin: auto;
    }
  }
}
</style>
