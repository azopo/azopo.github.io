<template>
  <main class="main">
    <h1 class="main__title">
      {{ iconName }} - {{ $t("TheIcon.main__title") }}
    </h1>
    <div class="main__content-pages">
      <div class="main__content-card-pages">
        <img
          :alt="iconName"
          class="main__content-pic"
          :src="require(`../assets/img/iconPack-imgs/${iconName}-1.webp`)"
        />
      </div>

      <div class="main__content-card-pages">
        <img
          :alt="iconName"
          class="main__content-pic"
          :src="require(`../assets/img/iconPack-imgs/${iconName}-2.webp`)"
        />
      </div>
    </div>
    <button
      type="button"
      @click="runWfpWdgt(payLink[iconName])"
      class="main__pay-btn"
    >
      {{ $t("TheIcon.pay__btn") }}
    </button>
  </main>
</template>

<script>
export default {
  mounted() {
    let wayScript = document.createElement("script");
    wayScript.setAttribute(
      "src",
      "https://secure.wayforpay.com/server/pay-widget.js?ref=button"
    );
    document.head.appendChild(wayScript);
  },
  methods: {
    runWfpWdgt(url) {
      // eslint-disable-next-line no-undef
      let wayforpay = new Wayforpay();
      wayforpay.invoice(url);
    },
  },
  data() {
    return {
      iconName: this.$route.params.iconPack,
      payLink: {
        bluric: "https://secure.wayforpay.com/button/bd5352545bc72",
        borealis: "https://secure.wayforpay.com/button/be041460d2ed3",
        bladient: "https://secure.wayforpay.com/button/b7af62806c053",
        peanut: "https://secure.wayforpay.com/button/b996e66949e58",
        dion: "https://secure.wayforpay.com/button/bc813fce5f6f5",
        pixelful: "https://secure.wayforpay.com/button/b8103626a1123",
        material: "https://secure.wayforpay.com/button/b360459fb46ab",
        creamy: "https://secure.wayforpay.com/button/b4f9647042548",
      },
    };
  },
  name: "AppIcon",
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
  padding: 50px 20px 70px 20px;
  line-height: 40px;
  font-size: 30px;
}

.main__content-pages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  padding-bottom: 80px;
}

.main__content-card-pages {
  width: 400px;
  height: auto;
  overflow: hidden;
}
.main__content-pic {
  width: 100%;
}

.main__pay-btn {
  width: 300px;
  height: 60px;
  margin-bottom: 150px;
  border-radius: 45px;
  border: none;
  font-size: 22px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: bold;
  color: #000000;
  background: white;
}
.main__pay-btn:hover {
  background: rgba(255, 255, 255, 0.733);
}
@media screen and (max-width: 900px) {
  .main__content-card-pages {
    height: auto;
    width: 300px;
  }
}
@media screen and (max-width: 650px) {
  .main__content-pages {
    grid-template-columns: repeat(1, 1fr);
  }
  .main__title {
    font-size: 20px;
  }
}
</style>
