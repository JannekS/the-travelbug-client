<template>
  <div>
    <BaseButton>
      <label for="image"> {{ label }} </label>
    </BaseButton>
    <input
      type="file"
      id="image"
      name="image"
      required
      accept=".jpg, .jpeg, .png"
      @change="handleFileUpload"
    />
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  props: {
    label: {
      type: String,
      default: "Select an image",
      required: true,
    },
  },
  emits: ["uploadFile"],
  methods: {
    handleFileUpload(event) {
      this.$emit("uploadFile", event.target.files[0]);
    },
  },
  components: { BaseButton },
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
  visibility: hidden;
}

/* .file {
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
} */

label {
  width: 75px;
}
</style>
