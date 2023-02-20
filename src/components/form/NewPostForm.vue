<template>
  <BaseForm title="Create a New Blog Post">
    <fieldset>
      <legend>Basc Info about the Trip</legend>
      <BaseFormInput
        name="location"
        label="Location"
        placeholder="like 'Barcelona'"
        v-model="postDraft.location"
        @change="
          saveDraft();
          getCoordinates();
        "
      />
      <BaseFormInput
        name="country"
        label="Country"
        placeholder="like 'Spain'"
        v-model="postDraft.country"
        @change="
          saveDraft();
          getCoordinates();
        "
      />
      <BaseFormInput
        type="date"
        name="startDate"
        label="Start Date"
        v-model="postDraft.startDate"
        @change="saveDraft"
      />
      <BaseFormInput
        type="date"
        name="endDate"
        label="End Date"
        :min="postDraft.startDate"
        v-model="postDraft.endDate"
        @change="saveDraft"
      />
    </fieldset>

    <fieldset>
      <legend>Content</legend>

      <FormInputImage
        label="Select an Image"
        :fileChosen="imageSelected"
        @uploadFile="savePostImage"
      />

      <BaseFormInput
        name="title"
        label="Title"
        placeholder="Make it short and catchy ;-)"
        v-model="postDraft.title"
        @change="saveDraft"
      />
      <BaseFormInput
        type="textarea"
        name="mainText"
        label="Main Text"
        placeholder="Tell us all about your trip."
        v-model="postDraft.mainText"
        @change="saveDraft"
      />
    </fieldset>
    <div>
      <div class="btn-wrapper" id="form-buttons-container">
        <BaseButton
          type="reset"
          value="Cancel"
          @reset="clearDraft"
        ></BaseButton>
        <BaseButton
          type="submit"
          value="Save Post"
          @submit="submitPost"
        ></BaseButton>
      </div>
    </div>
  </BaseForm>
</template>

<script>
import BaseForm from "@/components/form/BaseForm.vue";
import BaseFormInput from "@/components/form/BaseFormInput.vue";
import FormInputImage from "@/components/form/FormInputImage.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
  components: {
    BaseForm,
    BaseFormInput,
    FormInputImage,
    BaseButton,
  },
  data() {
    return {
      postDraft: this.$store.getters.postDraft,
      postUrl: process.env.VUE_APP_SERVER_URL + "/new-post", // TODO: handle this more elegantly
      postImage: null,
      imageSelected: false,
    };
  },
  computed: {
    userId() {
      return this.$store.getters.userId;
    },
    authToken() {
      return this.$store.getters.authToken;
    },
  },
  methods: {
    saveDraft() {
      this.$store.dispatch("updatePostDraft", this.postDraft);
    },
    clearDraft() {
      this.$store.dispatch("updatePostDraft", {
        location: null,
        country: null,
        lat: null,
        lng: null,
        startDate: null,
        endDate: null,
        title: null,
        mainText: "",
        authorId: null,
      });
      this.postImage = null;
      this.imageSelected = false;
    },
    savePostImage(file) {
      this.postImage = file;
      this.imageSelected = true;
    },
/*     testForm() {
      const postData = { ...this.postDraft };
      postData.image = this.postImage;
      postData.authorId = this.userId;
      const formData = this.bundleFormData(postData);

      console.log(formData.get("location"));
      console.log(formData.get("image"));
    }, */
    async getCoordinates() {
      const context = this;
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?city=${this.postDraft.location}&country=${this.postDraft.country}&format=json`
        );
        const result = await response.json();
        if (result[0]) {
          context.postDraft.lat = Number(result[0].lat);
          context.postDraft.lng = Number(result[0].lon);
          return;
        }
        alert(
          "Could not get Coordinates :-( Maybe there's a spelling mistake in the location or the city?"
        );
      } catch (err) {
        alert("Something went wrong :-( Could not get Coordinates...");
        console.log(err);
      }
    },

    bundleFormData(formDataObject) {
      const bundledFormData = new FormData();
      Object.entries(formDataObject).forEach(([property, value]) => {
        bundledFormData.append(`${property}`, value);
        console.log(bundledFormData.get(property));
      });
      return bundledFormData;
    },

    async submitPost() {
      const url = this.postUrl;
      const postData = { ...this.postDraft };
      postData.image = this.postImage;
      postData.authorId = this.userId;
      const formData = this.bundleFormData(postData);

      const response = await fetch(url, {
        method: "POST",
        enctype: "multipart/form-data", //check if this is correct
        headers: {
          // "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: "Bearer " + this.authToken,
        },
        body: formData,
      });
      const result = await response.json();
      const responseData = result;
      responseData.status = response.status;
      if (response.status === 200) {
        // maybe write further code here
      }
      console.log(responseData);
    },
  },
};
</script>

<style scoped>
/* #form-wrapper {
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
}
.form-btn:active {
  background-color: #f0a500;
}

#new-post-title {
  text-align: center;
} */
</style>
