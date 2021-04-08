<template>
  <main class="contact__wrapper">
    <div class="contact__container">
      <h1 class="contact__title">{{ $t("TheContact.contact__title") }}</h1>
      <div class="contact__refund">
        <h2 class="contact__title-ref">
          {{ $t("TheContact.contact__title-ref_1") }}
        </h2>
        <p class="contact__desc">
          {{ $t("TheContact.contact__desc") }}
          <a
            class="contact__email"
            href="mailto:black.icons.info@gmail.com?subject=Повернути"
            >black.icons.info@gmail.com</a
          >
        </p>
      </div>
      <div class="contact__refund">
        <h2 class="contact__title-ref">
          {{ $t("TheContact.contact__title-ref_2") }}
        </h2>
        <p class="contact__desc">
          <a class="contact__email" href="mailto:black.icons.info@gmail.com"
            >black.icons.info@gmail.com</a
          >
          <br />
          <a class="contact__email" href="https://telegram.im/@dino_slavik"
            >Telegram</a
          >
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TheContacts",
};
</script>

<style scoped>
.contact__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.contact__container {
  padding: 0 20px 0 20px;
}
.contact__title {
  margin-top: 50px;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 30px;
}
.contact__title-ref {
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 20px;
  border-left: 3px solid white;
  padding-left: 10px;
}
.contact__desc {
  font-size: 20px;
  /*width: 700px;*/
  margin-bottom: 50px;
  line-height: 40px;
}
.contact__email {
  text-decoration: none;
  color: #a2a1a1;
}
@media screen and (max-width: 1000px) {
  .contact__container {
    max-width: 900px;
  }
}
@media screen and (max-width: 425px) {
  .contact__title {
    font-size: 20px;
  }
  .contact__title-ref {
    font-size: 17px;
  }
  .contact__desc {
    font-size: 15px;
  }
}
</style>
