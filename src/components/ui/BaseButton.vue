<template>
  <button :type="type" @click="onClick" class="button">
    <slot>{{ value }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "Click here",
    },
    type: {
      type: String,
      default: "button", //make it only accept button, submit and reset
    },
    name: {
      type: String,
      default: "button",
    },
  },
  emits: ["btnClicked", "submit", "reset"],
  methods: {
    onClick(event) {
      if (this.type === "submit") {
        this.$emit("submit");
        return;
      }
      if (this.type === "reset") {
        this.$emit("reset");
        return;
      }
      this.$emit("btnClicked", event.target.name);
    },
  },
};
</script>

<style scoped>
.button {
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
.button:hover {
  background-color: #f0a500;
}
.button:active {
  background-color: #e19d0c;
  box-shadow: none;
}
</style>
