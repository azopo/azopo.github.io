import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";
import AppHead from "@/components/TheHead";
import AppFooter from "@/components/TheFooter";
import { createI18n } from "vue-i18n";
import { setLanguage } from "@/mixins/setLanguage";
//
import ru from "@/locale/ru.json";
import uk from "@/locale/uk.json";
import en from "@/locale/en.json";
let userLang;

userLang = navigator.language;
if (userLang == "en-US" || userLang == "en-UK") {
  userLang = "en"; //костыль чтобы убрать ворнинги, исправить
}
const i18n = createI18n({
  locale: userLang,
  fallbackLocale: "en",
  messages: {
    uk,
    ru,
    en,
  },
});
//

createApp(App)
  .mixin(setLanguage)
  .use(i18n)
  .use(router)
  .component("the-head", AppHead)
  .component("the-footer", AppFooter)
  .mount("#app");
