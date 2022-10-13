<template>
  <div class="scroll-wrapper">
    <div class="detail-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.scroll-wrapper {
  width: 100%;
  height: 85vh;
  overflow-y: auto;
}
.detail-wrapper {
  max-width: 1100px;
  margin: 0 10px 10px 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgb(98, 98, 98);
  background-color: white;
}

@media only screen and (min-width: 1150px) {
  .detail-wrapper {
    padding-left: 40px;
    padding-right: 40px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
