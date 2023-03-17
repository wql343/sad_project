import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/login/LoginView.vue";
import RegisterView from "../views/login/RegisterView.vue";
import HomeView from "../views/home/HomeView.vue";
import StudentView from "../views/student/StudentView.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component:HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path:"/student",
    name:"student",
    component: StudentView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
