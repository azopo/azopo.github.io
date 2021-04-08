<template>
  <footer class="footer">
    <p class="footer__content">
      {{ $t("TheFooter.footer__content") }}
    </p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  margin: 0 auto;
  max-width: 1000px;
}
.footer__content {
  line-height: 30px;
  text-align: center;
  padding-bottom: 30px;
  opacity: 0.2;
}
@media screen and (max-width: 425px) {
  .footer__content {
    padding: 0 5px 0 5px;
    font-size: 10px;
  }
}
</style>
