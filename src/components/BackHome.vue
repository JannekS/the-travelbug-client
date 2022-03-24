<template>
  <div class="go-back">
    <router-link to="/"
      ><img src="/icons/arrow-left.svg" /> <span>Back to overview</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.go-back {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #e6d5b8;
  margin: 10px 20px;
  float: left;
  width: 160px;
}

.go-back img,
span {
  vertical-align: middle;
  height: 1.1rem;
}
</style>
