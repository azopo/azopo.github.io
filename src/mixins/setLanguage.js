export const setLanguage = {
  data() {
    return {
      lang: "",
    };
  },
  mounted() {
    if (localStorage.lang) {
      this.lang = localStorage.lang; // есть ли сохраненный язык
    }
  },
  watch: {
    lang(newLang) {
      localStorage.lang = newLang; // если язык изменился то сохраняю его
      this.$i18n.locale = this.lang; // при выборе из селекта обновить язык на странице
    },
  },
};
