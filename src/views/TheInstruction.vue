<template>
  <main class="main">
    <h1 class="main__title">{{ $t("TheIncsruction.main__title") }}</h1>
    <div class="main_ints-cards">
      <div class="main_ints-card">
        <p class="main_ints-card-title">{{ $t("TheIncsruction.step_1") }}</p>
        <img
          src="../assets/img/instruction-imgs/inst_1.webp"
          alt="Крок 1"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">{{ $t("TheIncsruction.step_2") }}</p>
        <img
          src="../assets/img/instruction-imgs/inst_2.webp"
          alt="Крок 2"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">
          {{ $t("TheIncsruction.step_3") }}
          <span class="main_ints-card-title-dec">{{
            $t("TheIncsruction.step_3_span")
          }}</span>
        </p>
        <img
          src="../assets/img/instruction-imgs/inst_3.webp"
          alt="Крок 3"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">
          {{ $t("TheIncsruction.step_4") }}
          <span class="main_ints-card-title-dec">{{
            $t("TheIncsruction.step_4_span")
          }}</span>
        </p>
        <img
          src="../assets/img/instruction-imgs/inst_4.webp"
          alt="Крок 4"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">
          {{ $t("TheIncsruction.step_5") }}
          <span class="main_ints-card-title-dec">{{
            $t("TheIncsruction.step_5_span")
          }}</span>
        </p>
        <img
          src="../assets/img/instruction-imgs/inst_5.webp"
          alt="Крок 5"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">
          {{ $t("TheIncsruction.step_6") }}
        </p>
        <img
          src="../assets/img/instruction-imgs/inst_6.webp"
          alt="Крок 6"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">{{ $t("TheIncsruction.step_7") }}</p>
        <img
          src="../assets/img/instruction-imgs/inst_7.webp"
          alt="Крок 7"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">
          {{ $t("TheIncsruction.step_8") }}
          <span class="main_ints-card-title-dec">{{
            $t("TheIncsruction.step_8_span")
          }}</span>
        </p>
        <img
          src="../assets/img/instruction-imgs/inst_8.webp"
          alt="Крок 8"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">
          {{ $t("TheIncsruction.step_9") }}
        </p>
        <img
          src="../assets/img/instruction-imgs/inst_9.webp"
          alt="Крок 9"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">
          {{ $t("TheIncsruction.step_10") }}
          <span class="main_ints-card-title-dec">{{
            $t("TheIncsruction.step_10_span")
          }}</span>
        </p>
        <img
          src="../assets/img/instruction-imgs/inst_10.webp"
          alt="Крок 10"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">
          {{ $t("TheIncsruction.step_11") }}
          <span class="main_ints-card-title-dec">{{
            $t("TheIncsruction.step_11_span")
          }}</span>
        </p>
        <img
          src="../assets/img/instruction-imgs/inst_11.webp"
          alt="Крок 11"
          class="main_ints-card-img"
        />
      </div>
      <div class="main_ints-card">
        <p class="main_ints-card-title">
          {{ $t("TheIncsruction.step_12") }}
        </p>
        <img
          src="../assets/img/instruction-imgs/inst_12.webp"
          alt="Крок 12"
          class="main_ints-card-img"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TheInstruction",
};
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}
.main__title {
  text-transform: uppercase;
  font-weight: bold;
  padding-top: 50px;
  padding-bottom: 70px;
  font-size: 30px;
}

.main_ints-card-img {
  border-radius: 20px;
  height: 700px;
}
.main_ints-card {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px 0;
  justify-content: space-between;
  margin-bottom: 50px;
}
.main_ints-card-title {
  padding-top: 40px;
  padding-bottom: 20px;
  padding-right: 20px;
  line-height: 40px;
}
.main_ints-card-title-dec {
  background-color: rgb(0, 0, 0);
  padding: 7px;
  border-radius: 5px;
}
@media (prefers-color-scheme: dark) {
  .main_ints-card-title-dec {
    color: #ffffff;
    background-color: rgb(28, 28, 28);
  }
}
@media screen and (max-width: 820px) {
  .main_ints-card {
    border-top: white solid 1px;
    flex-direction: column;
    align-items: center;
  }
}
@media screen and (max-width: 650px) {
  .main__title {
    font-size: 20px;
  }
}
@media screen and (max-width: 425px) {
  .main_ints-card-img {
    height: 400px;
  }
}
</style>
