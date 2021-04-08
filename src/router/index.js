import { createRouter, createWebHashHistory } from "vue-router";
import TheHome from "@/views/TheHome";
import TheInstruction from "@/views/TheInstruction";
import AppIcon from "@/views/TheIcon";
import TheList from "@/views/TheList";
import TheContacts from "@/views/TheContacts";
import TheError from "@/views/TheError";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      component: TheHome,
      alias: "/",
    },
    {
      path: "/instruction",
      component: TheInstruction,
    },
    {
      path: "/icon/:iconPack",
      component: AppIcon,
    },
    {
      path: "/iconList",
      component: TheList,
    },
    {
      path: "/contacts",
      component: TheContacts,
    },
    {
      path: "/error",
      component: TheError,
    },
  ],
});

export default router;
