<template>
  <div class="form-wrapper">
    <h1 class="form-title">{{ title }}</h1>
    <form @submit.prevent="emitSubmit">
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      formInput: {},
    };
  },
  emits: ["submit"],
  methods: {
    emitSubmit() {
      this.$emit("submit");
    },
  },
};
</script>

<style>
.form-wrapper {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  margin-bottom: 10px;
}
form {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
fieldset {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
  border: solid 1px black;
  margin: 5px;
  padding: 20px;
}
.form-btn {
  font-family: "Lato", sans-serif;
  padding: 5px 10px;
  margin: 5px;
  width: 150px;
  background: transparent no-repeat;
  border-radius: 5px;
  border: solid 1px black;
  font-size: 1rem;
  box-shadow: 1px 1px 1px rgb(98, 98, 98);
}
.form-btn:hover {
  background-color: #f0a500;
}
.form-btn:active {
  background-color: #e19d0c;
  box-shadow: none;
}

.form-title {
  text-align: center;
}
</style>
