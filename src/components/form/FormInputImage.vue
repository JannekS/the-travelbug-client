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
    <div class="imageName">
      <span v-if="fileChosen">{{ fileName }}</span>
      <span v-else>No Image selected yet.</span>
    </div>
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
    fileChosen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fileName: {
        type: String,
        default: null,
      },
    };
  },
  emits: ["uploadFile"],
  methods: {
    handleFileUpload(event) {
      // console.log(event.target.value);
      this.fileName = event.target.files[0].name;
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
  width: 1px;
}

label {
  width: 75px;
}

.imageName {
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
</style>
