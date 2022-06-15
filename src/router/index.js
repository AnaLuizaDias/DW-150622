import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import artistasView from "../views/artistasView.vue";
import musicasView from "../views/musicasView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/artistas", name: "aristas", component: artistasView },
    { path: "/musicas", name: "musicas", component: musicasView },
  ],
});

export default router;
