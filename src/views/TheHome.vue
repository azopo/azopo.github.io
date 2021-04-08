<template>
  <main class="main">
    <h1 class="main__title">
      {{ $t("TheHome.main__title") }}
    </h1>
    <p class="main__desc">{{ $t("TheHome.main__desc") }}</p>
    <div class="main__content">
      <div class="main__content-card">
        <router-link to="/icon/bluric" class="main__content-link">
          <img
            src="../assets/img/iconPack-imgs/bluric-1.webp"
            alt="Bluric"
            class="main__content-pic"
        /></router-link>
      </div>
      <div class="main__content-card">
        <router-link to="/icon/borealis" class="main__content-link"
          ><img
            src="../assets/img/iconPack-imgs/borealis-1.webp"
            alt="Borealis"
            class="main__content-pic"
        /></router-link>
      </div>
      <div class="main__content-card">
        <router-link to="/icon/bladient" class="main__content-link"
          ><img
            src="../assets/img/iconPack-imgs/bladient-1.webp"
            alt="Bladient"
            class="main__content-pic"
        /></router-link>
      </div>
      <div class="main__content-card">
        <router-link to="/icon/peanut" class="main__content-link"
          ><img
            src="../assets/img/iconPack-imgs/peanut-1.webp"
            alt="Peanut"
            class="main__content-pic"
        /></router-link>
      </div>
      <div class="main__content-card">
        <router-link to="/icon/dion" class="main__content-link"
          ><img
            src="../assets/img/iconPack-imgs/dion-1.webp"
            alt="Dion"
            class="main__content-pic"
        /></router-link>
      </div>
      <div class="main__content-card">
        <router-link to="/icon/pixelful" class="main__content-link"
          ><img
            src="../assets/img/iconPack-imgs/pixelful-1.webp"
            alt="Pixelful"
            class="main__content-pic"
        /></router-link>
      </div>
      <div class="main__content-card">
        <router-link to="/icon/material" class="main__content-link">
          <img
            src="../assets/img/iconPack-imgs/material-1.webp"
            alt="Material"
            class="main__content-pic"
        /></router-link>
      </div>
      <div class="main__content-card">
        <router-link to="/icon/creamy" class="main__content-link"
          ><img
            src="../assets/img/iconPack-imgs/creamy-1.webp"
            alt="Creamy"
            class="main__content-pic"
        /></router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TheHome",
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
  padding: 50px 20px 50px 20px;
  font-size: 30px;
}
.main__desc {
  padding: 0 20px 0 20px;
  line-height: 20px;
  text-transform: uppercase;
  font-size: 20px;
  padding-bottom: 70px;
}
.main__content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  padding-bottom: 150px;
}
.main__content-card {
  width: 300px;
  height: 400px;
  overflow: hidden;
}
.main__content-pic {
  width: 100%;
}
.main__content-link:hover,
.main__content-link:focus,
.main__content-link:active {
  opacity: 0.6;
}
@media screen and (max-width: 1300px) {
  .main__content {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 1000px) {
  .main__content {
    grid-template-columns: repeat(2, 1fr);
  }
  .main__title {
    max-width: 700px;
  }
}
@media screen and (max-width: 650px) {
  .main__content {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 70px;
  }
  .main__title {
    font-size: 20px;
    line-height: 50px;
    max-width: 400px;
  }
  .main__desc {
    font-size: 15px;
  }
}
</style>
