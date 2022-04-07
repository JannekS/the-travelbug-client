<template>
  <div class="frame">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.frame {
  width: 100%;
  height: 85vh;
}
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #98cbee;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 30vh auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
