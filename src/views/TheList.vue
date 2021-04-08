<template>
  <main class="list">
    <div class="list__container">
      <h1 class="list__title">{{ $t("TheList.list__title") }}</h1>
      <div class="list__items-container">
        <ul class="list__items" v-for="icon in iconsList" :key="icon">
          <li class="list__item">{{ icon }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      iconsList: [
        "AliExpress",
        "App Store",
        "Bolt",
        "Books",
        "Calendar",
        "Camera",
        "Clock",
        "Discord",
        "Facebook",
        "Files",
        "Gmail",
        "Google Chrome",
        "Google Docs",
        "Google Drive",
        "Google Photos",
        "Google Play Books",
        "Google Sheets",
        "Google Slides",
        "Health",
        "Instagram",
        "Messages",
        "Mi Fit",
        "Notes",
        "Phone",
        "Photos",
        "Podcasts",
        "Reminders",
        "Settings",
        "Shazam",
        "Spotify",
        "Steam",
        "Telegram",
        "TikTok",
        "Tinder",
        "Twitter",
        "Uber",
        "Uklon",
        "Viber",
        "VK",
        "Wallet",
        "Watch",
        "YouTube",
      ],
    };
  },
  name: "TheList",
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
.list__container {
  width: fit-content;
}
.list__title {
  border-left: 3px solid white;
  padding-left: 5px;
  margin: 50px 0 50px 20px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.list__items {
  list-style-type: disc;
  line-height: 35px;
}
.list__items-container {
  margin: 0 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  margin-bottom: 100px;
}
@media screen and (max-width: 425px) {
  .main_ints-card-img {
    height: 400px;
  }
}
</style>
