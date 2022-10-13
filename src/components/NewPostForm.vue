<template>
  <BaseForm title="Create a New Blog Post" @submit="submitPost">
    <fieldset>
      <legend>Basc Info about the Trip</legend>
      <BaseFormInput
        name="location"
        label="Location"
        placeholder="like 'Barcelona'"
        v-model="formData.location"
      />
      <BaseFormInput
        name="country"
        label="Country"
        placeholder="like 'Spain'"
        v-model="formData.country"
        @change="saveDraft"
      />
      <!-- this should be readonly -->
      <BaseFormInput
        name="coordinates"
        label="Coordinates"
        placeholder="click the button"
        v-model="formData.coordinates.text"
        @change="saveDraft"
      />
      <!-- replace this by BaseButton -->
      <button class="form-btn" type="button" @click="getCoordinates">
        Get Coordinates
      </button>
      <BaseFormInput
        type="date"
        name="startDate"
        label="Start Date"
        v-model="formData.startDate"
        @change="saveDraft"
      />
      <BaseFormInput
        type="date"
        name="endDate"
        label="End Date"
        v-model="formData.endDate"
        @change="saveDraft"
      />
    </fieldset>

    <fieldset>
      <legend>Content</legend>
      <BaseFormInput
        type="url"
        name="image"
        label="Image Url"
        placeholder="Enter URL to image for your post"
        v-model="formData.image"
        @change="saveDraft"
      />
      <BaseFormInput
        name="title"
        label="Title"
        placeholder="Make it short and catchy ;-)"
        v-model="formData.title"
        @change="saveDraft"
      />
      <BaseFormInput
        type="textarea"
        name="mainText"
        label="Main Text"
        placeholder="Tell us all about your trip."
        v-model="formData.mainText"
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
      formData: this.$store.getters.postDraft,
      postUrl: "#", //figure out, what to do with this
    };
  },
  computed: {
    userId() {
      return this.$store.getters.userId;
    },
    
  },
  methods: {
    saveDraft() {
      this.$store.dispatch("updatePostDraft", this.formData);
    },
    clearDraft() {
      this.$store.dispatch("updatePostDraft", {
        location: null,
        country: null,
        coordinates: {
          lat: null,
          lng: null,
          text: "",
        },
        startDate: null,
        endDate: null,
        image: null,
        title: null,
        mainText: "",
        authorId: null, 
      });
    },
    testForm() {
      console.log(this.formData);
    },
    async getCoordinates() {
      const context = this;
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?city=${this.formData.location}&country=${this.formData.country}&format=json`
        );
        const result = await response.json();
        if (result[0]) {
          context.formData.coordinates.lat = Number(result[0].lat);
          context.formData.coordinates.lng = Number(result[0].lon);
          context.formData.coordinates.text = `${result[0].lat},${result[0].lon}`;
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

    async submitPost() {
      // const context = this;
      const url = "http://localhost:3000/login"; //change this to the new api endpoint and make it production ready
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.authToken,
        },
        body: JSON.stringify(this.formData),
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
