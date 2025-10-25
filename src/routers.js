import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import AddRestaurant from "./components/AddRestaurant.vue";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
    meta: { requiresAuth: true }
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
    meta: { guest: true }
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
    meta: { guest: true }
  },
  {
    name: "AddRestaurant",
    component: AddRestaurant,
    path: "/add",
    meta: { requiresAuth: true }
  },
  {
    name: "UpdateRestaurant",
    component: UpdateRestaurant,
    path: "/update/:id",
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user-info');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'SignUp' });
  } else if (to.meta.guest && isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
