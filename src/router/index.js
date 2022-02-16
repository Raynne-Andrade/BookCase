import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Create from "../pages/CreateAccount.vue";
import BookCase from "../pages/BookCase.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Criar conta",
    component: Create,
  },
  {
    path: "/profile",
    name: "Perfil",
    component: BookCase,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;