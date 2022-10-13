<template>
  <div>
    <label :for="name"> {{ label }} </label>
    <div v-if="type === 'textarea'">
      <textarea
        v-if="isRequired"
        :name="name"
        required
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput"
      />
      <textarea
        v-else
        :name="name"
        :placeholder="placeholder"
        :value="modelValue"
        @change="handleInput"
      />
    </div>
    <div v-else>
      <input
        v-if="isRequired"
        :type="type"
        :name="name"
        required
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput"
      />
      <input
        v-else
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    isRequired: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
    },
    modelValue: {},
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
}

input {
  font-family: "Yomogi", cursive;
  font-size: 1rem;
  color: black;
  border-radius: 0px;
  margin: 5px 15px;
  min-width: 150px;
  max-width: 450px;
  border: none;
  border-bottom: solid black 1px;
  background: transparent no-repeat;
}

label {
  width: 75px;
}
textarea {
  font-family: "Lato", sans-serif;
  overflow: scroll;
  padding: 2px;
  margin: 5px 15px;
  border-radius: 5px;
  width: 450px;
  height: 250px;
  font-family: "Yomogi", cursive;
  background: transparent no-repeat;
}
</style>
