<template>
  <header class="header" id="head">
    <the-burger></the-burger>
    <nav class="header__nav">
      <ul class="header__nav-ul">
        <li class="header__nav-li">
          <router-link to="/" class="header__nav-link">{{
            $t("TheHead.link__home")
          }}</router-link>
        </li>
        <li class="header__nav-li">
          <router-link to="/instruction" class="header__nav-link">{{
            $t("TheHead.link__inct")
          }}</router-link>
        </li>
        <li class="header__nav-li">
          <router-link to="/iconList" class="header__nav-link">{{
            $t("TheHead.link__icon")
          }}</router-link>
        </li>
        <li class="header__nav-li">
          <router-link to="/contacts" class="header__nav-link">{{
            $t("TheHead.link__cont")
          }}</router-link>
        </li>
      </ul>
      <select v-model="lang" class="header__lang">
        <option class="header__lang-item" disabled value="">
          {{ $t("TheHead.lang__item-change") }}
        </option>
        <option class="header__lang-item" value="ru">
          {{ $t("TheHead.lang__item-ru") }}
        </option>
        <option class="header__lang-item" value="uk">
          {{ $t("TheHead.lang__item-uk") }}
        </option>
        <option class="header__lang-item" value="en">
          {{ $t("TheHead.lang__item-en") }}
        </option>
      </select>
    </nav>
    <div class="header__bg"></div>
  </header>
</template>

<script>
import TheBurger from "@/components/TheBurger";
import { setLanguage } from "@/mixins/setLanguage";
export default {
  mixins: [setLanguage],
  name: "AppHead",
  components: {
    TheBurger,
  },
};
</script>

<style scoped>
.header__nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: rgb(0, 0, 0);
  padding: 20px 20px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
}
.header__nav-ul {
  display: flex;
  flex-wrap: wrap;
}
.header__nav-li {
  margin-left: 20px;
  font-size: 20px;
}
.header__lang {
  color: white;
  margin-right: 50px;
  background-color: black;
  border: none;
}

.header__lang-item {
  color: #ffffff;
}
.header__lang:hover {
  color: #a7a7a7;
}
.header__nav-link {
  text-transform: lowercase;
  text-decoration: none;
  color: white;
}
.header__nav-link:hover {
  color: #a7a7a7;
}
.header__bg {
  margin-top: 70px;
  width: 100%;
  height: 300px;
  background: url("../assets/img/pages-imgs/header_bg-white.webp") no-repeat
    center;
  background-size: cover;
  overflow: hidden;
}
@media (prefers-color-scheme: dark) {
  .header__bg {
    background: url("../assets/img/pages-imgs/header_bg-dark.webp") no-repeat
      center;
    background-size: cover;
    overflow: hidden;
  }
}
@media screen and (max-width: 1300px) {
  .header__bg {
    height: 200px;
  }
}
@media screen and (max-width: 1000px) {
  .header__bg {
    margin-top: 30px;
    height: 100px;
  }
}
@media screen and (max-width: 650px) {
  .header__nav {
    display: none;
  }
}
</style>
