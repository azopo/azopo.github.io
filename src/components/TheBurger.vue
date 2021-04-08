<template>
  <div class="burder__wraper">
    <input
      type="checkbox"
      id="checkbox3"
      v-model="checkbox"
      class="checkbox3 visuallyHidden"
      @click="showMenu"
    />
    <label for="checkbox3">
      <div class="hamburger hamburger3">
        <span class="bar bar1"></span>
        <span class="bar bar2"></span>
        <span class="bar bar3"></span>
        <span class="bar bar4"></span>
      </div>
    </label>
    <transition name="fade">
      <nav v-if="show" class="header__nav">
        <ul class="header__nav-ul">
          <li class="header__nav-li">
            <router-link @click="showMenu" to="/" class="header__nav-link"
              >{{ $t("TheHead.link__home") }}
            </router-link>
          </li>
          <li class="header__nav-li">
            <router-link
              @click="showMenu"
              to="/instruction"
              class="header__nav-link"
              >{{ $t("TheHead.link__inct") }}
            </router-link>
          </li>
          <li class="header__nav-li">
            <router-link
              @click="showMenu"
              to="/iconList"
              class="header__nav-link"
              >{{ $t("TheHead.link__icon") }}
            </router-link>
          </li>
          <li class="header__nav-li">
            <router-link
              @click="showMenu"
              to="/contacts"
              class="header__nav-link"
              >{{ $t("TheHead.link__cont") }}
            </router-link>
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
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      checkbox: false,
    };
  },
  methods: {
    showMenu() {
      this.show = !this.show;
      this.checkbox = !this.checkbox;
    },
  },

  name: "TheBurger",
};
</script>

<style scoped>
.burder__wraper {
  display: none;
}

.header__nav {
  padding-top: 20px;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
}

.header__nav-ul {
  text-align: end;
  margin-top: 20px;
  margin-right: 20px;
}

.header__nav-li {
  padding-bottom: 20px;
}

.header__nav-link {
  text-transform: lowercase;
  text-decoration: none;
  color: white;
}

.header__nav-link:hover {
  color: #b3b3b3;
}

.header__lang {
  margin-top: 20px;
  margin-right: 20px;
  color: white;
  margin-bottom: 25px;
  background-color: black;
  border: none;
}

/**/
.visuallyHidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.hamburger {
  position: fixed;
  z-index: 999;
  margin-left: 10px;
  width: 30px;
  height: 30px;
}

.hamburger .bar {
  padding: 0;
  width: 30px;
  height: 4px;
  background-color: #ffffff;
  display: block;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  position: absolute;
}

.bar1 {
  top: 0;
}

.bar2,
.bar3 {
  top: 13.5px;
}

.bar3 {
  right: 0;
}

.bar4 {
  bottom: 0;
}

.hamburger3 .bar1 {
  transform-origin: 5%;
}

.hamburger3 .bar4 {
  transform-origin: 5%;
}

.checkbox3:checked + label > .hamburger3 > .bar1 {
  transform: rotate(45deg);
  height: 3px;
  width: 42px;
}

.checkbox3:checked + label > .hamburger3 > .bar3 {
  transform: rotate(45deg);
  height: 3px;
  background-color: transparent;
}

.checkbox3:checked + label > .hamburger3 > .bar2 {
  transform: rotate(-45deg);
  height: 3px;
  background-color: transparent;
}

.checkbox3:checked + label > .hamburger3 > .bar4 {
  transform: rotate(-45deg);
  height: 3px;
  width: 42px;
}

@media screen and (max-width: 650px) {
  .burder__wraper {
    display: flex;
  }
}
</style>
