import { createWebHistory, createRouter } from "vue-router";
import Login from "../pages/Login.vue";
import Create from "../pages/CreateAccount.vue";
import BookCase from "../pages/BookCase.vue";
import RegisterBook from "../pages/RegisterBook.vue";
import Profile from '../pages/Profile.vue'
import InfoBook from '../pages/InfoBook.vue'

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/create",
    name: "Criar conta",
    component: Create,
  },
  {
    path: "/home/:user",
    name: "Home",
    component: BookCase,
  },
  {
    path: "/register-book",
    name: "Registrar um novo livro",
    component: RegisterBook,
  },
  {
    path: "/profile",
    name: "Perfil",
    component: Profile,
  }
  ,
  {
    path: "/info/:book/:id",
    name: "Info",
    component: InfoBook,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;