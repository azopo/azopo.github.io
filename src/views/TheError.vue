<template>
  <main class="error__wraper">
    <h1>{{ $t("TheError.error__title") }}</h1>
  </main>
</template>

<script>
export default {
  name: "TheError",
};
</script>

<style scoped>
.error__wraper {
  height: 300px;
}
h1 {
  padding-top: 100px;
  text-align: center;
}
</style>
