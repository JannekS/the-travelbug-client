<template>
  <BaseForm title="Create a New Blog Post">
    <fieldset>
      <legend>Basc Info about the Trip</legend>
      <BaseFormInput
        name="location"
        label="Location"
        placeholder="like 'Barcelona'"
        v-model="postDraft.location"
      />
      <BaseFormInput
        name="country"
        label="Country"
        placeholder="like 'Spain'"
        v-model="postDraft.country"
        @change="saveDraft"
      />
      <!-- this should be readonly -->
      <!-- <BaseFormInput
        name="coordinates"
        label="Coordinates"
        placeholder="click the button"
        v-model="postDraft.coordinates.text"
        @change="saveDraft"
      /> -->
      <!-- replace this by BaseButton -->
      <button class="form-btn" type="button" @click="getCoordinates">
        Get Coordinates
      </button>
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
        v-model="postDraft.endDate"
        @change="saveDraft"
      />
    </fieldset>

    <fieldset>
      <legend>Content</legend>
      <BaseFormInput
        type="file"
        name="image"
        label="Select an Image"
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
        <!-- replace this by BaseButton -->
        <input
          type="reset"
          value="Cancel"
          class="form-btn"
          id="cancel-post-btn"
          @click="clearDraft"
        />
        <!-- replace this by BaseButton -->
        <input
          type="submit"
          value="Save Post"
          class="form-btn"
          id="save-post-btn"
          @click="testForm"
        />
      </div>
    </div>
  </BaseForm>
</template>

<script>
import BaseForm from "@/components/ui/BaseForm.vue";
import BaseFormInput from "@/components/ui/BaseFormInput.vue";

export default {
  components: {
    BaseForm,
    BaseFormInput,
  },
  data() {
    return {
      postDraft: this.$store.getters.postDraft,
      postUrl: process.env.VUE_APP_SERVER_URL,
      postImage: null,
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
    },
    savePostImage(file) {
      this.postImage = file;
    },
    testForm() {
      const postData = { ...this.postDraft };
      postData.image = this.postImage;
      postData.authorId = this.userId;
      const formData = this.bundleFormData(postData);
      // formData.append("image", this.postImage);

      /* const formData = new FormData();
      formData.append("location", this.postDraft.location);
      formData.append("country", this.postDraft.country);
      formData.append("lat", this.postDraft.lat);
      formData.append("lng", this.postDraft.lng);
      formData.append("startDate", this.postDraft.startDate);
      formData.append("endDate", this.postDraft.endDate);
      formData.append("title", this.postDraft.title);
      formData.append("mainText", this.postDraft.mainText);
      formData.append("image", this.postImage);
      formData.append("authorId", this.userId); */
      console.log(formData.get("location"));
      console.log(formData.get("image"));
    },
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
      // const context = this;
      const url = this.postUrl;
      const formData = new FormData(this.form);
      const response = await fetch(url, {
        method: "POST",
        enctype: "multipart/form-data", //check if this is correct
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          Authorization: "Bearer " + this.authToken,
        },
        body: formData,
      });
      const result = await response.json();
      this.responseData = result;
      this.responseData.status = response.status;
      if (response.status === 200) {
        // maybe write further code here
      }
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
