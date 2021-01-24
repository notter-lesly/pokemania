import { createRouter, createWebHistory } from "vue-router";
import Pokemania from "../views/Pokemania.vue";
import Random from "../views/Random.vue";
import Categories from "../views/Categories.vue";
import Detail from "../views/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Pokemania",
    component: Pokemania,
  },
  {
    path: "/random",
    name: "Random",
    component: Random,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/detail/:name",
    name: "Detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
