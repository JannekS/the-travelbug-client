<template>
  <div class="container">
    <h1>Comming soon:</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style scoped>
.container {
  padding: 30px;
  margin: 10px 20px;
  min-height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgb(98, 98, 98);
  text-align: center;
}

p {
  font-size: 1.2rem;
}
</style>
