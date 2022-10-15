<template>
  <div>
    <label :class="type" :for="name"> {{ label }} </label>
    <div v-if="type === 'textarea'">
      <textarea
        v-if="isRequired"
        :id="name"
        :name="name"
        required
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput"
      />
      <textarea
        v-else
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="modelValue"
        @change="handleInput"
      />
    </div>
    <div v-else-if="type === 'file'">
      <input
        :type="type"
        :id="name"
        :name="name"
        required
        @change="handleFileUpload"
      />
    </div>
    <div v-else>
      <input
        v-if="isRequired"
        :type="type"
        :id="name"
        :name="name"
        required
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput"
      />
      <input
        v-else
        :type="type"
        :id="name"
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
  emits: ["update:modelValue", "uploadFile"],
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    handleFileUpload(event) {
      this.$emit("uploadFile", event.target.files[0]);
    }
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

input[type="file"] {
  visibility: hidden;
}

.file {
  font-family: "Lato", sans-serif;
  padding: 5px 10px;
  margin: 0px 5px 5px 5px;
  width: 150px;
  background: transparent no-repeat;
  border-radius: 5px;
  border: solid 1px black;
  font-size: 1rem;
  box-shadow: 1px 1px 1px rgb(98, 98, 98);
}

.file:hover {
  background-color: #f0a500;
}
.file:active {
  background-color: #e19d0c;
  box-shadow: none;
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
